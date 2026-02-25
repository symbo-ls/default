export const WatchVideo = {
  align: 'center flex-start',
  gap: 'B1',
  round: 'A2',
  padding: 'X2 D X2 X1',
  maxWidth: 'fit-content',
  transition: 'transform B defaultBezier',
  cursor: 'pointer',
  borderColor: 'line',
  borderWidth: '1px',
  borderStyle: 'solid',
  '@mobileL': {
    flow: 'y',
    align: 'center center',
    padding: 'A A B1 A',
    gap: 'C1',
    round: 'B2'
  },
  ':hover': {
    transform: 'scale(1.0085)',
    '& img': {
      transform: 'scale(1.0085)'
    },
    '& button': {
      letterSpacing: '.35px'
    }
  },
  onClick: (event, el, s) => {
    el.call('openModalVideo', 'https://www.youtube.com/embed/ko1TXI9pejg?autoplay=1')
  },
  Img: {
    src: 'video.png',
    boxSize: 'E F',
    transition: 'transform, B, defaultBezier',
    '@mobileL': {
      boxSize: 'F 100%'
    }
  },
  Flex: {
    flow: 'y',
    align: 'flex-start flex-start',
    gap: 'A2',
    P: {
      text: `6 minutes video demonstrating
      11 unique features of Symbols`,
      maxWidth: 'F+C2',
      fontWeight: '300',
      margin: '0'
    },
    Button: {
      text: 'Watch the Video',
      theme: 'transparent',
      padding: '0',
      gap: 'Y',
      fontWeight: '500',
      color: 'title',
      transition: 'letter-spacing B defaultBezier',
      Icon: {
        name: 'playOutline',
        fontSize: 'B'
      }
    },
    '@mobileL': {
      align: 'center flex-start',
      textAlign: 'center'
    }
  }
}
