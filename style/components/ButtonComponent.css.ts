import { style } from '@vanilla-extract/css';

export const ButtonComponentStyle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 10px',

  position: 'absolute',
  width: '10rem',
  height: '2rem',
  // left: '20px',
  // top: '20px',

  background:
    'linear-gradient(174.6deg, #FFFFFF 4.31%, #FED15F 50.01%, #FEBE30 95.71%)',

  border: '1px solid var(--color-yellow-300)',
  borderRadius: '4px',
  ':hover': {
    cursor: 'pointer',
  },
});
