export const AccordionItem = {
  state: {
    isActive: false
  },
  props: (el, s) => {
    const Section = el.Section.node
    const height = Section?.getBoundingClientRect && Section.getBoundingClientRect().height
    return {
      flow: 'y',
      position: 'relative',
      align: 'flex-start',
      overflow: 'hidden',
      padding: 'Z1 W',
      width: '100%',
      maxWidth: 'H1',
      transition: 'A defaultBezier padding',
      borderStyle: 'solid',
      borderWidth: '1px 0 0 0',
      '@dark': {
        borderColor: 'gray3'
      },
      '@light': {
        borderColor: 'gray13'
      },
      '.isActive': {
        paddingBlockEnd: `calc(${height}px + 1em)`
      }
    }
  },
  Flex: {
    minWidth: '100%',
    align: 'center space-between',
    cursor: 'pointer',
    userSelect: 'none',
    onClick: (event, element, state) => {
      state.toggle('isActive')
    },
    P: {
      padding: 'X2 -',
      margin: '0',
      text: 'Question text one here',
      color: 'title'
    },
    Icon: {
      icon: 'arrowAngleDown',
      textDecoration: 'none',
      fontSize: 'B',
      '.isActive': {
        transform: 'rotate(180deg)'
      }
    }
  },
  Section: {
    text: 'Use a checkbox when users can select one option, multiple options, or no option from a list of a possible options.',
    position: 'absolute',
    padding: 'Z2 0 W',
    color: 'paragraph',
    cursor: 'default',
    top: 'C',
    transition: 'A defaultBezier',
    transitionProperty: 'margin, opacity',
    '.isActive': {
      opacity: '1'
    },
    '!isActive': {
      opacity: '0'
    }
  }
}
