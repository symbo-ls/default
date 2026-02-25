export const RangeWithButtons = {
  align: 'center',
  gap: 'Y',
  deps: {
    returnPropertyValue: (el, property, def) => {
      const val =
        (el.props && el.props[property]) ?? (el.state && el.state[property])

      if (el.call('isFunction', val)) {
        return val(el, el.state)
      }

      // eslint-disable-next-line no-undefined
      if (val === undefined || val == null) {
        return def ?? 0
      }

      return val
    }
  },
  SquareButton_minus: {
    icon: 'minus',
    theme: 'field',
    onClick: (ev, el, s) => {
      const parentProps = el.parent.props
      if (el.call('isFunction', parentProps.onDecrease)) {
        parentProps.onDecrease(ev, el.parent, s)
      } else {
        const value = parseFloat(s.value)
        const min = el.parent.deps.returnPropertyValue(el.parent, 'min', 1)
        const step = el.parent.deps.returnPropertyValue(el.parent, 'step', 1)
        if (value > min) {
          const decimalPlaces = (step.toString().split('.')[1] || '').length
          const newValue = Number((value - step).toFixed(decimalPlaces))
          el.lookup('Range').node.value = newValue
          s.update({
            value: newValue
          })
        }
      }
    }
  },
  Value: {
    tag: 'span',
    minWidth: '4ch',
    text: (el, s) => {
      const unit = el.parent.deps.returnPropertyValue(el.parent, 'unit', '')
      return `${s.value ?? s.defaultValue ?? 0}${unit}`
    }
  },
  Range: {
    attr: {
      value: (el, s) => parseFloat(s.value ?? s.defaultValue),
      min: el => el.parent.deps.returnPropertyValue(el.parent, 'min', 0),
      max: el => el.parent.deps.returnPropertyValue(el.parent, 'max', 100),
      step: el => el.parent.deps.returnPropertyValue(el.parent, 'step', 1),
      disabled: el => el.parent.deps.returnPropertyValue(el.parent, 'disabled', false)
    },
    onInput: (ev, el, s) => {
      const parentProps = el.parent.props
      if (el.call('isFunction', parentProps.onInput)) {
        parentProps.onInput(ev, el, s)
      } else {
        s.update({
          value: parseFloat(el.node.value)
        })
      }
    },
    onChange: (ev, el, s) => {
      const parentProps = el.parent.props
      if (el.call('isFunction', parentProps.onChange)) {
        parentProps.onChange(ev, el, s)
      } else {
        s.update({
          value: parseFloat(el.node.value)
        })
      }
    }
  },
  SquareButton_plus: {
    theme: 'field',
    icon: 'plus',
    onClick: (ev, el, s) => {
      const parentProps = el.parent.props
      if (el.call('isFunction', parentProps.onIncrease)) {
        parentProps.onIncrease(ev, el.parent, s)
      } else {
        const value = parseFloat(s.value)
        const max = el.parent.deps.returnPropertyValue(el.parent, 'max', 100)
        const step = el.parent.deps.returnPropertyValue(el.parent, 'step', 1)
        if (value < max) {
          const decimalPlaces = (step.toString().split('.')[1] || '').length
          const newValue = Number((value + step).toFixed(decimalPlaces))
          el.lookup('Range').node.value = newValue
          s.update({
            value: newValue
          })
        }
      }
    }
  }
}
