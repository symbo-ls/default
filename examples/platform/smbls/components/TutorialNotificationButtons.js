export const TutorialNotificationButtons = {
  extend: 'Flex',
  childExtend: [
    'CanvasButton',
    'Button'
  ],
  props: {
    align: 'center center',
    flow: 'x',
    fontSize: 'Z2',
    borderStyle: 'solid',
    borderColor: 'line-highlight',
    borderWidth: '1px 0 0 0',
    height: '100%',
    childProps: {
      round: '0',
      padding: 'A',
      flex: 1,
      gap: 'X2',
      ':not(:last-child)': {
        borderStyle: 'solid',
        borderColor: 'line-highlight',
        borderWidth: '0 1px 0 0'
      }
    },
    children: [
      {
        icon: 'sf question oval',
        text: 'Learn more',
        onClick: (ev, el, s) => {
          el.setWindow('docs', s.docsArticle)
        }
      },
      {
        icon: 'checkmark',
        text: 'Okay',
        onClick: (ev, el, s) => {
          if (s.callback) el.call('exec', s.callback)
          el.lookup(el => el.props?.rootSlide).remove()
          const markKey = 'tutorialMarked_' + s.key
          el.call('setCookie', markKey, true)
        }
      }
    ]
  }
}
