export const FilesSidebarSection = {
  FilesSectionTitle: null,
  FilesSidebarTitle: {},
  FileSidebarAddNewItem: {
    Label: {
      hasItems: (el, s) => el.call('hasItems', s.type),
    },
    show: (el, s) => {
      const isVisible = el.call('getCookie', `sidebar_${s.type}`) !== 'false'
      if (!isVisible) {
        return false
      }
      if (s.adding) {
        return true
      }

      const hasSchema = el.getSchema(s.type)
      const fileSidebarContent =
        el.lookup('Overflow')?.state?.fileSidebarContent
      const isLocalLib = !fileSidebarContent || fileSidebarContent === 'Local'

      return Boolean(
        isLocalLib &&
        hasSchema &&
        Object.keys(hasSchema).length === 0 &&
        el.isEditMode()
      )
    },
    ignoreChildExtend: true,
  },
  FilesSectionList: null,
  FilesSidebarList: {
    hide: (el, s) => {
      const isVisible = el.call('getCookie', `sidebar_${s.type}`) !== 'false'
      return !isVisible
    },
  },
  extend: 'FilesSection',
  props: {
    hide: (el, s) => s.noResults === true,
    onDblclick: (ev, el, s) => {
    el.call('setCookie', `sidebar_${s.type}`, !s.isHidden)
    s.update()
  },
  },
};