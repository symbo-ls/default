export const CanvasSearchItem = {
  Icon: {
    color: 'currentColor',
    margin: '- Y1 - -',
    fontWeight: '100',
    name: (el, s) => ({
      components: 'sfComponents',
      pages: 'sfPage',
      functions: 'fnOutline',
      state: 'sfDocument',
      files: 'sfAssets',
    })[s.type],
    opacity: '1',
    fontSize: 'A1',
  },
  Text: {
    text: '{{ key }}',
    margin: '- C - -',
    fontSize: 'A1',
  },
  Flex_Buttons: {
    gap: 'Y1',
    margin: '- - - auto',
    childExtends: [
      'CanvasButton',
      'IconButton',
    ],
    childProps: {
      padding: 'Y',
    },
    Target: {
      if: (el, s) => el.call('hasType', 'ARTBOARD_TYPES', s.type),
      icon: 'target',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        el.call('openArtboardItem', s.type, s.key)
      },
    },
    Open: {
      if: (el, s) => el.call('hasType', 'ARTBOARD_TYPES', s.type),
      icon: 'arrow up right',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        el.call('activateChosen', s.key, s.type)
      },
    },
    OpenCode: {
      if: (el, s) => el.call('hasType', 'FUNCTION_TYPES', s.type) || el.call('hasType', 'STATE_TYPES', s.type),
      icon: 'code',
      onClick: (ev, el, s) => {
        ev.stopPropagation()
        el.call('activateFunction', s.key)
      },
    },
    TargetFile: {
      if: (el, s) => el.call('hasType', 'ASSETS_TYPES', s.type),
      icon: 'target',
      onClick: async (ev, el, s) => {
        ev.stopPropagation()
        await el.call('setSidebarContent', 'files')
      },
    },
  },
  extend: [
    'KeyValueColumnFields',
  ],
  props: {
    round: 'C1',
    align: 'center',
    padding: 'X Z X A',
    onClick: (ev, el, s) => {
    el.call('openItem', s.type, s.key)
    const projectKey = el.getAppKey()
    const recentsKey = projectKey + '_recentSearches'
    const recents = s.parent.recents.filter(r => r.key !== s.key)
    recents.unshift(s.parse())
    s.parent.recents = recents
    const recentsValue = JSON.stringify(s.parent.recents)
    window.localStorage.setItem(recentsKey, recentsValue)
  },
    ':hover': {
      style: {
        svg: {
          opacity: 1,
        },
      },
    },
  },
};