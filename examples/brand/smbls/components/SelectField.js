export const SelectField = {
  extends: 'DropdownField',
  minWidth: 'E3',
  round: 'C1',
  padding: '0',
  position: 'relative',
  Dropdown: null,
  Value: null,
  Buttons: {
    position: 'absolute',
    right: 'Z',
    pointerEvents: 'none',
    Arrow: {
      theme: 'transparent',
      color: 'dim',
      icon: 'arrow angle down'
    }
  },
  Select: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    color: 'currentColor',
    padding: 'Z1 A2',
    round: 'C1',
    width: '100%',
    appearance: 'none',
    name: 'user',
    id: 'user',
    onChange: (ev, el, s, ctx) => {
      if (el.parent.props.onChange) {
        ev.stopPropagation()
        return el.parent.props.onChange(ev, el, s, ctx)
      }
    },
    children: el => el.call('exec', el.parent.props.options, el),
    childrenAs: 'props',
    childProps: {
      tag: 'option',
      attr: {
        selected: (el, s) => el.node.value === s.visibility
      }
    }
  }
}
