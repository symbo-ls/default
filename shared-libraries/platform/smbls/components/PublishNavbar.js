export const PublishNavbar = {
  if: el => el.sdk.hasPermission('editMode'),
  state: {
    modes: {
      publish: {
        icon: 'sf upload',
        text: 'Publish',
        callback: async el => {
          await el.call('openModal', '/publish')
        },
      },
      sync: {
        icon: 'syncOvalFill',
        text: 'Sync',
        callback: async el => {
          await el.call('openModal', '/publish')
        },
      },
      export: {
        icon: 'sf download',
        text: 'Export',
        callback: async el => {
          await el.call('openModal', '/publish')
        },
      },
    },
    activeOutput: 'publish',
  },
  Button: {
    icon: (el, s) => s.modes[s.activeOutput].icon,
    text: null,
    title: 'Publish',
    aspectRatio: 'none',
    onClick: async (ev, el, s) => {
      await s.modes[s.activeOutput].callback(el)
    },
  },
  IconButton: {
    DropdownParentFocus: {
      position: 'absolute',
      Dropdown: {
        left: '-F',
        onClick: () => {},
        'Dropdown.Publish': {},
      },
      inset: '0',
    },
  },
  extend: 'DropdownButton',
};