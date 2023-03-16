import { style } from '@vanilla-extract/css';

export const AnchorComponentStyle = style({
  width: '4rem',
  height: '2rem',
  padding: '.5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',

  fontWeight: '600',
  fontSize: '13px',
  lineHeight: '1rem',
  color: 'var(--color-white)',
});
