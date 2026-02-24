const Dropdownassistantmenu = {
  CaptionTitle: {
    Text: {
      text: 'AI Tools:',
    },
  },
  ListInDropdown: {
    margin: '- -Z2',
    gap: '0',
    childProps: {
      padding: 'Z Z2',
      fontSize: 'A',
      round: 'Z',
      fontWeight: '400',
      color: 'title',
      Text: null,
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100',
      },
      ':hover': {
        style: {
          svg: {
            opacity: 1,
          },
        },
      },
    },
    childrenAs: 'props',
    children: el => [{
      text: 'AI Playground',
      Icon: {
        name: 'wave'
      },
      onClick: (ev, el) => {
        el.call('openModal', '/ai-playground')
      }
    }],
  },
  extend: 'Flex',
  props: {
    padding: 'Z1 A',
    gap: 'A',
    flexFlow: 'y',
  },
};

export { Dropdownassistantmenu as 'Dropdown.AssistantMenu' }