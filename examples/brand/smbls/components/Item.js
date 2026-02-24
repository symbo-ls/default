export const Item = {
  extends: [
    'Link',
  ],
  width: '100%',
  padding: 'B B1 A2 B1',
  gap: 'D',
  round: 'Z2',
  flow: 'y',
  align: 'flex-start space-between',
  fontWeight: '400',
  href: '{{ href }}',
  '@tabletL': {
    padding: 'B',
    width: '100%',
    maxWidth: 'none',
  },
  state: {
    icon: 'tree outline',
    title: 'Design System',
    p: 'Organized brand tokens into design and code',
  },
  Icon: {
    fontSize: 'B2',
    icon: '{{ icon }}',
  },
  Hgroup: {
    H: {
      tag: 'h6',
      fontSize: 'A1',
      text: '{{ title }}',
    },
    P: {
      height: 'C1',
      text: '{{ p }}',
    },
    '@screenL': {
      maxWidth: 'F1',
    },
  },
};