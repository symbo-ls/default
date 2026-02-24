export const HelloUser = {
  margin: '- auto - -',
  color: 'title',
  text: el =>
    `Welcome ${
        el.getRootProjects().length > 0 ? ' back, ' : 'to Symbols, '
      }${
        el.getRootState('username')
      } 👋 `,
};