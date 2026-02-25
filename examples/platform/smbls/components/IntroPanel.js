export const IntroPanel = {
  extend: 'Flex',
  props: {
    flow: 'y',
    fontSize: 'Z1',
    padding: 'A2 A A2',
    gap: 'C',
    overflow: 'hidden auto',
    Hgroup: {
      H: {
        fontSize: 'B2',
        margin: '0',
        color: 'title',
        fontWeight: '500',
        text: (el) => {
          const {
            name,
            username
          } = el.getRootState()
          return `Hi ${username || name || ''} 👋`
        }
      },
      P: {
        margin: '0',
        fontSize: 'Z2',
        color: 'paragraph',
        text: 'Welcome to your Symbols canvas! This quick guide will walk you through the basics of your workspace.'
      }
    },
    DragParagraph: {
      fontSize: 'Z1',
      margin: 'Z auto A'
    },
    DragComponentsTutorial: {},
    Line: {
      margin: '0'
    },
    MovingOn: {
      P: {
        color: 'paragraph',
        text: 'Let\'s continue your journey using Symbols'
      },
      Flex: {
        flow: 'y',
        childExtends: 'Flex',
        childProps: {
          align: 'center',
          gap: 'Z',
          padding: 'Z2 W',
          width: '100%',
          transition: 'A defaultBezier padding',
          borderStyle: 'solid',
          borderWidth: '1px 0 0 0',
          color: 'title',
          borderColor: 'line',
          ':hover': {
            textDecoration: 'underline'
          },
          Icon: {
            order: '-2',
            name: 'arrow up right'
          }
        },
        children: [
          {
            Text: {
              text: 'My content'
            }
          },
          {
            Text: {
              text: 'Chat with AI'
            }
          },
          {
            Text: {
              text: 'More tutorials'
            }
          },
          {
            Text: {
              text: 'More examples'
            }
          },
          {
            Text: {
              text: 'Library components'
            }
          },
          {
            Text: {
              text: 'My code'
            }
          },
          {
            Text: {
              text: 'Documentation'
            }
          },
          {
            Text: {
              text: 'How to export'
            }
          },
          {
            Text: {
              text: 'Support & Resources'
            }
          }
        ]
      }
    },
    Dismiss: {
      extends: [
        'CanvasButton',
        'Button'
      ],
      alignSelf: 'start',
      fontSize: 'Z',
      gap: 'X2',
      opacity: '.65',
      margin: '- - - -A',
      padding: 'Z A',
      icon: 'x circle fill',
      text: 'Dismiss onboarding',
      onClick: (ev, el) => {
        el.call('setCookie', 'tutorialMarked_intro', true)
        el.closeWindow('explorer')
      }
    }
  }
}
