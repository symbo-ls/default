export const CodeWithTitleAndButtons = {
  extends: 'CodePreviewWithTitle',
  margin: '0',
  minWidth: 'F3',
  maxWidth: '50%',
  align: 'stretch',
  '@tabletS': {
    maxWidth: 'none',
  },
  Title: {},
  CodePreview: {
    round: 'A+X',
    padding: 'A A1 D1',
    '&': {
      minWidth: '100%',
      width: 'auto',
    },
  },
  Buttons: {
    flexAlign: 'center space-between',
    margin: '-C+X1 -W 0',
    gap: 'X2',
    transition: 'B opacity',
    '&': {
      minWidth: '100%',
      width: 'auto',
    },
    childExtends: [
      'WiderButton',
    ],
    childProps: {
      round: 'Z1',
      fontSize: 'A',
      transition: 'A',
      transitionProperty: 'background, color, border',
      theme: 'secondary-highlight',
      backdropFilter: 'blur(3px)',
      zIndex: 10,
    },
    CopyButton: {
      extends: [
        'WiderButton',
        'CopyButton',
      ],
      margin: '0 auto 0 0',
      icon: 'copy outline',
      value: el => {
        const val = el.call('getCodePreviewValue', el.parent.props.value || '//')
        return val
      },
    },
    Link: {
      href: '/dashboard#{{ title }}',
      Icon: {
        name: 'url',
      },
    },
    FrameworkSwitcher: {
      padding: 'Z B Z Z2',
      fontSize: 'A',
      fontFamily: 'smbls',
      Icon: {
        name: el => el.getRootState().framework,
      },
      Icon_arrow: {
        position: 'absolute',
        opacity: 0.5,
        fontSize: 'Z',
        right: 'Z1',
        icon: 'arrowAngleMirroringVertical',
      },
    },
  },
};