export const addColorModal = {
  extends: 'ModalWindow',
  onInit: (el, s, ctx) => {
    if (!el.getDesignSystem()) return
    const lastPath = el.call('getLastLocationPath')
    const value = window.location.hash
    const key = value ?
      el.call('toCamelCase', el.call('nameTheColor').name(value)[1]) :
      lastPath !== '/add-color' && lastPath.slice(1)
    s.quietUpdate({
      key,
      value
    })
  },
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
    const {
      key,
      value
    } = s
    if (!key || !value) return
    ctx.utils.closeModal(el, s, ctx)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        COLOR: {
          [key]: value
        }
      })
      clearTimeout(t)
    }, 75)
  },
  tag: 'form',
  ModalHeader: {
    title: 'Add color',
    p: 'Select the color of your theme, give a name and type the specific code.',
  },
  Flex: {
    gap: 'C1',
    padding: 'Z2 -',
    ColorPreview: {
      minWidth: 'auto',
      minHeight: 'auto',
      aspectRatio: '1 / 1',
      margin: '-W',
      flex: 3.5,
    },
    Fields: {
      flex: 5,
      flexFlow: 'y',
      gap: 'B1',
      ColorPickerWithTitle: {
        Title: {
          text: 'Type the HEX or RGBA',
        },
        ColorPicker: {
          Input: {
            placeholder: '#123',
            onInput: (ev, el, s, ctx) => {
              const isEditing = window.location.pathname.includes('edit-color')
              if ((s.changedByInput && s.key) || isEditing) return
              const value = ev.target.value
              const key = ctx.utils.toCamelCase(ctx.utils.nameTheColor.name(value)[1])
              s.update({
                value,
                key
              })
            },
          },
          Value: {
            ColorTemplate: {},
            Text: {
              text: '{{ value }}',
            },
          },
        },
      },
      InputField: {
        Title: {
          text: 'Name the color',
        },
        Input: {
          placeholder: 'PinkPanther',
          value: '{{ key }}',
          onInput: (e, el, s) => {
            s.update({
              changedByInput: true,
              key: el.node.value
            })
          },
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      icon: 'plus',
      text: 'Add',
    },
  },
};