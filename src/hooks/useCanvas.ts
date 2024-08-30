import React, { RefObject, useEffect, useRef } from 'react';

/**
 * 게임을 display해주는 canvas의 설정을 해주는 Hook
 * @param canvasWidth : number
 * @param canvasHeight : number
 * @returns canvasRef: RefObject<HTMLCanvasElement>
 */
export const useCanvas = ( canvasWidth: number, canvasHeight: number) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    const setCanvas = () => {
      if (canvas && ctx) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
    };
    
    setCanvas();
  }, [canvasWidth, canvasHeight]);
  return canvasRef;
};