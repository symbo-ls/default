export const Partner = {
  extends: 'Picture',
  height: '1em',
  transition: 'opacity B, filter B',
  flexAlign: 'center center',
  '@mobileL': {
    margin: '0',
  },
  '@dark': {
    style: {
      filter: 'grayscale(100%)',
    },
    ':hover': {
      style: {
        filter: 'grayscale(0%)',
      },
      opacity: '1',
    },
  },
  '@light': {
    style: {
      filter: 'grayscale(100%)',
    },
    ':hover': {
      style: {
        filter: 'grayscale(0%)',
      },
      opacity: '.9',
    },
  },
  margin: '0',
  Img: null,
  Div: {
    props: {
      flexAlign: 'center center',
      height: '1em',
      '& svg': {
        minHeight: '1em',
      },
    },
    html: el => el.parent.props.src,
  },
};