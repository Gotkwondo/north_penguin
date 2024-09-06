import kaplay, { GameObj, PosComp, SpriteComp, AreaComp, BodyComp, KAPLAYCtx } from 'kaplay'
import Walk from 'assets/Images/Crouch.png';



export const useKaplay = (canvasRef: React.MutableRefObject<null | HTMLCanvasElement>) => {
  const FLOOR_HEIGHT = 48;
  const TREE_MOVE_SPEED = 480;
  const playerState: {
    leftJump: number;
    score: number;
  } = {
    leftJump: 1,
    score: 0
  };

  if (canvasRef.current) {
    let k: KAPLAYCtx<{}, string> = kaplay({
      canvas: canvasRef.current,
      root: canvasRef.current
    })
    k.setBackground(141, 183, 255);
    k.loadSprite("Penguein", Walk);
    k.scene('game', () => {
      k.setGravity(2400);

      // 플레이어 컴포넌트 정의
      const player = k.add([
        k.sprite("Penguein"),
        k.pos(80, 40),
        k.area(),
        k.body(),
      ]);

      player.onCollide("tree", () => {
        k.go("gameOver", Math.floor(playerState.score / 100));
        // k.burp();
      })

      // 바닥 컴포넌트 생성
      k.add([
        k.rect(k.width(), FLOOR_HEIGHT),
        k.outline(4),
        k.pos(0, k.height()),
        k.anchor("botleft"),
        k.area(),
        k.body({ isStatic: true }),
        k.color(132, 101, 236),
      ]);

      const scoreLabel = k.add([
        k.text(`${Math.floor(playerState.score / 100)}`),
        k.pos(24, 24),
      ]);

      // 플레이어가 진행한 거리에 따라 점수 증가
      k.onUpdate(() => {
        playerState.score++;
        scoreLabel.text = `${Math.floor(playerState.score / 100)}`;
      });

      // 스페이스 키와 클릭 이벤트에 jump 기능 할당
      k.onKeyPress("space", () => jump(player, playerState));
      k.onClick(() => jump(player, playerState));

      // 장애물 생성 기능
      spawnTree(k, FLOOR_HEIGHT, TREE_MOVE_SPEED);
      
    })

    k.scene("gameOver", (score: number) => {
      k.add([
        // sprite()
        k.pos(k.width() / 2, k.height() / 2 - 64),
        k.scale(2),
        k.anchor("center")
      ]);

      k.add([
        k.text(`${score}`),
        k.pos(k.width() / 2, k.height() / 2),
        k.scale(2),
        k.anchor("center")
      ]);

      k.onKeyPress("space", () => k.go('game'));
      k.onClick(() => k.go('game'));
    })
    // console.log(k.pl)
    k.go('game');
  }
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
  TREE_MOVE_SPEED: number
) => {
  k.add([
    k.rect(15, k.rand(32, 96)),
    k.area(),
    k.outline(4),
    k.pos(k.width(), k.height() - FLOOR_HEIGHT),
    k.anchor("botleft"),
    k.color(238, 143, 203),
    k.move(k.LEFT, TREE_MOVE_SPEED),
    // 생성하는 객체가 화면에서 offset되면 게임 라이브러리 내부에 저장된 데이터가 소멸한다.
    k.offscreen({ destroy: true }),
    "tree",
  ]);

  k.wait(k.rand(0.4, 1.5), () => spawnTree(k, FLOOR_HEIGHT, TREE_MOVE_SPEED));
};