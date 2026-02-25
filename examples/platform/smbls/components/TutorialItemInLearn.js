export const TutorialItemInLearn = {
  extend: 'Flex',
  state: {
    title: 'Getting started',
    descr: 'Getting started with basic landing page',
    youtubeId: 'jYU0soXY-To',
    duration: '14:31'
  },
  props: {
    align: 'stretch',
    padding: '0',
    gap: 'A',
    round: '0',
    overflow: 'visible',
    cursor: 'pointer',
    opacity: '0.8',
    transition: 'A defaultBezier all',
    ':hover': {
      opacity: '1',
      '& .playButton': {
        opacity: '1'
      }
    },
    onClick: (ev, el, s) => {
      el.call('openModalVideo', `https://www.youtube.com/embed/${s.youtubeId}?controls=1&amp;autoplay=1`)
    }
  },
  Box: {
    position: 'relative',
    width: 'D3',
    Img: {
      display: 'block',
      round: 'Z2',
      position: 'relative',
      width: '100%',
      src: 'https://img.youtube.com/vi/{{ youtubeId }}/hqdefault.jpg'
    },
    Circle: {
      extends: 'Flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'title',
      Icon: {
        fontSize: 'D',
        name: 'play oval fill'
      }
    }
  },
  Flex: {
    flow: 'y',
    gap: 'W2',
    Strong: {
      text: '{{ title }}'
    },
    Span: {
      whiteSpace: 'nowrap',
      fontWeight: '200',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      text: '{{ descr }}'
    },
    Time: {
      margin: 'auto - -',
      text: '{{ duration }}',
      fontWeight: '200'
    }
  }
}
