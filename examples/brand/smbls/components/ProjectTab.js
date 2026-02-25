export const ProjectTab = {
  extends: [
    'Link'
  ],
  gap: 'Z',
  position: 'relative',
  align: 'center center',
  redirect: true,
  fallbackRoute: '/dashboard',
  Avatar: {
    extends: [
      'Avatar',
      'Clickable'
    ],
    src: (el, s) => (s.icon && s.icon?.src) || 'https://assets.symbo.ls/logo-colorful.png',
    text: '{{ title }}',
    fontSize: 'A',
    borderRadius: 'Z2',
    boxSize: 'D2'
  },
  Text: {
    fontWeight: '400',
    color: 'title',
    fontSize: 'A',
    width: '175%',
    top: '110%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate3d(-50%, 0, 1px)',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    text: '{{ title }}'
  }
}
