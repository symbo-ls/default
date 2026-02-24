export const setNavbarTooltipPosition = function setNavbarTooltipPosition(options = {}) {
  const TooltipElement = this.lookup('NavbarTooltip')
  if (!TooltipElement) {
    return
  }

  // eslint-disable-next-line no-useless-assignment
  let transform = null
  const tooltipRect = TooltipElement.parent.node.getBoundingClientRect()
  const elementRect = this.node.getBoundingClientRect()

  const getOffset = (rect, subtract) => rect - subtract

  const tooltipPosition = TooltipElement.props.tooltipPosition || 'bottom'
  if (tooltipPosition === 'bottom') {
    const x = getOffset(
      elementRect.left + elementRect.width / 2,
      tooltipRect.left
    )
    const y = getOffset(elementRect.bottom, tooltipRect.top)
    transform = `translate3d(calc(${x}px - 50%), calc(${y}px + 7.5%), 0)`
  } else if (tooltipPosition === 'right') {
    const x = getOffset(elementRect.left, tooltipRect.left)
    const y = getOffset(
      elementRect.top + elementRect.height / 2,
      tooltipRect.top
    )
    transform = `translate3d(calc(${x}px + 7.5%), calc(${y}px - 50%), 0)`
  } else if (tooltipPosition === 'left') {
    const x = getOffset(elementRect.left, tooltipRect.left)
    const y = getOffset(
      elementRect.top + elementRect.height / 2,
      tooltipRect.top
    )
    transform = `translate3d(calc(${x}px - 7.5%), ${y}px, 0)`
  } else {
    // top position
    const x = getOffset(
      elementRect.left + elementRect.width / 2,
      tooltipRect.left
    )
    const y = getOffset(elementRect.top, tooltipRect.top)
    transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 7.5%), 0)`
  }

  const Tooltip = this.lookup('NavbarTooltip')
  if (transform && this.props.title && Tooltip) {
    Tooltip.setProps({
      opacity: options.visible || '1',
      visibility: options.visible || 'visible',
      description: this.call('exec', this.props.title),
      transform
    })
  }
}