export const EnvItem = {
  Circle: {
    margin: 'X - -',
    round: 'A',
    boxSize: 'Z',
    isActive: el => el.props.isActive || el.parent.props.isActive,
    '.isActive': {
      background: 'green',
      ':hover': null,
    },
    '!isActive': {
      background: 'shadow',
    },
  },
  Hgroup: {
    flexFlow: 'y',
    margin: '- B - -',
    gap: 'X',
    H: {
      color: 'title',
      tag: 'span',
      overflow: 'hidden',
      whiteSpace: 'wrap',
      textOverflow: 'anywhere',
      text: 'Production',
    },
    P: {
      margin: '0',
      fontSize: 'Y2',
      fontWeight: '400',
      color: 'paragraph',
      overflow: 'hidden',
      overflowWrap: 'anywhere',
      whiteSpace: 'wrap',
      textOverflow: 'anywhere',
      lineBreak: 'anywhere',
      text: el => `${el.call('getAppKey')}`,
    },
  },
  Buttons: {
    hide: (el) => el.getRootState('tier') === 'starter',
    margin: '-X -X - auto',
    EnvActive: {
      icon: 'checkmark',
      color: 'green',
    },
    childExtends: 'IconButton',
    childProps: {
      theme: 'transparent',
      padding: 'Y',
    },
  },
  Upgrade: {
    extends: 'Link',
    hide: (el) => el.getRootState('tier') !== 'starter',
    color: 'blue',
    text: 'Upgrade',
    margin: '- - - auto',
    alignSelf: 'start',
    whiteSpace: 'nowrap',
    fontSize: 'Z2',
    lineHeight: 1,
    ':hover': {
      textDecoration: 'underline',
    },
    onClick: (f, el, st) => {
        el.call('openModal', '/settings', {
          key: '/pricing'
        })
      },
  },
  extend: 'Flex',
  props: {
    gap: 'Z',
    round: 'Z2',
    padding: 'Z Z2 Y',
  },
};