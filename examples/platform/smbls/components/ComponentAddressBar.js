export const ComponentAddressBar = {
  extend: [
    'DropdownParentFocus'
  ],
  tag: 'search',
  props: {
    position: 'relative',
    theme: 'quinary',
    round: 'C',
    minWidth: 'D3',
    margin: '-V - - -'
  },
  Form: {
    extends: 'Flex',
    align: 'center',
    gap: 'X',
    margin: '0',
    attr: {
      novalidate: true
    },
    onSubmit: (ev, el, s) => {
      ev.preventDefault()
    },
    Icon: {
      fontSize: 'Z1',
      margin: '- -B2 - A',
      name: 'search'
    },
    Input: {
      autofocus: 'autofocus',
      flex: 1,
      round: '0',
      placeholder: 'Search pages and components',
      padding: 'Y1 B2 Y1 B2',
      theme: 'transparent',
      value: '{{ selected }}',
      outline: 'none',
      name: 'url',
      required: true,
      type: 'text',
      style: {
        appearance: 'none'
      },
      ':focus-visible': {
        outline: 'none'
      },
      '::-webkit-search-cancel-button': {
        display: 'none'
      },
      '::placeholder': {
        color: 'placeholder'
      },
      onInput: (ev, el, s) => {
        s.update({
          searchTerm: el.node.value
        })
      }
    }
  },
  CanvasSearchDropdown: {
    ListInDropdown: {
      childProps: {
        Flex_Buttons: null,
        onClick: (ev, el, s) => {
          const key = s.key
          const type = s.type
          s.parent.update({
            type,
            key
          })
        }
      }
    },
    extends: [
      'CanvasSearchDropdown',
      'Dropdown'
    ],
    width: '100%',
    left: '0',
    typesToIndex: [
      'components',
      'pages'
    ]
  }
}
