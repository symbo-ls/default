export const NavigationDots = {
  tag: 'nav',
  extend: 'Flex',
  props: {
    gap: 'A2',
    margin: 'A -',
    padding: 'A',
    align: 'center center',
    onRender: el => el.update(),
    childProps: {
      boxSize: 'Z',
      theme: 'dialog',
      round: '100%',
      cursor: 'pointer',
      isActive: (el, s) => parseInt(el.key) === s.activeIndex,
      text: '',
      '.isActive': {
        theme: 'primary'
      },
      ':active': {
        theme: 'primary'
      }
    },
    children: (el, s) => s.slides
  }
}
