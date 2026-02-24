export const InstallExt = {
  extend: 'ModalWindow',
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'shadow',
  },
  ModalHeader: null,
  IconButton: null,
  Flex: {
    align: 'start',
    gap: 'Z2',
    whiteSpace: 'nowrap',
    Img: {
      src: 'chrome-ext-icon.png',
      width: 'C',
      margin: '-W - - -',
    },
    Hgroup: {
      H: {
        tag: 'strong',
        text: 'Install Chrome extension to allow inspecting',
      },
      P: {
        text: 'Extension is required to gain access to website content',
      },
      gap: 'X',
    },
  },
  Flex_Buttons: {
    align: 'start',
    gap: 'Z',
    childExtends: 'Button',
    margin: '- - - -X',
    fontSize: 'Z2',
    Install: {
      extends: [
        'Link',
        'Button',
      ],
      href: '/docs/chrome-extension',
      target: '_blank',
      text: 'Install',
      theme: 'primary',
      icon: 'arrow up right',
      gap: 'X2',
      Icon: {
        order: 2,
      },
      onClick: () => {},
    },
    Cancel: {
      text: 'Cancel',
      theme: 'tertiary',
      gap: 'X2',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'line',
      onClick: (ev, el) => el.closeModal(),
    },
  },
};