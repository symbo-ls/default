export const UserMenu = {
  Avatar: {
    fontSize: 'X',
    onClick: async (ev, el) => {
      await el.call('openModal', '/settings', {
        key: '/personal-account'
      })
    }
  }
}
