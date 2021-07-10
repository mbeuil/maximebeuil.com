import { RefObject, useRef, useEffect } from 'react';

export const useClickAwayListener = <T extends HTMLElement | SVGElement>(
  clickAwayHandler: () => void,
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        clickAwayHandler();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickAwayHandler]);

  return ref;
};
