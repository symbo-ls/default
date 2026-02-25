export const FilesSidebarGrid = {
  extend: 'Grid',
  props: {
    hide: (el, s) => s.hide === true,
    fontSize: 'Z2',
    childrenAs: 'state',
    columns: 'repeat(8, 1fr)',
    margin: '- 0',
    gap: 'Z1',
    children: async (el, s) => {
      const activeFileSidebar = s.parent.activeFileSidebar
      return await el.call('listSidebar', s.type, {
        search: el.lookup('Overflow')?.state.search,
        activeFileSidebar
      })
    }
  }
}
