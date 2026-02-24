export const editDependencyModal = {
  extends: '/add-dependency-modal',
  onInit: (el, s) => {
    const name = s.name || s.key || el.call('getLastLocationPath').slice(1)
    const value = s.value || el.getDependencies(name)
    const pkgObj = el.getPackages(name)
    const version = value || s.version || s.value || pkgObj?.resolvedVersion

    if (!name || !value || !pkgObj) {
      return
    }
    s.quietReplace({
      ...pkgObj,
      name,
      version,
      value: version,
      schemaVersion: pkgObj?.version
    })
  },
  ModalHeader: {
    title: 'Edit {{ name }} dependency',
    p: 'Edit or update NPM package dependency and version',
  },
  Flex: {
    'InputField.name': {
      Title: {},
      Input: {
        disabled: true,
      },
      Dropdown: null,
    },
  },
  Flex_Codes: {
    if: (el, s) => el.getDependencies(s.name),
    flow: 'column',
    gap: 'B3',
    padding: 'A C3 C3',
    TerminalWithTitle: {
      maxWidth: '50%',
      Title: {
        text: 'Your dependencies file CDN URL:',
      },
      Terminal: {
        theme: 'field-static',
        icon: null,
        margin: '0 0 0 -Y',
        value: (el, s) =>
          `https://pkg.symbo.ls/${s.name}/${el.getDependencies(s.name)}.js`,
      },
    },
    CodeWithTitle: {
      P: {
        color: 'gray8',
        margin: '0',
        text: 'The CDN file for your dependencies:',
      },
      Code: {
        margin: 'Z1 0 0',
        value: (el, s) =>
          `const ${el.call('toCamelCase', s.name)} = await window.require('${
            s.name
          }')`,
        Title: null,
        CodePreview: {
          theme: 'field-static',
        },
        Buttons: {
          FrameworkSwitcher: null,
        },
      },
    },
    Status: {
      text: '{{ status }}',
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      icon: 'checkmark',
      text: 'Save',
    },
    IconButton: {
      margin: '- - - auto',
      icon: 'trash outline',
      onClick: async (ev, el, s, ctx) => {
        if (!window.confirm('Are you sure you want to remove this dependency?'))
          return
        await el.call('deleteDependency')
        await el.call('closeModal')
      },
    },
  },
};