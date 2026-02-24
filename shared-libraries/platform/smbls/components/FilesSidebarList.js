export const FilesSidebarList = {
  extend: 'FilesSectionList',
  childExtend: 'FilesSidebarListItem',
  props: {
    children: async (el, s) => {
    const FilesSidebar = el.getFilesSidebar()
    const sorted = el.call('getCookie', `sidebar_${s.type}_sort`) === 'true'
    const list = await el.call('listSidebar', s.type, {
      search: FilesSidebar?.state?.search,
      activeFileSidebar: FilesSidebar?.state?.activeFileSidebar,
      sortIf: sorted && [
        'components',
        'pages',
        'files',
        'state',
        'functions',
        'methods',
      ].includes(s.type),
      sort: (a, b) => {
        return a.key?.toLowerCase() < b.key?.toLowerCase() ? -1 : 1
      },
    })

    const showLayersSchema = el.getCanvasScope().showLayersSchema
    if (list.length > 0 &&
      showLayersSchema !== undefined && el.call('hasArtbpard', s.type)
    ) {
      Object.keys(showLayersSchema).forEach(key => {
        if (!list.find(item => item.key === key)) {
          delete showLayersSchema[key]
        }
      })

      el.syncCanvas({
        showLayersSchema
      })
    }

    return list
  },
    onMouseleave: (ev, el) => {
    if (!el.getUserSettings('allowFilesidebarPreview')) {
      return
    }
    el.call('setScenePosition', null, {
      visible: false,
    })
  },
    align: 'stretch',
    flow: 'column',
    fontSize: 'Z2',
    gap: 'X1',
  },
};