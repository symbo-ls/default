export const uploadFontModal = {
  extends: 'ModalWindow',
  padding: 'A B',
  onInit: (el, s) => {
    const path = window.location.pathname
    const pathArray = path.split('edit-font/')
    const {
      FONT
    } = el.getDesignSystem()
    const key = pathArray[1]
    if (key && FONT[key]) {
      const value = el.call('deepClone', FONT[key])
      return s.update({
        key,
        value
      }, {
        preventUpdate: true
      })
    }
    s.update({
      value: []
    }, {
      preventUpdate: true
    })
  },
  onSubmit: (e, el, s, ctx) => {
    e.preventDefault()
    const {
      key,
      value
    } = s

    if (!key || !value) return
    const t = setTimeout(() => {
      el.updateDesignSystem({
        FONT: {
          [key]: value
        }
      })
      clearTimeout(t)
    }, 75)

    el.call('closeModal', el, s, ctx)
  },
  tag: 'form',
  state: {
    isVariable: false,
    sampleText: 'Today is a big day for our tribe. The year ends.',
    value: {},
  },
  ModalHeader: {
    title: 'Upload font',
  },
  Flex: {
    align: 'stretch center',
    gap: 'C',
    minHeight: 'G',
    maxHeight: 'H2',
    padding: '0 B A 0',
    Flex: {
      flow: 'column',
      gap: 'B1',
      minWidth: 'F1',
      padding: '0 B2 0 0',
      position: 'sticky',
      top: '0',
      style: {
        borderRight: '1px solid rgba(255, 255, 255, .06)',
      },
      InputField: {
        Title: {
          text: 'Font name',
        },
        Input: {
          placeholder: 'Name the font',
          value: '{{ key }}',
          onKeyup: (e, el, s) => {
            s.update({
              key: el.node.value
            })
          },
          onChange: (e, el, s) => {
            s.update({
              key: el.node.value
            })
          },
        },
      },
      CheckboxField: (el, s) => ({
        Input: {
          checked: s.isVariable
        },
        onChange: (ev, el, s) => {
          ev.preventDefault()
          const isVar = !s.isVariable
          const val = s.value
          if (isVar) {
            if (el.call('isArray', val)) {
              s.value = val[0]
              s.value.isVariable = true
            }
          } else {
            if (!el.call('isArray', val)) {
              if (val.isVariable) delete val.isVariable
              s.value = [val]
            }
          }
          s.toggle('isVariable')
        }
      }),
    },
    Group: {
      tag: 'section',
      Title: {
        text: 'Weights',
      },
      Flex: {
        flow: 'column',
        gap: 'A',
        childExtends: 'FontWeightObject',
        childProps: {
          position: 'relative',
          LoadingGifSection: {
            show: (el, s) => s.loading,
            zIndex: 1001,
            position: 'absolute',
            inset: '0',
            theme: 'quaternary',
          },
        },
        children: (el, s) => {
          if (s.isVariable) return [s.value]
          return s.value
        },
        childrenAs: 'state',
      },
      UploadIcon: {
        width: '100%',
        hide: (el, s) => s.isVariable && s.url,
        Input: {
          opacity: '0',
          position: 'absolute',
          boxSize: '0',
          type: 'file',
          onChange: async (ev, el, s, ctx) => {
            try {
              const name = el.node.value
              if (!name) return

              if (!s.value) s.value = []
              const value = s.value

              if (el.call('isArray', s.value)) {
                s.applyFunction(s => value.push({
                  name,
                  loading: true
                }))
              } else {
                s.update({
                  loading: true
                })
              }

              const {
                src
              } = await ctx.utils.client.stream('db:file-upload', {
                contents: ev.target.files[0]
              })

              const currentValue = value[value.length - 1]
              delete currentValue.loading
              delete currentValue.name
              delete currentValue.error

              const url = src.replace(
                'files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev',
                'files.symbo.ls'
              )
              if (el.call('isArray', s.value)) {
                s.applyFunction(s => value[value.length - 1] = {
                  url,
                  loading: false,
                })
              } else {
                s.update({
                  url,
                  loading: false,
                })
              }

              if (!s.key) s.key = 'myfont'
              ctx.utils.init({
                FONT: {
                  [s.key]: value
                }
              })
            } catch (e) {
              if (el.call('isArray', s.value)) {
                s.applyFunction(s => s.value[s.value.length - 1] = {
                  loading: false,
                  error: e
                })
              } else {
                s.update({
                  loading: false,
                  error: e
                })
              }
              el.error(e)
            }
          },
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      text: 'Save',
    },
  },
};