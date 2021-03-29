import { useIsoMorphicEffect as useIsoMorphicEffectFn } from './hooks';
import React from 'react';

export const useMatchMedia = (mediaQuery) => {
  const useIsoMorphicEffect = useIsoMorphicEffectFn();

  const [matches, setMatches] = React.useState(null);

  useIsoMorphicEffect(() => {
    const resizeHandler = () => {
      setMatches(() => window.matchMedia(mediaQuery).matches);

      console.log(window.matchMedia(mediaQuery).matches);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [mediaQuery]);

  return matches;
};
