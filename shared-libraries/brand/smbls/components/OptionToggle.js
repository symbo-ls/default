export const OptionToggle = {
  extends: 'SwitchFieldWithCaption',
  borderWidth: '1px 0 0 0',
  borderStyle: 'solid',
  padding: 'B1 - -',
  cursor: 'pointer',
  '@dark': {
    borderColor: '--color-line-dark',
  },
  '@light': {
    borderColor: '--color-line-light',
  },
  onChange: (ev, el) => {
    const {
      key
    } = el.props
    const val = ev.target.checked
    el.setUserSettings(key, val, {
      message: `Set ${key} settings to ${val}`
    })
  },
  Input: {
    checked: el => el.getUserSettings(el.parent.props.key),
  },
  Caption: {},
  QuestionMarkTooltip: {
    margin: 'X auto - X',
    Icon: {},
    TooltipHidden: {
      description: ({
        parent
      }) => parent.props.tip,
    },
  },
  SwitchField: {},
};