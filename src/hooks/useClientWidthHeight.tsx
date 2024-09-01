import React, { RefObject, useEffect, useState } from 'react';

/**
 * 사용자의 Display 사이즈의 변화에 따라 ref로 지정한 요소의 크기를 측정해 
 * canvas 요소에서 사용할 너비와 높이 전달
 * @param ref RefObject<HTMLElement>
 * @returns clientRects {width: number, height: number}
 */
export const useClientWidthHeight = (ref: RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight / 2.1);
      }
    };
    setClientWidthHeight();

    window.addEventListener('resize', setClientWidthHeight);
    return () => {
      window.removeEventListener('resize', setClientWidthHeight);
    };
  }, [ref]);

  const clientRects = { width, height };

  return clientRects;
};