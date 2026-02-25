export const CanvasSearch = {
  extend: [
    'DropdownParentFocus'
  ],
  tag: 'search',
  state: {
    recents: [
    ]
  },
  Form: {
    extends: 'Flex',
    align: 'center',
    gap: 'X',
    onSubmit: (ev) => ev.preventDefault(),
    Icon: {
      fontSize: 'Z1',
      margin: '- -B2 - A',
      name: 'search'
    },
    Input: {
      autofocus: 'autofocus',
      round: '0',
      placeholder: 'Search on Canvas',
      padding: 'Y1 B2 Y1 B2',
      theme: 'transparent',
      outline: 'none',
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
      },
      flex: 1
    }
  },
  CanvasSearchDropdown: {
    width: '100%',
    left: '0',
    extends: [
      'CanvasSearchDropdown',
      'Dropdown'
    ]
  },
  props: {
    onInit: (el, s) => {
      const projectKey = el.getAppKey()
      const recentKey = projectKey + '_recentSearches'
      const recentsValue = window.localStorage.getItem(recentKey)
      let recents = JSON.parse(recentsValue || '[]')

      if (!recents.length) {
        recents = Object.values(el.getSchema('components')).map(v => ({
          key: v.key,
          type: v.type,
          title: v.title
        }))
      }

      s.recents = recents.slice(0, 15)
    },
    position: 'relative',
    theme: 'quinary',
    round: 'C',
    minWidth: 'D3',
    margin: '-V - - -'
  }
}
