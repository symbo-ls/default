export const SelectedArticlesPanel = {
  extend: 'Flex',
  props: (el, s) => ({
    hide: (el, s) => s.activeContent !== 'TUTORIALS',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    borderRadius: 'A1',
    padding: 'Z2 Z2',
    position: 'relative',
    fontSize: 'Z1',

    childProps: {
      flex: '0 0 auto',
      width: '100%',
      minHeight: 'auto'
    }
  }),
  Flex: {
    flexDirection: 'column',
    H1: {
      fontSize: 'B2',
      padding: '- - Z -',
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
      color: 'paragraph',
      text: 'Let\'s run through a few tutorials...'
    },
    Flex: {
      flow: 'y',
      childProps: {
        padding: 'Z1 W',
        width: '100%',
        maxWidth: 'H1',
        transition: 'A defaultBezier padding',
        borderStyle: 'solid',
        borderWidth: '1px 0 0 0',
        color: 'title',
        onClick: (ev, el) => {
          ev.preventDefault()
          ev.stopPropagation()
          el.setWindow('docs', el.props.href.split('/docs')[1])
        },
        borderColor: 'line'
      },
      children: [
        {
          href: '/docs/intro',
          text: 'Intro'
        },
        {
          href: '/docs/components',
          text: 'Creating your first components'
        },
        {
          href: '/docs/pages',
          text: 'Routing and pages'
        },
        {
          href: '/docs/how-to-code',
          text: 'How to code'
        },
        {
          href: '/docs/design-system',
          text: 'Design System reference'
        },
        {
          href: '/docs/element',
          text: 'The element API'
        },
        {
          href: '/docs/properties',
          text: 'Custom properties'
        },
        {
          text: 'Publishing & domains (TBA)'
        },
        {
          text: 'Import & export (TBA)'
        },
        {
          text: 'Versioning (TBA)'
        },
        {
          text: 'Branching (TBA)'
        },
        {
          href: '/docs/functions',
          text: 'Functions reference'
        },
        {
          href: '/docs/dependencies',
          text: 'Dependencies'
        }
      ]
    }
  }
}
