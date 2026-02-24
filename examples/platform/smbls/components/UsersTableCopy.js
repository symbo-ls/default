export const UsersTableCopy = {
  H6: {
    text: 'Team Members',
    margin: '- - A',
  },
  Flex: {
    flow: 'y',
    childExtends: 'Grid',
    childProps: {
      alignItems: 'center',
      columns: '2.2em 1fr 3fr 1fr',
      padding: 'Z1 0',
      gap: 'C1',
      Avatar: {
        props: (el, s) => ({
          boxSize: 'B',
          key: s.name
        }),
      },
      Name: {
        margin: '- - - -C',
        Text: {
          tag: 'span',
          text: '{{ name }}',
        },
        Strong: {
          hide: (el, s) => !s.username,
          text: ' ({{ username }})',
        },
      },
      Email: {
        text: '{{ email }}',
      },
      Role: {},
    },
    children: (el) => el.getRootProjectsUsers(),
    childrenAs: 'state',
  },
};