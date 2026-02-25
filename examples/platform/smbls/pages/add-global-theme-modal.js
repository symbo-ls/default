export const addGlobalThemeModal = {
  extends: 'ModalWindow',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    const {
      value,
      themeModifier
    } = s
    if (!themeModifier || !value) {
      return
    }
    const modifierName =
      themeModifier.slice(0, 1) === '@' ? themeModifier : `@${themeModifier}`

    await el.call('closeModal')
    const t = setTimeout(async () => {
      await el.updateDesignSystem({
        THEME: {
          document: {
            [modifierName]: value
          }
        }
      })
      clearTimeout(t)
    }, 75)
  },
  tag: 'form',
  state: {
    value: {}
  },
  ModalHeader: {
    title: 'Add global theme',
    p: 'Adding new <body> styling theme'
  },
  Preview: {
    props: (el, s) => {
      const {
        color,
        background
      } = s.value
      return {
        color: el.call('getColorValue', color),
        background: el.call('getColorValue', background),
        margin: '0 -A2',
        minHeight: 'B2',
        textAlign: 'center',
        round: 'V',
        padding: 'B C'
      }
    },
    H5: el => el.getRootState().sampleText
  },
  Flex_fields: {
    padding: 'A C3 0',
    if: (el, s) => s.themeModifier !== '@light' && s.themeModifier !== '@dark',
    InputField: {
      Title: {
        text: 'Name the theme'
      },
      Input: {
        placeholder: 'Name the theme',
        value: '{{ themeModifier }}',
        onKeyup: (e, el, s) => {
          s.update({
            themeModifier: el.node.value
          })
        }
      }
    }
  },
  Flex: {
    gap: 'A',
    padding: '0 C3 C1',
    align: 'center flex-start',
    childExtends: 'ColorSelectWithTitle',
    childProps: {
      width: '100%',
      ColorSelect: {
        props: (el, s) => {
          const {
            COLOR
          } = el.getDesignSystem()
          if (!COLOR || !s.value) {
            return null
          }

          const key = s.value[el.parent.key]

          const obj = {
            property: el.parent.key,
            Value: {
              Box: {
                background: key || 'transparentBg',
                backgroundSize: '6px 6px'
              },
              Text: {
                text: key || 'inherit'
              }
            },
            Dropdown: {
              maxHeight: 'G'
            }
          }

          if (!key) {
            return obj
          }

          const value = el.call('getColorValue', key)
          obj.title.box.background = value || key || 'transparentBg'

          return obj
        },
        Dropdown: {
          onChoose: (ev, el, s, ctx, calleeElement) => {
            const {
              key
            } = el.parent.parent
            const value = {
              [key]: calleeElement.state.key
            }
            s.update({
              value
            })
          }
        }
      }
    },
    Background: {
      Title: {
        text: 'Background color'
      },
      ColorSelect: {}
    },
    Color: {
      Title: {
        text: 'Text color'
      },
      ColorSelect: {}
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      text: 'Save'
    }
  }
}
