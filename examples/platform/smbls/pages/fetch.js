export const fetch = {
  flow: 'y',
  gap: 'C1',
  padding: 'D1',
  align: 'start',
  onStateUpdate: (_, el, s) => {},
  state: {
    method: 'GET',
    type: 'state',
    headers: {},
    headersArr: [
    ],
    params: {},
    paramsArr: [
    ],
    auth: {},
    authArr: [
    ],
    body: {},
    runtime: false,
    title: '',
    key: ''
  },
  GroupField: {
    width: '100%',
    Title: {
      text: 'Endpoint URL:'
    },
    Flex: {
      flow: 'x',
      align: 'stretch start',
      childProps: {
        borderRadius: 'Y',
        ':first-child': {
          borderRadius: 'Y 0 0 Y'
        },
        ':last-child': {
          borderRadius: '0 Y Y 0'
        }
      },
      SelectField: {
        Select: {
          theme: null,
          borderRadius: 'X2',
          Get: {
            text: 'Get',
            value: 'GET'
          },
          Post: {
            text: 'Post',
            value: 'POST'
          },
          Patch: {
            text: 'Patch',
            value: 'PATCH'
          },
          Update: {
            text: 'Update',
            value: 'UPDATE'
          },
          Delete: {
            text: 'Delete',
            value: 'DELETE'
          },
          onChange: (event, element, state) => {
            state.update({
              method: element.node.value
            })
            console.log(element.node.value)
          }
        }
      },
      VerticalLine: {
        margin: 0,
        background: 'line-highlight'
      },
      Input_endpointUrl: {
        flex: 1,
        paddingBlock: 'Z1',
        placeholder: 'Type the API route',
        width: '400px',
        onInput: (event, element, state) => {
          state.quietUpdate({
            endpointUrl: element.node.value
          })
        }
      }
    }
  },
  Flex: {
    width: '100%',
    flow: 'y',
    gap: 'B2',
    childExtends: 'Flex',
    childProps: {
      flow: 'y',
      gap: 'Z2',
      align: 'start'
    },
    Params: {
      Flex: {
        flow: 'y',
        gap: 'Z2',
        align: 'start',
        hide: (el, s) => !s.paramsArr.length,
        Span: {
          color: 'paragraph',
          text: 'Params'
        },
        Flex: {
          flow: 'y',
          gap: 'Z',
          childExtends: 'Flex',
          childProps: {
            gap: 'X2',
            align: 'center',
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.paramsArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                params: {
                  [key]: value
                }
              })
            },
            childProps: (el) => ({
              onInput: el.call(
                'debounce',
                (event, element, state) => {
                  state.update({
                    [element.key.split('_')[1]]: element.node.value
                  })
                },
                1000
              )
            }),
            Input_key: {
              padding: 'Z A',
              value: '{{ key }}',
              placeholder: 'Param key'
            },
            Input_value: {
              padding: 'Z A',
              value: '{{ value }}',
              placeholder: 'Param value'
            },
            IconButton: {
              icon: 'trash',
              onClick: (ev, el, s) => {
                s.parent.apply((s2) => {
                  delete s2.params[s2.key]
                  s2.paramsArr.splice(parseInt(el.parent.key, 10), 1)
                })
              }
            }
          },
          children: (el, s) => s.paramsArr,
          childrenAs: 'state'
        }
      },
      AddItemButton: {
        Caption: {
          text: 'Add params'
        },
        onClick: (ev, el, s) => {
          s.apply((s2) => {
            s2.paramsArr.push({})
          })
        }
      }
    },
    Auth: {
      Flex: {
        flow: 'y',
        gap: 'Z2',
        align: 'start',
        hide: (el, s) => !s.authArr.length,
        Span: {
          color: 'paragraph',
          text: 'Auth'
        },
        Flex: {
          flow: 'y',
          gap: 'Z',
          childExtends: 'Flex',
          childProps: {
            gap: 'X2',
            align: 'center',
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.authArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                auth: {
                  [key]: value
                }
              })
            },
            childProps: (el) => ({
              onInput: el.call(
                'debounce',
                (event, element, state) => {
                  state.update({
                    [element.key.split('_')[1]]: element.node.value
                  })
                },
                1000
              )
            }),
            Input_key: {
              padding: 'Z A',
              value: '{{ key }}',
              placeholder: 'Auth key'
            },
            Input_value: {
              padding: 'Z A',
              value: '{{ value }}',
              placeholder: 'Auth value'
            },
            IconButton: {
              icon: 'trash',
              onClick: (ev, el, s) => {
                s.parent.apply((s2) => {
                  delete s2.auth[s2.key]
                  s2.authArr.splice(parseInt(el.parent.key, 10), 1)
                })
              }
            }
          },
          children: (el, s) => s.authArr,
          childrenAs: 'state'
        }
      },
      AddItemButton: {
        Caption: {
          text: 'Add auth'
        },
        onClick: (ev, el, s) => {
          s.apply((s2) => {
            s2.authArr.push({})
          })
        }
      }
    },
    Headers: {
      Flex: {
        flow: 'y',
        gap: 'Z2',
        align: 'start',
        hide: (el, s) => !s.headersArr.length,
        Span: {
          color: 'paragraph',
          text: 'Headers'
        },
        Flex: {
          flow: 'y',
          gap: 'Z',
          childExtends: 'Flex',
          childProps: {
            gap: 'X2',
            align: 'center',
            onStateUpdate: (_, el, s) => {
              const {
                key,
                value
              } = s
              s.parent.headersArr[el.key] = s.parse()
              if (!key || !value) {
                return
              }
              s.parent.quietUpdate({
                headers: {
                  [key]: value
                }
              })
            },
            childProps: (el) => ({
              onInput: el.call(
                'debounce',
                (event, element, state) => {
                  state.update({
                    [element.key.split('_')[1]]: element.node.value
                  })
                },
                1000
              )
            }),
            Input_key: {
              padding: 'Z A',
              value: '{{ key }}',
              placeholder: 'Header key'
            },
            Input_value: {
              padding: 'Z A',
              value: '{{ value }}',
              placeholder: 'Header value'
            },
            IconButton: {
              icon: 'trash',
              onClick: (ev, el, s) => {
                s.parent.apply((s2) => {
                  delete s2.headers[s2.key]
                  s2.headersArr.splice(parseInt(el.parent.key, 10), 1)
                })
              }
            }
          },
          children: (el, s) => s.headersArr,
          childrenAs: 'state'
        }
      },
      AddItemButton: {
        Caption: {
          text: 'Add headers'
        },
        onClick: (ev, el, s) => {
          s.apply((s2) => {
            s2.headersArr.push({})
          })
        }
      }
    },
    BodyParam: {
      if: (el, s) => ['post', 'update'].includes(s.method.toLowerCase()),
      flow: 'y',
      gap: 'X2',
      align: 'stretch',
      width: '100%',
      Span: {
        hide: (el, s) => !s.showBody,
        color: 'paragraph',
        text: 'Body',
        width: '100%'
      },
      CodePreviewWidget: {
        props: (el, s) => ({
          hide: (el2, s2) => !s2.showBody,
          minWidth: '100%',
          widthRange: null,
          theme: 'field-static',
          round: 'X2',
          padding: 'X2 X2 X2 -',
          minHeight: 'G1',
          Monaco: {
            foldLevel: false,
            opacity: 1,
            fileTab: {
              code: el.call('stringifyCode', s.value, el, s),
              type: 'javascript',
              filename: 'function.js',
              fileTabKey: 'function'
            },
            onCodeEditCallback: (editor) => {
              s.quietReplace({
                body: el.call('evalStringCodeUnsafe', editor.getValue())
              })
            }
          }
        })
      },
      AddItemButton: {
        IconButton: {
          icon: (el, s) => (s.showBody ? 'crossmark' : 'plus')
        },
        Caption: {
          text: (el, s) => `${s.showBody ? 'Remove' : 'Add'} body`
        },
        onClick: (ev, el, s) => {
          s.apply((s2) => {
            s2.toggle('showBody')
          })
        }
      }
    }
  },
  ContinueButton: {
    alignSelf: 'start',
    text: 'Preview Request',
    onClick: async (ev, el, s) => {
      try {
        const response = await el.call('sendRequest', s.parse())
        console.log(response)
        s.update({
          value: response
        })
      } catch (ex) {
        if (ex?.message) {
          return el.call('openNotification', {
            title: 'Error with fetching',
            message: ex.message,
            type: 'error'
          })
        }
      }
    }
  },
  Code: {
    Line: {
      order: '-3',
      width: '100%'
    },
    width: '100%',
    maxWidth: '50vw',
    hide: (el, s) => !s.value,
    value: (el, s) => JSON.stringify(s.value),
    onUpdate: async (el, s) => {
      const code = el.call('stringifyCode', s.value)
      const value = await el.call('prettifyCode', code)
      return el.setProps({
        value
      }, {
        preventUpdateListener: true
      })
    },
    CodePreview: {
      maxHeight: 'H+C1'
    }
  },
  Saving: {
    width: '100%',
    flexFlow: 'y',
    flexAlign: 'start start',
    gap: 'C1',
    hide: (el, s) => !s.value,
    Line: {
      order: '-3',
      width: '100%'
    },
    TitleField: {
      key: 'title',
      Title: {
        text: 'Title'
      },
      Input: {
        placeholder: 'Title of the state'
      }
    },
    TitleField_key: {
      key: 'key',
      Title: {
        text: 'Key'
      },
      Input: {
        placeholder: 'Key of the state'
      }
    },
    SwitchFieldWithCaption: {
      Caption: {
        text: 'Runtime'
      },
      onChange: (ev, el, s) => s.toggle('runtime')
    },
    Code: {
      maxWidth: '50vw',
      show: (el, s) => s.runtime,
      value: el => el.call('codifyFetch')
    },
    SaveButton: {
      extends: 'ContinueButton',
      tag: 'button',
      alignSelf: 'start',
      type: 'submit',
      text: 'Save',
      onClick: async (ev, el, s) => {
        // if (runtime) {
        //   element.getRootState()[title] = resolve(data)
        // } else {
        // }
        console.log(s)
        if (!s.key) {
          return el.call('openNotification', {
            title: 'Key is required',
            message: `${ex}`,
            type: 'error'
          })
        }

        if (!s.value) {
          return el.call('openNotification', {
            title: 'Value is not assigned',
            message: `${ex}`,
            type: 'error'
          })
        }

        const {
          runtime
        } = s
        if (runtime) {
          s.value = el.call('codifyFetch')
          console.log(s.value)
        }

        const data = el.sdk.addItem(s.type, s.parse(), {
          message: `Added state section ${key}`
        })

        console.log(data)
      }
    }
  }
}
