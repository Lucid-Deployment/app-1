import React from 'react';

export function useIsMounted() {
  let mounted = React.useRef(null);

  React.useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

export const useIsoMorphicEffect = () => {
  const mounted = useIsMounted();

  return typeof window !== 'undefined' || mounted.current
    ? React.useLayoutEffect
    : React.useEffect;
};
