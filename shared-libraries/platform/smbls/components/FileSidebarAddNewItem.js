export const FileSidebarAddNewItem = {
  if: el => el.isEditMode(),
  Label: {
    extends: 'Flex',
    margin: '- X2 X2 0',
    fontSize: 'Z2',
    alignItems: 'center',
    hasItems: true,
    '.hasItems': {
      borderWidth: '0 0 1px',
      borderColor: 'line-highlight',
      borderStyle: 'solid',
      ':focus-within': {
        borderColor: 'dim',
      },
    },
    templateAreas: `"plus input icons"
        "error error error"`,
    templateColumns: '0.1fr 1fr 0.1fr',
    Icon: {
      gridArea: 'plus',
      color: 'dim',
      name: 'plus',
    },
    Input: {
      gridArea: 'input',
      padding: 'X2 -',
      width: '100%',
      round: '0',
      theme: 'transparent',
      outline: '0',
      name: 'sidebar-new-item',
      attr: {
        required: true,
        placeholder: (el, s) =>
          s.type === 'pages' ?
          '/add-new-page' : s.type === 'components' ?
          'ComponentName' : s.type === 'functions' ?
          'newFunction' : s.type === 'methods' ?
          'newMethod' : s.type === 'state' ?
          'state_collection' : s.type === 'secrets' ?
          'new_secret' : s.type === 'dependencies' ?
          '@npm/dependency' : '',
      },
      '::placeholder': {
        color: 'dim',
      },
      ':focus-visible': {
        outline: '0',
      },
      ':focus': {
        outline: '0',
        borderColor: 'caption',
      },
      onInput: (ev, el, s) => {
        // eslint-disable-next-line init-declarations
        let cleanedValue
        const {
          node
        } = el
        const {
          value
        } = node
        let start = node.selectionStart
        let end = node.selectionEnd

        const isPage = s.type === 'pages'
        const isComponent = s.type === 'components'
        const isFunction =
          s.type === 'functions' ||
          s.type === 'snippets' ||
          s.type === 'methods'
        const isState = s.type === 'state'

        if (isPage) {
          // Filter out invalid characters
          const allowedCharacters = /[^a-zA-Z0-9/-]/gu
          cleanedValue = value.replace(allowedCharacters, '').toLowerCase()
          if (!cleanedValue.startsWith('/')) {
            cleanedValue = `/${cleanedValue}`
            start++
            end++
          }
          // Prevent typing invalid characters
        } else if (isComponent) {
          // eslint-disable-next-line require-unicode-regexp
          const allowedCharacters = /[^a-zA-Z0-9_.]/g
          cleanedValue = value.replace(allowedCharacters, '')
          cleanedValue = cleanedValue
            .split(/[_.]/u)
            .filter(Boolean)
            .map(v => v.charAt(0).toUpperCase() + v.slice(1))
            .join('')
        } else if (isFunction || isState) {
          // eslint-disable-next-line require-unicode-regexp
          const allowedCharacters = /[^a-zA-Z0-9_]/g
          cleanedValue = value.replace(allowedCharacters, '')
        } else {
          cleanedValue = value
        }

        if (value !== cleanedValue) {
          el.node.value = cleanedValue
          node.setSelectionRange(start, end)
        }

        s.key = cleanedValue
      },
    },
    Flex: {
      gap: 'X2',
      gridArea: 'icons',
      class: 'icons',
      opacity: 0,
      childExtends: 'IconButton',
      childProps: {
        padding: 'Y',
        fontSize: 'Z',
        theme: 'transparent',
        ':hover': {
          theme: 'quaternary',
        },
      },
      Save: {
        type: 'submit',
        icon: 'checkmark',
      },
      Close: {
        icon: 'crossmark',
        onClick: (ev, el, s) => {
          s.update({
            key: null,
            adding: null
          })
        },
      },
    },
    Err: {
      hide: (el, s) => !s.err,
      gridArea: 'error',
      position: 'absolute',
      top: '101%',
      left: '0',
      right: '0',
      theme: 'navbar',
      text: (el, s) => s.err,
    },
    ':hover .icons, :focus-within .icons': {
      opacity: 1,
    },
  },
  extend: [
    'Form',
    'Grid',
  ],
  props: {
    onSubmit: async (ev, el, s) => {
    ev.preventDefault()

    const {
      key
    } = s

    const type = el.getSingular(s.type) || s.parent.type

    if (el.getSchemaItem(key, type)) {
      el.call('openNotification', {
        title: `${type} already exists`,
        message: `"${key}" ${type} already exists`,
        type: 'error'
      })
      return
    }

    try {
      await el.call('createItem', type, key)
      el.Label.Input.node.value = ''
    } catch (err) {
      if (!err) {
        el.node.reset()
        return s.update({
          key: null,
          err: null,
          adding: false
        })
      }

      s.update({
        err
      })
    }

    s.update({
      key: null,
      adding: null
    })
  },
  },
};