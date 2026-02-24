export const Lottie = {
  props: {
    src: 'resize.json',
    boxSize: '3.2em',
    onRender: async (el, s) => {
        const lottie = await import('lottie-web')
        const Lottie = lottie.default || lottie

        let src = el.call('exec', el.props.src, el)
        if (!src) return
        if (el.call('isString', src) && src.includes('{{')) {
          src = el.call('replaceLiteralsWithObjectFields', src)
        }

        const url = `https://assets.symbo.ls/lottie/${src}`
        Lottie.loadAnimation({
          container: el.node,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: url,
        })
      },
  },
};