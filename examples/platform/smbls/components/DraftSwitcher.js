export const DraftSwitcher = {
  extends: 'SwitchFieldWithCaption',
  onChange: (ev, el, s) => {
    s.update({
      draft: !s.draft
    })
  },
  Input: {
    checked: ({
      state
    }) => state.draft
  },
  SwitchField: {},
  Caption: {
    padding: '0',
    opacity: '.65',
    color: 'gray7',
    text: 'Draft'
  }
}
