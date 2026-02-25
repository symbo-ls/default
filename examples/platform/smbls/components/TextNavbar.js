export const TextNavbar = {
  Insert: {
    extends: 'TextNavbarButtonDropdown',
    key: 'insert:library',
    Button: {
      icon: 'sf plus',
      text: null
    },
    IconButton: {
      DropdownParentFocus: {
        Dropdown: {
          'Dropdown.QuickAdd': {}
        }
      }
    }
  },
  Assistant: {
    if: () => false,
    extends: 'TextNavbarButtonDropdown',
    key: 'chat',
    Button: {
      text: 'Assistant'
    },
    IconButton: {
      DropdownParentFocus: {
        Dropdown: {
          'Dropdown.AssistantMenu': {}
        }
      }
    }
  },
  Files: {
    extends: 'TextNavbarButtonDropdown',
    key: 'explorer',
    Button: {
      text: 'Files'
    },
    IconButton: {
      DropdownParentFocus: {
        Dropdown: {
          'Dropdown.MoreFilesMenu': {}
        }
      }
    }
  },
  Learn: {
    if: () => false,
    extends: 'TextNavbarButtonDropdown',
    key: 'learn',
    Button: {
      text: 'Learn'
    },
    IconButton: {
      DropdownParentFocus: {
        Dropdown: {
          'Dropdown.MoreLearnMenu': {}
        }
      }
    }
  },
  extend: 'Flex',
  props: {
    onFrame: (el, s) => {
      const explorer = el.getWindow('explorer')
      el.variables({
        explorer
      }).changed((changes, prev) => {
        el.update()
      })
    }
  }
}
