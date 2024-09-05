import kaplay, { GameObj, PosComp, SpriteComp, AreaComp, BodyComp, KAPLAYCtx } from 'kaplay'
import Walk from 'assets/Images/Crouch.png';
import { useState } from 'react';



export const useKaplay = (canvasRef: React.MutableRefObject<null | HTMLCanvasElement>) => {
  const FLOOR_HEIGHT = 48;
  const TREE_MOVE_SPEED = 480;
  const playerState = {
    leftJump: 1
  }
  let score = 0;

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


      k.onKeyPress("space", () => jump(player, playerState));
      k.onClick(() => {
        console.log(playerState)
        jump(player, playerState)
      });

      spawnTree(k, FLOOR_HEIGHT, TREE_MOVE_SPEED);
      
    })
    // console.log(k.pl)
    // k.go('game');
  }
}

const jump = (player: GameObj<SpriteComp | PosComp | AreaComp | BodyComp>, playerState: { leftJump: number }) => {
  if (player.isGrounded() && playerState.leftJump === 0) {
    playerState.leftJump = 1;
  }
  
  if (player.isGrounded()) {
    playerState.leftJump = 1;
    player.jump(800);
  }
  else if (!player.isGrounded() && playerState.leftJump > 0) {
    player.jump(800);
    playerState.leftJump--;
  }
};

const spawnTree = (k: KAPLAYCtx<{}, string>, FLOOR_HEIGHT: number, TREE_MOVE_SPEED: number) => {
  k.add([
    k.rect(48, k.rand(32, 96)),
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
}