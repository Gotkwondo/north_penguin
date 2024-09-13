import kaplay, { GameObj, PosComp, SpriteComp, AreaComp, BodyComp, KAPLAYCtx } from 'kaplay'
import Walk from 'assets/Images/Crouch.png';

export const useKaplay = (canvasRef: React.MutableRefObject<null | HTMLCanvasElement>, start: boolean) => {
  const FLOOR_HEIGHT = 48;
  const TREE_MOVE_SPEED = 400;
  const playerState: {
    leftJump: number;
    score: number;
  } = {
    leftJump: 1,
    score: 0
  };
  console.log(canvasRef.current!.width)
  if (canvasRef.current && start) {
    console.log(canvasRef.current!.width)
    let k: KAPLAYCtx<{}, string> = kaplay({
      canvas: canvasRef.current,
      root: canvasRef.current,
      global: false,
    })
    console.log(canvasRef.current!.width)
    k.setBackground(141, 183, 255);
    k.loadSprite("Penguein", Walk);
    k.scene('game', () => {
      k.setGravity(2400);

      // 플레이어 컴포넌트 정의
      const player = k.add([
        k.sprite("Penguein"),
        k.pos(k.width() / 20, k.height() - FLOOR_HEIGHT),
        k.area(),
        k.body(),
        "player", // 플레이어 태그 추가
        "gameObj" // 모든 게임 객체에 공통 태그 추가
      ]);

      player.onCollide("tree", () => {
        k.go("gameOver", Math.floor(playerState.score / 100));
      })

      // 바닥 컴포넌트 생성
      k.add([
        k.rect(k.width() * 50, FLOOR_HEIGHT),
        k.outline(4),
        k.pos(0, k.height()),
        k.anchor("botleft"),
        k.area(),
        k.body({ isStatic: true }),
        k.color(132, 101, 236),
        "ground", // 바닥 태그 추가
        "gameObj" // 모든 게임 객체에 공통 태그 추가
      ]);

      const scoreLabel = k.add([
        k.text(`${Math.floor(playerState.score / 100)}`),
        k.pos(24, 24),
        "gameObj" // 공통 태그 추가
      ]);

      // 플레이어가 진행한 거리에 따라 점수 증가
      k.onUpdate(() => {
        playerState.score++;
        scoreLabel.text = `${Math.floor(playerState.score / 100)}`;
      });

      // 스페이스 키와 클릭 이벤트에 jump 기능 할당
      k.onKeyPress("up", () => jump(player, playerState));
      k.onClick(() => {
        jump(player, playerState)
      });

      // 장애물 생성 기능
      spawnTree(k, FLOOR_HEIGHT, TREE_MOVE_SPEED, playerState);
    })

    k.scene("gameOver", (score: number) => {
      k.add([
        k.text(`Score: ${score}\nPress Space to Restart`),
        k.pos(k.width() / 2, k.height() / 2),
        k.scale(k.width() > 650 ? 1.4 : 0.7),
        k.anchor("center"),
        "gameObj" // 공통 태그 추가
      ]);
      
      k.onKeyPress("space", () => k.go('game'));
      k.onClick(() => k.go('game'));
      playerState.score = 0;
    });

    k.go('game');

    return k;
  }
  return null;
}

/**
 * 플레이어의 점프 기능을 담당하는 함수, 이중 점프 가능
 * @param player kaplay.add로 생성된 객체 GameObj<SpriteComp | PosComp | AreaComp | BodyComp>
 * @param playerState 
 */
const jump = (
  player: GameObj<SpriteComp | PosComp | AreaComp | BodyComp>,
  playerState: {
  leftJump: number;
  score: number;
  }) => {
  if (player.isGrounded() && playerState.leftJump === 0) {
    playerState.leftJump = 1;
  }
  
  if (player.isGrounded()) {
    playerState.leftJump = 1;
    player.jump(800);
  }
  else if (!player.isGrounded() && playerState.leftJump > 0) {
    player.jump(850);
    playerState.leftJump--;
  }
};

/**
 * 무작위 장애물 생성 함수
 * @param k KAPLAYCtx<{}, string>
 * @param FLOOR_HEIGHT number
 * @param TREE_MOVE_SPEED number
 */
const spawnTree = (
  k: KAPLAYCtx<{}, string>,
  FLOOR_HEIGHT: number,
  TREE_MOVE_SPEED: number,
  playerState: {
    leftJump: number;
    score: number;
  }
) => {
  k.add([
    k.rect(15, k.rand(32, 90)),
    k.area(),
    k.outline(4),
    k.pos(k.width(), k.height() - FLOOR_HEIGHT),
    k.anchor("botleft"),
    k.color(238, 143, 203),
    k.move(k.LEFT, TREE_MOVE_SPEED),
    // 생성하는 객체가 화면에서 offset되면 게임 라이브러리 내부에 저장된 데이터가 소멸한다.
    k.offscreen({ destroy: true }),
    "tree",
    "gameObj" // 공통 태그 추가
  ]);

  k.wait(k.rand(0.5, 1.5), () => spawnTree(k, FLOOR_HEIGHT, TREE_MOVE_SPEED + (10 * Math.floor((playerState.score / 100) / 30)), playerState));
};