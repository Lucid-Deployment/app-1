import { theme } from 'twin.macro';
import facepaint from 'facepaint';

const breakpoints = [theme`screens`][0];

const mq = facepaint(
  Object.keys(breakpoints).map(
    (bpKey) => `@media (min-width: ${breakpoints[bpKey]})`,
  ),
);

export { mq };
