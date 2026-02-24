export const SectionHeaderWithNav = {
  extends: 'SectionHeader',
  Article: {},
  Nav: {
    flow: 'row-reverse',
    fontSize: 'A2',
    gap: 'A',
    childExtends: 'MenuItem',
    children: (el, s) => s.nav,
    Toggle: {
      if: (el, s) => s[s.__element.key] || s.toggleShow !== undefined,
      isActive: (el, s) => !s.toggleShow,
      Icon: {
        name: (el, s) => 'arrowAngle' + (s.toggleShow ? 'Up' : 'Down'),
      },
      onClick: (event, el, s) => {
        s.update({
          toggleShow: !s.toggleShow
        })
      },
    },
    childProps: {
      scrollToTop: false,
    },
  },
};