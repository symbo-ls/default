export const Terminal = {
  align: 'center space-between',
  padding: 'W X W A',
  minWidth: 'G',
  minHeight: 'B2',
  round: 'Z1',
  fontFamily: 'Code',
  gap: 'X2',
  whiteSpace: 'nowrap',
  theme: 'common-card',
  tag: 'code',
  Icon: {
    icon: 'terminal',
    '@dark': {
      color: 'gray7',
    },
    '@light': {
      color: 'gray8',
    },
  },
  Command: {
    overflow: 'hidden',
    flex: 1,
    padding: '0',
    textOverflow: 'ellipsis',
    margin: '0 auto 0 0',
  },
  Copy: {
    extends: [
      'WiderButton',
      'CopyButton',
    ],
    icon: 'copyOutline',
    background: 'transparent 0',
    theme: 'secondary-highlight',
    value: el => el.call('getCodePreviewValue', el.parent.props.value),
  },
};