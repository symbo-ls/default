export const addFontFamilyModal = {
  extends: 'ModalWindow',
  onSubmit: (e, el, s) => {
    e.preventDefault()
    const {
      value,
      familyName
    } = s

    if (!familyName || !value) return

    ctx.utils.closeModal(el, s, ctx)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        FONT_FAMILY: {
          [familyName]: value
        }
      })
      clearTimeout(t)
    }, 75)
  },
  tag: 'form',
  state: {
    familyName: '',
    value: {
      type: 'serif',
      value: [
        'inherit'
      ]
    }
  },
  ModalHeader: {
    title: 'Font Family',
    p: 'Set up font-family and fonts ordering'
  },
  Flex: {
    props: {
      flexAlign: 'stretch center',
      gap: 'C',
      padding: '0 E 0 0'
    },
    Fields: {
      flexFlow: 'y',
      gap: 'B1',
      InputField: {
        Title: {
          text: 'Family name'
        },
        Input: {
          placeholder: 'Name the family',
          value: (el, s) => s.familyName,
          onKeyup: (e, el, s) => {
            s.update({
              [el.parent.key]: el.node.value
            })
          },
          onChange: (e, el, s) => {
            if (s.familyName) return
            const familyName = toCamelCase(s.familyName)
            s.update({
              familyName
            })
          }
        }
      },
      GroupField: {
        Title: {
          text: 'Family type'
        },
        DropdownField: {
          Value: {
            Text: {
              text: (el, s) => (s.value && s.value.type) || 'All Categories'
            }
          }
        }
      }
    },
    Group: {
      state: 'value',
      padding: '0 0 0 B2',
      style: {
        borderLeft: '1px solid rgba(255, 255, 255, .06)'
      },
      Title: {
        text: 'Define ordering'
      },
      Content: {
        Tools: {
          flexFlow: 'y',
          gap: 'A',
          childExtends: 'OrderingItem',
          children: (el, state) => {
            return Object.values(state.value)
          },
          childrenAs: 'state'
        },
        SquareButton: {
          theme: 'quaternary',
          icon: 'plus',
          margin: 'A 0 B1 A1',
          onClick: (ev, el, s) => {
            s.add('inherit')
          }
        },
        OrderingItem: {
          Buttons: null,
          Span: {
            text: (el, s) => `${parseInt(s.parent.value?.length + 1)}. `
          },
          Tool: {
            width: '22em',
            maxWidth: '22em',
            Value: {
              color: 'rgba(255, 255, 255, .5)',
              Text: {
                text: 'Helvetica, Arial, sans-serif, --system-default'
              }
            },
            Buttons: {
              children: [
                {
                  theme: 'transparent'
                }
              ],
              childrenAs: 'props'
            }
          }
        }
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      text: 'Okay'
    }
  }
}
