export const SwitchFieldWithCaption = {
  tag: 'label',
  align: 'center space-between',
  gap: 'Y',
  userSelect: 'none',
  ':hover > caption': {
    color: 'gray12',
    opacity: 1
  },
  Input: {
    type: 'checkbox',
    display: 'none',
    ':checked ~ caption': {
      opacity: 1
    },
    ':checked ~ span > span': {
      background: 'dim',
      ':before': {
        left: '68%',
        background: 'caption'
      }
    },
    onChange: (ev, el, s, ctx) => {
      ev.stopPropagation()
      const hasChange = el.parent.props.onChange
      if (hasChange) {
        hasChange(ev, el.parent, s, ctx)
      }
    }
  },
  SwitchField: {
    tag: 'span',
    Input: null
  },
  Caption: {
    padding: '0',
    opacity: '.65',
    color: 'gray7',
    text: 'Disable this style',
    transition: 'B defaultBezier',
    transitionProperty: 'color, opacity'
  }
}
