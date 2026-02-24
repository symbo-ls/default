export const TutorialsInLearn = {
  extend: 'Flex',
  state: {
    limit: 5,
  },
  tag: 'form',
  props: {
    flow: 'y',
    align: 'start',
    gap: 'A',
    position: 'relative',
    onSubmit: (ev, el, s) => {
        ev.preventDefault()
        el.call('createItem', s.type, s.key)
      },
  },
  CaptionTitle: {
    Text: {
      text: 'Video Playlist',
    },
  },
  Flex: {
    flow: 'y',
    gap: 'A',
    margin: '- - - -X',
    childExtends: 'TutorialItemInLearn',
    childrenAs: 'state',
    children: (el, s) => [{
          title: 'Getting started',
          descr: 'Getting started with basic landing page',
          youtubeId: 'jYU0soXY-To',
          duration: '14:31',
        },
        {
          title: 'Symbols library',
          descr: 'Build using Symbols library',
          youtubeId: '1Vut-DOrfvg',
          duration: '1:50',
        },
        {
          title: 'What is Symbols',
          descr: 'What and how you can use Symbols',
          youtubeId: 'P_jjCTzS0-w',
          duration: '1:15',
        },
        {
          title: 'Navigation',
          descr: 'Navigating around Symbols',
          youtubeId: 'rugrjZ6WrDM',
          duration: '4:25',
        },
        {
          title: 'Calculator Tutorial',
          descr: 'Semi-advanced tutorial to show more functionalities',
          youtubeId: 'dPZCwGEysdI',
          duration: '5:23',
        },
        {
          title: 'Building components',
          descr: 'Learn how to create components and use properties',
          youtubeId: 'ScXOBnJ6ZIU',
          duration: '2:31',
        },
        {
          title: 'Building pages',
          descr: 'Learn how to create page and relevant properties',
          youtubeId: '-qWxYRR15DM',
          duration: '0:56',
        },
        {
          title: 'Code editor',
          descr: 'Changing components and seeing code editor',
          youtubeId: 'W2sEhoLA0Dc',
          duration: '0:23',
        },
        {
          title: 'Using Files',
          descr: 'How to upload and use files',
          youtubeId: 'P9D8A0258Ro',
          duration: '1:58',
        },
        {
          title: 'Using Colors',
          descr: 'How to use colors, shades and variables',
          youtubeId: 'i4JuUp39n50',
          duration: '2:02',
        },
        {
          title: 'Using Spacing',
          descr: 'How to use spacing and variables',
          youtubeId: 'xFgl6jG2yrw',
          duration: '2:35',
        },
        {
          title: 'Using Icons',
          descr: 'How to upload, insert and use icons',
          youtubeId: 'rPfSew0RGZc',
          duration: '2:19',
        },
      ].slice(0, s.limit || 30),
  },
  InsertSectionShadow: {
    left: '-C1',
    right: '-C1',
    bottom: 'C1',
  },
  Button: {
    extends: [
      'CanvasButton',
      'Button',
    ],
    zIndex: 2,
    margin: '- - - -Y2',
    icon: (el, s) => 'arrow angle ' + (s.limit === 5 ? 'down' : 'up'),
    text: (el, s) => (s.limit === 5 ? 'More' : 'Less') + ' videos',
    gap: 'Y1',
    padding: 'Y2 Z2',
    color: 'caption',
    fontSize: 'Z2',
    Icon: {
      order: 2,
    },
    onClick: (ev, el, s) => {
        s.update({
          limit: s.limit === 5 ? 30 : 5
        })
      },
  },
};