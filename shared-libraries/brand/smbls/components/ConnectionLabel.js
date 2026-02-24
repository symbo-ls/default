export const ConnectionLabel = {
  gap: 'Z',
  align: 'center',
  color: 'paragraph',
  isActive: true,
  '.isActive': {
    color: 'caption',
  },
  Circle: {
    round: 'A',
    boxSize: 'Z',
    isActive: el => el.parent.props.isActive,
    '.isActive': {
      background: 'green',
    },
    '!isActive': {
      background: 'shadow',
    },
  },
  Text: {
    text: el => el.parent.props.isActive ? 'Connected' : 'Not connected',
  },
  CopyButton: {
    hide: el => !el.parent.props.isActive,
    value: el => `https://${el.getAppKey()}/`,
    icon: 'copy outline',
    background: 'transparent',
  },
};