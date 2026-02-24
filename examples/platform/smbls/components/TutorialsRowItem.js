export const TutorialsRowItem = {
  padding: '0',
  gap: 'Y1',
  flow: 'y',
  widthRange: 'F2',
  round: '0',
  overflow: 'visible',
  ':after': null,
  cursor: 'pointer',
  opacity: '0.8',
  transition: 'A defaultBezier all',
  ':hover': {
    opacity: '1',
    '& .playButton': {
      opacity: '1',
    },
  },
  onClick: (ev, el, s) => {
    el.call('openModalVideo', `https://www.youtube.com/embed/${s.youtubeId}?controls=1&amp;autoplay=1`)
  },
  state: {
    text: 'Getting started with basic landing page',
    youtubeId: 'jYU0soXY-To',
    duration: '14:31',
  },
  Img: null,
  Box: {
    position: 'relative',
    Img: {
      round: 'A',
      position: 'relative',
      width: '100%',
      src: 'https://img.youtube.com/vi/{{ youtubeId }}/hqdefault.jpg',
    },
    Circle: {
      extends: 'Flex',
      class: 'playButton',
      opacity: '0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transition: 'A defaultBezier all',
      transform: 'translate(-50%, -50%)',
      padding: 'Z',
      round: 'C1',
      background: 'black .35',
      Icon: {
        fontSize: 'C',
        name: 'play',
      },
    },
  },
  H3: null,
  Span: {
    text: '{{ text }}',
    color: 'title',
  },
  Time: {
    margin: '-Z - -',
    text: '{{ duration }}',
    fontWeight: '200',
    color: 'placeholder',
    fontSize: 'Z1',
  },
};