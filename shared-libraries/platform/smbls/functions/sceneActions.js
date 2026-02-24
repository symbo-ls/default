export const sceneActions = function sceneActions() {
    return {
      update: async (el, s, ctx) => {
        const {
          demoFrameElement
        } = el.data
        if (!demoFrameElement) return

        if (s.variant) s.props.variant = s.variant

        const demoComponent = el.call('deepClone', s.value)

        const frameProps = {
          ...el.parent.props.frameProps,
          ...s.props,
          style: {
            transform: `scale(${parseFloat(s.zoomLevel, 2)})`
          }
        }

        if (s.props?.base) frameProps.fontSize = s.props.base + 'px'
        if (s.props?.ratio) frameProps['--spacing-ratio'] = s.props.ratio

        demoFrameElement.setProps(frameProps)
        demoFrameElement.state.set(s.state)
        demoFrameElement.demoComponent.update(demoComponent)
      },
      recreate: async (el, s, ctx) => {
        if (el.data.demoFrameElement) {
          el.data.demoFrameElement.node.remove()
          el.data.demoFrameElement.remove()
          delete el.data.demoFrameElement
        }
        await el.props.onRenderScene(el, s, ctx)
      }
    }
  }