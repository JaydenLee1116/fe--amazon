import { style } from '@vanilla-extract/css';

export const CarouselContentComponentStyle = style({
  display: 'block',
  backgroundColor: 'yellowgreen',
  width: '100%',
  height: '37.5rem',
  transition: 'transform 1s',
  transform: 'translateX(-100%)',
});
