export const GridInDropdown = {
  extends: 'Grid',
  tag: 'nav',
  gridTemplateRows: 'repeat(1fr, 6)',
  autoColumns: 'auto',
  padding: 'X2',
  gap: 'Z2',
  children: el => el.call('exec', el.parent.props.options, el.parent),
  childrenAs: 'state',
  content: {
    ignoreChildProps: true,
    ignoreChildExtend: true
  },
  childExtends: [
    'GridItem'
  ]
}
