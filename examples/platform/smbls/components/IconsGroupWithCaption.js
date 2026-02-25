export const IconsGroupWithCaption = {
  width: '100%',
  P: {
    margin: '0 - Z2',
    text: '{{ title }}',
    userSelect: 'none',
    color: 'dim',
    fontSize: 'Y',
    textTransform: 'uppercase'
  },
  IconsGroup: {
    if: (el, s) => Object.keys(s.data).length
  }
}
