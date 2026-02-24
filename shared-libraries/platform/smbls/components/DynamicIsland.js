export const DynamicIsland = {
  state: {
    recents: [
    ],
    recentsIndex: 0,
    default: 'explorer',
    panelMap: {
      onboarding: 'IntroPanel',
      chat: 'AISidebarPanel',
      explorer: 'FilesSidebar',
      'insert:icons': 'InsertPanelIcons',
      'insert:integrations': 'IntegrationsPanel',
      'insert:library': 'InsertPanelLibrary',
      insert: 'InsertPanel',
      learn: 'LearnPanel',
    },
  },
  DynamicNavbar: {},
  content: (el, s) => {
    const activeWindow = el.getWindow('explorer')

    if (!el.call('isString', activeWindow)) {
      return Boolean(activeWindow) ? {
        extend: s.panelMap[s.default]
      } : {}
    }

    // First try exact match
    if (s.panelMap[activeWindow]) {
      return {
        extend: s.panelMap[activeWindow]
      }
    }

    // Then try prefix match
    for (const key in s.panelMap) {
      if (activeWindow.startsWith(key)) {
        return {
          extend: s.panelMap[key]
        }
      }
    }

    return {}
  },
  PromptAI: {
    margin: 'auto - -',
    order: 2,
    hide: true,
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: '0',
    width: 'G1+B1',
    position: 'absolute',
    overflow: 'hidden',
    top: 'B2+X',
    padding: '0 --canvas-double-gutter',
    left: '--canvas-gutter',
    bottom: '--canvas-gutter',
    round: '--canvas-round',
    fontSize: 'Z2',
    minWidth: 'G2',
    maxWidth: '50vw',
    minHeight: 'I',
    resize: 'auto',
    borderColor: 'line',
    borderWidth: '1px',
    borderStyle: 'solid',
    theme: 'common-box',
    useAnimations: true,
    '.useAnimations': {
      transition: 'A1 defaultBezier',
      transitionProperty: 'transform, visibility, opacity, width',
    },
    isActive: (el) => Boolean(el.getWindow('explorer')),
    '.isActive': {
      transform: 'none',
      opacity: 1,
      visibility: 'visible',
    },
    '!isActive': {
      transform: 'translate3d(0, 1.2em, 1px)',
      opacity: 0,
      visibility: 'hidden',
    },
    ':hover .close': {
      opacity: 1,
    },
    isInsertActive: (el) => el.getWindow('explorer') === 'insert',
    '.isInsertActive': {
      width: 'H',
    },
    isIconsActive: (el) => el.getWindow('explorer') === 'insert:icons',
    '.isIconsActive': {
      width: 'H',
    },
    isLibraryActive: (el) => el.getWindow('explorer') === 'insert:library',
    '.isLibraryActive': {
      width: 'I',
    },
    onBeforeUpdate: (_, el, s, ctx, opts) => {
      if (opts.skipRecentsIndexing) return
      const recents = s.recents || []
      const recent = recents[0]
      const activeWindow = el.getWindow('explorer')
      if (activeWindow && activeWindow !== recent)
        recents.unshift(activeWindow)
      s.recents = recents
      s.recentsIndex = 0
      // else s.recents = recents
    },
    onRender: (el) => Boolean(el.getWindow('explorer')) && el.update(),
  },
};