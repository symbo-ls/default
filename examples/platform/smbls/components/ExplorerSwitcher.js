export const ExplorerSwitcher = {
  extend: [
    'Grid',
    'Navbar',
  ],
  props: {
    round: 'C1',
    fontSize: 'Z',
    templateColumns: 'repeat(11, 1fr)',
    align: 'center center',
    onRender: el => el.update(),
    childProps: {
      textAlign: 'center',
      isActive: (el, s) => el.props.key === s.activeContent,
      onClick: (ev, el, s) => {
          const activeContent = el.props.key
          // el.call('setSidebarContent', activeContent)
          el.setWindow('explorer', 'explorer:' + activeContent)
        },
      theme: null,
    },
    theme: null,
    children: [
      {
        icon: 'sf components',
        title: 'Artboards',
        key: 'ARTBOARD_TYPES',
      },
      {
        icon: 'fnOutline',
        title: 'Functions',
        key: 'FUNCTION_TYPES',
      },
      {
        icon: 'sf document',
        title: 'State',
        key: 'STATE_TYPES',
      },
      {
        icon: 'sf assets',
        title: 'Assets',
        key: 'ASSETS_TYPES',
      },
      {
        icon: 'sf pallete',
        title: 'Colors',
        key: 'COLOR_TYPES',
      },
      {
        icon: 'sf responsive',
        title: 'Responsive',
        key: 'RESPONSIVE_TYPES',
      },
      {
        icon: 'fontFace',
        title: 'Typography',
        key: 'TYPOGRAPHY_TYPES',
      },
      {
        icon: 'spaceOutlineColored',
        title: 'Spacing',
        key: 'SPACING_TYPES',
      },
      {
        icon: 'iconsOutlineColored',
        title: 'Icons',
        key: 'ICON_TYPES',
      },
      {
        icon: 'animationsAlt',
        title: 'Animation',
        key: 'TRANSITION_TYPES',
      },
      {
        icon: 'fuse',
        title: 'Integrations',
        key: 'INTEGRATIONS_TYPES',
      },
    ],
    gap: 'V',
  },
  childExtend: {
    extend: [
      'NavbarButton',
      'NavbarTooltipParent',
    ],
    state: null,
    props: {
      round: 'C1',
      padding: 'Z -',
      width: 'initial',
      aspectRatio: 'unset',
    },
  },
  NavbarTooltip: {
    ignoreChildExtend: true,
    ignoreChildProps: true,
  },
};