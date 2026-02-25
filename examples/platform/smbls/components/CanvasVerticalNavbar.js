export const CanvasVerticalNavbar = {
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
      isActive: el => el.call('getFileSidebar') && el.call('getSidebarContent') === el.props.section,
      onClick: (ev, el) => {
        const activeContent = el.props.section
        el.setWindow('explorer', activeContent)
        window.setTimeout(() => {
          el.call('setSidebarContent', activeContent)
        }, 35)
      }
    },
    children: [
      {
        icon: 'content',
        title: 'Artboards',
        section: 'ARTBOARD_TYPES'
      },
      {
        icon: 'fnOutline',
        title: 'Functions',
        section: 'FUNCTION_TYPES'
      },
      {
        icon: 'copywritingOutline',
        title: 'State',
        section: 'STATE_TYPES'
      },
      {
        icon: 'tree',
        title: 'Design System',
        section: 'DESIGN_SYSTEM_TYPES'
      },
      {
        icon: 'folderOutline',
        title: 'Assets',
        section: 'ASSETS_TYPES'
      },
      {
        icon: 'fuse',
        title: 'Integrations',
        section: 'INTEGRATIONS_TYPES'
      },
      {
        icon: 'tutorial outline',
        title: 'Learn',
        section: 'TUTORIALS'
      }
    ],
    childrenAs: 'props'
  },
  Line: {
    margin: 'Y1 0',
    style: {
      width: 'fill-available'
    }
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
      }
    }
  },
  NavbarTooltip: {
    ignoreChildProps: true,
    ignoreChildExtends: true,
    top: '0',
    left: '110%',
    tooltipPosition: 'right',
    shapeDirection: 'left'
  }
}
