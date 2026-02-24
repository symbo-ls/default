export const ZoomInNavbar = {
  align: 'center',
  onFrame: (el, s) => {
    const data = el.getCanvasScope()
    const {
      positions
    } = data
    const scale = positions?.scale
    el.variables({
        scale
      })
      .changed(_ => {
        el.Box.node.innerText = scale ? parseInt(scale * 100) + '%' : '100%'
      })
  },
  NavbarButton_out: {
    isActive: (el, s) => el.getRootState().zoomLevel > 1,
    title: 'Zoom out',
    icon: 'sf zoom out',
    ':not(:hover)': {
      theme: 'transparent',
    },
    onClick: (ev, el, s) => {
      const data = el.getCanvasScope()
      const frameWindow = el.getCanvasFrameWindow()
      const {
        x,
        y
      } = el.getCanvasPositions()
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      data.panzoomInstance.smoothZoom(x + innerWidth / 2, y + innerHeight / 2, 0.75)
    },
  },
  Box: {
    width: '7ch',
    textAlign: 'center',
    padding: '- Z',
    fontSize: 'Z2',
    color: 'paragraph',
    text: '100%',
    userSelect: 'none',
    onDblclick: (ev, el, s, ctx) => {
      const data = el.getCanvasScope()
      const frameWindow = el.getCanvasFrameWindow()
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      const {
        x,
        y
      } = el.getCanvasPositions()
      el.call('clearFollowing')
      data.panzoomInstance.smoothZoomAbs(
        x + innerWidth / 2,
        y + innerHeight / 2,
        1
      )
    },
  },
  NavbarButton_in: {
    isActive: (el, s) => el.getRootState().zoomLevel > 1,
    title: 'Zoom in',
    icon: 'sf zoom in',
    ':not(:hover)': {
      theme: 'transparent',
    },
    onClick: (ev, el, s) => {
      const data = el.getCanvasScope()
      const Canvas = el.getCanvas()
      const frameWindow = Canvas.Iframe.node.contentWindow
      const positions = el.getCanvasPositions()
      const {
        x,
        y
      } = positions
      const {
        innerWidth,
        innerHeight
      } = frameWindow
      data.panzoomInstance.smoothZoom(x + innerWidth / 2, y + innerHeight / 2, 1.25)
    },
  },
  DropdownArrow: {
    margin: '- - - X2',
  },
};