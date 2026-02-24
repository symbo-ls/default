export const ListInDropdown = {
  tag: 'nav',
  flow: 'y',
  gap: 'W',
  align: 'stretch flex-start',
  children: el => el.call('exec', el.parent.props.options, el.parent),
  childrenAs: 'state',
  content: {
    ignoreChildProps: true,
    ignoreChildExtend: true,
  },
  childExtends: [
    'KeyValueColumnFields',
  ],
};