export const connect = {
  extends: [
    'Page',
  ],
  flow: 'y',
  gap: 'D1',
  childProps: {
    flexFlow: 'y',
    gap: 'C1',
  },
  Development: {
    SectionTitle: {
      text: 'Development',
    },
    Flex: {
      flow: 'y',
      gap: 'B1',
      templateColumns: 'repeat(4, 1fr)',
      ConnectionLabel_dev: {
        state: (el) => ({
          isActive: el.getAppKey()
        }),
        gridColumnStart: 'span 2',
        Circle: {
          order: '-2',
        },
        Link: {
          order: '-1',
          href: (el) => `https://${el.getAppKey()}/`,
          text: (el) => el.getAppKey(),
          target: '_blank',
          fontWeight: '400',
          '@dark': {
            color: 'white',
          },
          '@light': {
            color: 'black',
          },
          ':hover': {
            textDecoration: 'underline',
          },
        },
        CopyButton: {},
        SquareButton_force: {
          show: (el, s) => s.isActive,
          icon: 'reload outline',
          background: 'transparent',
          theme: 'common-card-outline-interactive',
          isActive: false,
          fontSize: 'Z',
          '--spacing-ratio': 1.2,
          borderWidth: '1px',
          borderStyle: 'solid',
          onClick: async (_ev, el) => {
            el.setProps({
              Icon: {
                name: 'checkmark outline'
              }
            })
            const t = setTimeout(() => {
              el.setProps({
                Icon: {
                  name: 'reload outline'
                }
              })
              clearTimeout(t)
            }, 1000)

            await el.call('addSmblsSubdomains', el.getAppKey())
          },
        },
        text: null,
      },
      ConnectionLabel_local: {
        isActive: (el, s) => el.getRootState('clients').localhost,
        Circle: {},
        text: 'localhost',
      },
    },
    Line: {
      margin: 'C1 - 0',
    },
  },
  CLI: {
    ComingSoon: {
      Span: {
        flow: 'x',
        gap: 'X',
        Strong: {
          text: 'CLI Tool',
        },
      },
      SectionTitle: {
        text: 'CLI',
      },
      Grid: {
        gap: 'B1 C3',
        templateColumns: 'repeat(4, 1fr)',
        ConnectionLabel: {
          isActive: (el, s) => el.getRootState('clients').cli,
        },
      },
    },
    Line: {
      margin: 'C1 - 0',
    },
  },
  CI: {
    ComingSoon: {
      Span: {
        flow: 'x',
        gap: 'X',
        Strong: {
          text: 'CI integrations',
        },
      },
      SectionTitle: {
        text: 'CI/CD integrations',
      },
      Grid: {
        gap: 'B1 C3',
        templateColumns: 'repeat(4, 1fr)',
        ConnectionLabel: {
          isActive: (el, s) => el.getRootState('clients').cli,
        },
      },
    },
  },
  Envs: {
    SectionTitle: {
      text: 'Environments',
    },
    Flex: {
      flow: 'y',
      gap: 'B1',
      templateColumns: 'repeat(4, 1fr)',
      ConnectionLabel_dev: {
        state: (el) => ({
          isActive: el.getAppKey()
        }),
        gridColumnStart: 'span 2',
        Circle: {
          order: '-2',
        },
        Link: {
          order: '-1',
          href: (el) => `https://${el.getAppKey()}/`,
          text: (el) => el.getAppKey(),
          target: '_blank',
          fontWeight: '400',
          '@dark': {
            color: 'white',
          },
          '@light': {
            color: 'black',
          },
          ':hover': {
            textDecoration: 'underline',
          },
        },
        CopyButton: {},
        SquareButton_force: {
          show: (el, s) => s.isActive,
          icon: 'reload outline',
          background: 'transparent',
          theme: 'common-card-outline-interactive',
          isActive: false,
          fontSize: 'Z',
          '--spacing-ratio': 1.2,
          borderWidth: '1px',
          borderStyle: 'solid',
          onClick: `(_ev, el) {
            el.setProps({
              Icon: {
                name: 'checkmark outline'
              }
            })
            const t = setTimeout(() => {
              el.setProps({
                Icon: {
                  name: 'reload outline'
                }
              })
              clearTimeout(t)
            }, 1000)

            await el.call('addSmblsSubdomains', el.getAppKey())
          }`,
        },
        text: null,
      },
      ConnectionLabel_local: {
        isActive: (el, s) => el.getRootState('clients').localhost,
        Circle: {},
        text: 'localhost',
      },
    },
    ComingSoon: {
      Span: {
        flow: 'x',
        gap: 'X',
        Strong: {
          text: 'Custom domains',
        },
      },
      CustomDomains: {
        state: {
          domains: [
          ],
        },
        onRender: (el, st) => {
          const {
            root
          } = st
          if (root && root.domains && root.domains.development) {
            st.replace({
              domains: [{
                domain: root.domains.development.domain,
                cname: root.domains.development.cname
              }]
            })
          }
        },
      },
      AddCustomDomain: {
        ContinueButton: {
          width: '15rem',
          ':hover': {
            cursor: 'pointer',
          },
          href: () => `${window.location.pathname}/add-domain?type=development`,
          text: 'Add custom domain',
        },
      },
      Button: {
        extends: [
          'Link',
          'Button',
        ],
        href: () => `${window.location.pathname}/reset`,
        fontSize: 'A1',
        fontWeight: '400',
        alignSelf: 'start',
        scrollToTop: false,
        theme: 'common-card-interactive',
        text: 'Reset',
      },
    },
    Line: {
      margin: 'C1 - 0',
    },
  },
  Packages: {
    flexFlow: 'y',
    gap: 'C1',
    SectionTitle: {
      flexAlign: 'center space-between',
      text: 'Dependencies',
      Link: {
        extends: [
          'Link',
          'IconButton',
        ],
        icon: 'question mark fill',
        href: '/docs/dependencies',
      },
    },
    Grid: {
      show: (el, s) => Object.keys(s.parse()).length,
      gap: 'B1 C3',
      templateColumns: 'repeat(4, 1fr)',
      childExtends: {
        extend: [
          'Flex',
          'Link',
        ],
        props: (el, s) => ({
          isError: el.getDependencies(el.props.Title.text) === 'error',
          '.isError': {
            color: 'red'
          },
          fontWeight: '400',
          align: 'center start',
          Icon: {
            name: 'npm'
          },
          Icon_error: {
            name: 'exclMark'
          }
        }),
        LoadingGif: {
          show: (el, s) =>
            el.getDependencies(el.parent.props.Title.text) === 'loading',
          inCenter: false,
          width: 'A',
          transform: 'scale(1.98)',
        },
        Icon: {
          show: (el, s) =>
            el.getDependencies(el.parent.props.Title.text) !== 'error' &&
            el.getDependencies(el.parent.props.Title.text) !== 'loading',
        },
        Icon_error: {
          show: (el, s) =>
            el.getDependencies(el.parent.props.Title.text) === 'error',
        },
        Title: {
          margin: '- A - Z',
        },
        Version: {
          opacity: 0.65,
        },
      },
      childrenAs: 'props',
      children: (el, s) => {
        const schema = el.getPackages()
        const deps = el.getDependencies()
        return Object.keys(deps).map((v) => ({
          onClick: async (f, el, st) => {
            await el.call('openModal', '/edit-dependency', {
              key: v
            })
          },
          Title: {
            text: v
          },
          Version: {
            text: `${schema[v]} ${
              deps[v] !== s[v] &&
              schema[v].status !== 'loading' &&
              schema[v].status !== 'error'
                ? `(${deps[v]})`
                : ''
            }`
          }
        }))
      },
    },
    SectionAddButton: {
      ignoreChildExtend: true,
      scrollToTop: false,
      onClick: async (f, el, st) => {
        await el.call('openModal', '/add-dependency')
      },
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  DesignTools: {
    show: (el) =>
      el.getRootState().userId === 'usb148d6dd' ||
      el.getRootState().userId === 'usce70482d',
    SectionTitle: {
      text: 'Design Tools',
    },
    state: '~/INTEGRATIONS',
    Grid: {
      gap: 'B1 C3',
      templateColumns: 'repeat(4, 1fr)',
      margin: '- - C1',
      children: [
        {
          extend: 'InputField',
          Title: {
            text: 'Figma file URL:',
          },
          Input: {
            type: 'url',
            width: '100%',
            placeholder: 'https://figma.com/...',
            value: (el, s) => s.figma?.url,
            required: true,
            onChange: (ev, el, s) => {
              const {
                value
              } = ev.target
              const figmaUrlRegex =
                /https:\/\/(?<temp3>[\w.-]+\.)?figma.com\/(?<temp2>file|proto)\/(?<temp1>[0-9a-zA-Z]{22,128})(?:\/.*)?$/u
              if (figmaUrlRegex.test(value)) {
                el.getRootState().update({
                  INTEGRATIONS: {
                    figma: {
                      url: value
                    }
                  }
                })
              }
            },
          },
        },
        {
          extend: 'InputField',
          Title: {
            text: 'Sketch file URL:',
          },
          Input: {
            type: 'url',
            width: '100%',
            placeholder: 'https://sketch.com/...',
            value: (el, s) => s.sketch?.url,
            required: true,
            change: (ev, el, s) => {
              const {
                value
              } = ev.target
              const sketchUrlRegex =
                /https:\/\/(?<temp3>[\w.-]+\.)?sketch.com\/(?<temp2>file|proto)\/(?<temp1>[0-9a-zA-Z]{22,128})(?:\/.*)?$/u
              if (sketchUrlRegex.test(value)) {
                el.getRootState().update({
                  INTEGRATIONS: {
                    sketch: {
                      url: value
                    }
                  }
                })
              }
            },
          },
        },
      ],
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Secrets: {
    SectionTitle: {
      flexAlign: 'center space-between',
      text: 'Secrets',
      Link: {
        extends: [
          'Link',
          'IconButton',
        ],
        icon: 'question mark fill',
        href: '/docs/secrets',
      },
    },
    Grid: {
      if: (el, s) => Object.keys(el.getSecrets()).length,
      gap: 'B1 C3',
      templateColumns: 'repeat(8, 1fr)',
      margin: '- - C1',
      childExtends: [
        'Flex',
        'Link',
      ],
      childrenAs: 'props',
      childProps: {
        fontWeight: '400',
        align: 'center start',
      },
      children: (el) =>
        Object.keys(el.getSecrets()).map((v) => ({
          onClick: async (f, el, st) => {
            await el.call('openModal', '/edit-secret', {
              key: v
            })
          },
          Title: {
            text: v
          }
        })),
    },
    SectionAddButton: {
      props: () => ({
        order: 3,
        ignoreChildExtend: true,
        scrollToTop: false,
        onClick: async (f, el, st) => {
          await el.call('openModal', '/add-secret')
        }
      }),
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Analytics: {
    SectionTitle: {
      text: 'Analytics',
    },
    state: '~/INTEGRATIONS/analytics',
    P: {
      text: 'No analytics integration at this moment (TBA)',
    },
    Line: {
      margin: 'D1 - 0',
    },
  },
  Plugins: {
    SectionTitle: {
      text: 'Plugins',
    },
    state: '~/PLUGINS',
    P: {
      text: 'No plugins at this moment (TBA)',
    },
  },
};