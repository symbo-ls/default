export const FilesSectionTitle = {
  tag: 'header',
  IconButton_arrow: {
    props: (el, s) => {
      const isVisible = el.call('getCookie', `sidebar_${s.type}`) !== 'false'
      return {
        isVisible,
        transition: 'A defaultBezier opacity',
        margin: '- -Y - -A1',
        color: 'dim',
        fontSize: 'Z2',
        // margin: '- - - auto',
        background: 'transparent',
        theme: null,
        opacity: isVisible ? 0 : 1,
        icon: `arrow angle ${isVisible ? 'down' : 'right'}`,
        // eslint-disable-next-line no-shadow
        onClick: (ev, el, s) => {
          // eslint-disable-next-line no-shadow
          const isVisible =
            el.call('getCookie', `sidebar_${s.type}`) !== 'false'
          el.call('setCookie', `sidebar_${s.type}`, !isVisible)
          s.update()
        }
      }
    }
  },
  Span: {
    extends: [
      'CaptionTitle',
      'Flex'
    ],
    margin: 'W auto - -',
    ':hover': {
      color: 'paragraph'
    },
    Text: {
      text: (el, s) => s.type?.replace('_', ' ')
    },
    onClick: (ev, el, s) => {
      const isVisible = el.call('getCookie', `sidebar_${s.type}`) !== 'false'
      el.call('setCookie', `sidebar_${s.type}`, !isVisible)
      s.update()
    }
  },
  'NavbarButton.question': {
    transition: 'A defaultBezier opacity',
    color: 'disabled',
    icon: 'question mark',
    title: 'Docs',
    fontSize: 'Z2',
    onClick: (ev, el, s) => {
      ev.preventDefault()
      ev.stopPropagation()
      el.setWindow('docs', '/' + s.type)
    }
  },
  extend: 'Navbar',
  props: {
    top: 0,
    zIndex: 2,
    position: 'sticky',
    minWidth: '100%',
    userSelect: 'none',
    theme: 'common-box',
    align: 'center',
    margin: '- -Y1',
    padding: '- Y1',
    fontSize: 'Z2'
  }
}
