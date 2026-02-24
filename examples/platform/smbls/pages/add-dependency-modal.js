export const addDependencyModal = {
  extends: 'ModalWindow',
  width: '100%',
  minHeight: 'G3',
  maxWidth: 'I',
  maxHeight: '90dvh',
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    if (s.disabled) {
      return
    }

    s.update({
      error: '',
      loading: true,
      disabled: true
    })

    const {
      name,
      version
    } = s

    await window
      .fetch(`https://pkg.symbo.ls/${name}@${version}`)
      .then(async res => {
        if (!res.ok) {
          s.update({
            error: await res.text(),
            disabled: false
          })
          return
        }

        const [resolvedVersion] = res.url
          .substring(`https://pkg.symbo.ls/${name}@`.length)
          .split('/')

        const value = s.version
        const obj = {
          key: name,
          value,
          resolvedVersion,
          type: s.type,
          version: s.schemaVersion
        }

        const exists = el.getDependencies(name)
        const action = exists ? 'updateItem' : 'addItem'

        try {
          await el.sdk[action]('dependencies', obj, {
            message: exists ? 'Updated dependency' : 'Added dependency'
          })

          await el.call('rerenderFileSidebarByType', 'dependencies')
          await el.call('closeModal')
        } catch (err) {
          console.error(err)
          el.call('openNotification', {
            type: 'error',
            message: err.message
          })
        } finally {
          s.update({
            loading: false,
            disabled: false
          })
        }
      })
  },
  tag: 'form',
  state: {
    name: '',
    version: '',
    schemaVersion: 'latest',
    type: 'dependencies',
    packages: [
    ],
    isLoadingPackages: false,
    error: '',
    disabled: false,
  },
  ModalHeader: {
    title: 'Add dependency',
    p: 'Symbols will make cloud build for your NPM dependency',
  },
  LoadingGifSection: {
    fullscreen: true,
    position: 'absolute',
    inset: '0',
    hide: (el, s) => !s.loading,
  },
  Flex: {
    padding: 'A C3 0',
    flow: 'column',
    gap: 'B3',
    width: '70%',
    'InputField.name': {
      ':focus-within': {
        zIndex: 1000,
        '& [dropdown]': {
          transform: 'translate3d(0,0,0)',
          opacity: 1,
          visibility: 'visible',
        },
      },
      extends: [
        'GroupField',
        'DropdownParent',
      ],
      Title: {
        text: 'Package',
      },
      Input: {
        width: '100%',
        required: true,
        value: '{{ name }}',
        placeholder: 'Field in my content',
        onInput: (ev, el, s) => {
          const name = el.node.value
          s.update({
            name
          })
          if (name) {
            s.update({
              isLoadingPackages: true
            })

            if (name.length < 2) {
              return
            }

            const t = setTimeout(async () => {
              await el.call('searchNpmPackages', name)
              clearTimeout(t)
            }, 1000)
          } else {
            s.replace({
              packages: []
            })
          }
        },
      },
      Dropdown: {
        style: {
          left: 0,
        },
        options: (el, s) => s.packages,
        onChoose: (ev, el, s, _ctx, calleeElement) => {
          const {
            name: pkgName,
            version: pkgVersion
          } = calleeElement.state
          s.update({
            name: pkgName,
            version: pkgVersion,
            schemaVersion: 'latest'
          })
          el.parent.Input.node.value = pkgName
          el.lookup('InputField.schemaVersion').Input.node.value = pkgVersion ?
            `^${pkgVersion}` :
            s.schemaVersion || 'latest'
        },
        DropdownHeader: {
          if: ({
              state
            }) =>
            state.packages.length === 0 && state.name.length > 2,
          text: 'No packages with that name found',
        },
        ListInDropdown: {
          childProps: {
            isActive: (el, s) => s.parent.name === s.name,
            text: '{{ name }}',
            fontWeight: '400',
            Span: {
              opacity: '0.5',
              text: ' @{{ version }}',
            },
          },
        },
      },
    },
    'InputField.schemaVersion': {
      Title: {
        text: 'Version',
      },
      Input: {
        required: true,
        placeholder: 'Field in my content',
        value: '{{ schemaVersion }}',
        onInput: (e, el, s) => {
          const schemaVersion = el.node.value
          s.update({
            schemaVersion
          })

          if (!s.name || s.name.length < 2) {
            return
          }

          const t = setTimeout(async () => {
            await el.call('fetchNpmPackage', s.name, schemaVersion)
            clearTimeout(t)
          }, 1000)
        },
      },
      ResolvedVersion: {
        text: '{{ version }}',
      },
    },
    Error: {
      text: (el, s) => s.error,
      color: 'red',
    },
  },
  ModalFooter: {
    margin: 'auto - -',
    CheckButton: {
      type: 'submit',
      reverse: true,
      icon: 'checkmark',
      text: 'Save',
    },
  },
};