import kaplay, { GameObj, PosComp, SpriteComp, AreaComp, BodyComp } from 'kaplay'
import Walk from 'assets/Images/Crouch.png';



export const useKaplay = (canvasRef: React.MutableRefObject<null | HTMLCanvasElement>) => {
  if (canvasRef.current) {
    let k = kaplay({
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
        k.body()
      ]);

      // 바닥 컴포넌트 생성
      k.add([
        k.rect(k.width(), 48),
        k.outline(4),
        k.pos(0, k.height()),
        k.anchor("botleft"),
        k.area(),
        k.body({ isStatic: true }),
        k.color(132, 101, 236),
      ]);

      // k.onKeyPress("space", () => jump(player));
      // k.onClick(() => jump(player));
    })
    // k.go('game')
  }
}

// const jump = (player: GameObj<SpriteComp | PosComp | AreaComp | BodyComp>) => {
//   if (player.isGrounded()) {
//     player.jump(900);
//   }
// }