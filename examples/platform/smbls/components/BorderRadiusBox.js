export const BorderRadiusBox = {
  props: (_, s) => ({
    borderWidth: '.5px',
    borderRadius: `${s.borderStartStartRadius} ${s.borderStartEndRadius} ${s.borderEndEndRadius} ${s.borderEndStartRadius}`,
    borderColor: 'yellow .25',
    borderStyle: 'solid',
    height: '100%',
    onClick: (ev, el, s) => {
      const getCornerInputs = () => {
        const inputs = [...document.querySelectorAll('input[key="NumberValue"]')]
        return inputs.map(input => {
          const rect = input.getBoundingClientRect()
          return {
            el: input,
            value: input.value,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          }
        })
      }

      const corners = getCornerInputs()

      let closest = null
      let minDist = Infinity

      for (const c of corners) {
        const dx = ev.clientX - c.x
        const dy = ev.clientY - c.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < minDist) {
          minDist = dist
          closest = c
        }
      }

      if (closest) {
        closest.el.select()
      }
    }
  }),
  extend: 'Flex'
}
