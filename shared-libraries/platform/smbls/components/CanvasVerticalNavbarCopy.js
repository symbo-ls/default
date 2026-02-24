export const CanvasVerticalNavbarCopy = {
  extends: 'Navbar',
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  transform: 'translate3d(0, -50%, 0)',
  left: '--canvas-gutter',
  flow: 'y',
  padding: 'U1 U1',
  round: 'C1',
  gap: 'X',
  theme: 'canvas-card-glass',
  NavbarButtonSet: {
    padding: '0',
    gap: 'Z',
    flow: 'y',
    childProps: {
      padding: 'Y2',
      round: 'C1',
      isActive: el => el.getWindow('explorer') === el.props.key,
      onClick: (ev, el) => el.call('handleDsNavbarClick'),
    },
    children: [
      {
        key: 'components',
        title: 'Components',
        Icon: {
          name: 'grid',
        },
      },
      {
        key: 'pages',
        title: 'Pages',
        Icon: {
          name: 'pages outline',
        },
      },
      {
        key: 'functions',
        title: 'Functions',
        Icon: {
          name: 'fn outline',
        },
      },
      {
        key: 'files',
        title: 'Files',
        Icon: {
          name: 'folder outline',
        },
      },
      {
        key: 'dependencies',
        title: 'Dependencies',
        Icon: {
          name: 'npm outline',
        },
      },
    ],
    childrenAs: 'props',
  },
  Line: {
    margin: 'Y1 0',
    style: {
      width: 'fill-available',
    },
  },
  NavbarButtonSet_ds: {
    padding: '0',
    gap: 'Z',
    flow: 'y',
    childProps: {
      padding: 'Y2',
      round: 'C1',
      isActive: el => el.getWindow('explorer') === el.props.key,
      onClick: (ev, el) => el.call('handleDsNavbarClick'),
    },
    children: [
      {
        key: 'color',
        title: 'Colors',
        Icon: {
          name: 'color outline colored',
        },
      },
      {
        key: 'typography',
        title: 'Typography',
        Icon: {
          name: 'typography outline colored',
        },
        opacity: '.7',
      },
      {
        key: 'spacing',
        title: 'Spacing',
        Icon: {
          name: 'space outline colored',
        },
        opacity: '.7',
      },
      {
        key: 'icons',
        title: 'Icons',
        Icon: {
          name: 'icons outline colored',
        },
      },
      {
        key: 'shape',
        title: 'Shapes',
        Icon: {
          name: 'shape outline colored',
        },
      },
      {
        key: 'media',
        title: 'Responsive',
        Icon: {
          name: 'device mobile half fill',
        },
        opacity: '.7',
      },
      {
        key: 'cases',
        title: 'Cases',
        Icon: {
          name: 'boolean outline',
        },
      },
    ],
    childrenAs: 'props',
  },
  Line_2: {
    margin: 'Y1 0',
    style: {
      width: 'fill-available',
    },
  },
  NavbarButtonSet_meta: {
    padding: '0',
    gap: 'Z',
    flow: 'y',
    Expand: {
      title: 'Expand',
      icon: 'arrowAngleRight',
      onClick: (ev, el) => {
        el.toggleWindow('explorer')
      },
    },
  },
  NavbarTooltip: {
    ignoreChildProps: true,
    ignoreChildExtends: true,
    top: '0',
    left: '110%',
    tooltipPosition: 'right',
    shapeDirection: 'left',
  },
};