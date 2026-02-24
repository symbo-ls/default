export const DragComponentsTutorial = {
  state: {
    CACHE: {
      pages: {
        '/': {
          align: 'center',
          boxSize: '100%',
          width: 'G+F',
          Window: {
            margin: 'auto',
            borderRadius: 'Z2',
            border: '1px solid gray',
            HelloWorld: {},
            Hr: {
              borderColor: 'gray',
              margin: '0',
            },
            ConfirmButtons: {},
          },
        },
      },
      components: {
        ConfirmButtons: {
          extend: 'Flex',
          props: {
            align: 'stretch space-around',
            childProps: {
              flex: 1,
              textAlign: 'center',
              padding: 'Z2',
              ':hover': {
                background: 'gray .35',
              },
            },
            Link: {
              extends: [
                'Link',
                'IconText',
              ],
              text: 'About me',
              theme: 'transparent',
              gap: 'X2',
              icon: 'check',
              Icon: {
                color: 'green',
              },
            },
            Link_contact: {
              text: 'Contact',
              href: '#contact',
            },
          },
        },
        HelloWorld: {
          props: {
            padding: 'B',
            Flex: {
              gap: 'A',
              H4: {
                text: '🌀',
                order: '-1',
              },
              Hgroup: {
                H: {
                  text: 'Hello World',
                },
                P: {
                  text: 'This is example paragraph page that shows you how cool is Symbols',
                },
              },
            },
          },
        },
      },
    },
  },
  props: {
    flow: 'y',
    childProps: {
      margin: '- - B',
      P: {
        margin: '0 0 X2',
      },
      ComponentThumbnailIframe: {
        margin: '- -Y1',
        height: 'F1',
        background: 'shadow',
        round: 'B',
      },
    },
    children: [
      {
        P: {
          text: '1. Add this component first',
        },
        ComponentThumbnailIframe: {
          state: {
            key: 'HelloWorld',
            title: 'Hello World',
            type: 'components',
            settings: {
              gridOptions: {},
            },
            code: `export default {
  padding: 'B',

  Flex: {
    gap: 'A',

    H4: {
      text: '🌀',
      order: -1
    },
    Hgroup: {
      H: {
        text: 'Hello World',
      },
      P: {
        text: 'This is example paragraph page that shows you how cool is Symbols',
      },
    }
  }
}`,
            uses: [
              'Flex',
              'H4',
              'Hgroup',
              'H',
              'P',
            ],
            error: null,
            value: {
              props: {
                padding: 'B',
                Flex: {
                  gap: 'A',
                  H4: {
                    text: '🌀',
                    order: '-1',
                  },
                  Hgroup: {
                    H: {
                      text: 'Hello World',
                    },
                    P: {
                      text: 'This is example paragraph page that shows you how cool is Symbols',
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        P: {
          text: '2. Add this next',
        },
        ComponentThumbnailIframe: {
          state: {
            key: 'ConfirmButtons',
            title: 'Confirm Buttons',
            type: 'components',
            settings: {
              gridOptions: {},
            },
            code: `export default {
  extends: 'Flex',
  align: 'stretch space-around',

  childProps: {
    flex: 1,
    textAlign: 'center',
    padding: 'Z2',
    ':hover': {
      background: 'gray .35',
    }
  },

  Link: {
    extends: ['Link', 'IconText'],
    text: 'About me',
    theme: 'transparent',
    gap: 'X2',
    icon: 'check',
    Icon: {
      color: 'green'
    }
  },

  Link_contact: {
    text: 'Contact',
    href: '#contact'
  },
}`,
            uses: [
              'Flex',
              'Link',
              'IconText',
              'Icon',
            ],
            value: {
              extend: 'Flex',
              props: {
                align: 'stretch space-around',
                childProps: {
                  flex: 1,
                  textAlign: 'center',
                  padding: 'Z2',
                  ':hover': {
                    background: 'gray .35',
                  },
                },
                Link: {
                  extends: [
                    'Link',
                    'IconText',
                  ],
                  text: 'About me',
                  theme: 'transparent',
                  gap: 'X2',
                  icon: 'check',
                  Icon: {
                    color: 'green',
                  },
                },
                Link_contact: {
                  text: 'Contact',
                  href: '#contact',
                },
              },
            },
          },
        },
      },
      {
        P: {
          text: '3. Now, lets add the page',
        },
        ComponentThumbnailIframe: {
          state: {
            key: '/',
            type: 'pages',
            settings: {
              gridOptions: {},
            },
            code: `export default {
  extends: 'Flex',
  align: 'center',
  boxSize: '100%',
  width: 'G+F',

  Window: {
    margin: 'auto',
    borderRadius: 'Z2',
    border: '1px solid gray',

    HelloWorld: {},

    Hr: {
      borderColor: 'gray',
      margin: '0'
    },

    ConfirmButtons: {}
  }
}`,
            uses: [
              'Flex',
              'Window',
              'HelloWorld',
              'Hr',
              'ConfirmButtons',
            ],
            value: {
              extend: 'Flex',
              props: {
                align: 'center',
                boxSize: '100%',
                width: 'G+F',
                Window: {
                  margin: 'auto',
                  borderRadius: 'Z2',
                  border: '1px solid gray',
                  HelloWorld: {},
                  Hr: {
                    borderColor: 'gray',
                    margin: '0',
                  },
                  ConfirmButtons: {},
                },
              },
            },
          },
        },
      },
    ],
  },
};