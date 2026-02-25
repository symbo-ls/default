export const ProjectCodeData = {
  Header: {
    text: (el, s) => (s.key || s.type || '') + ' data'
  },
  CodePreviewWidget: {
    Monaco: {
      fileTab: {
        code: (el, s) => {
          const {
            type,
            key
          } = s
          if (!type) return '// select category or file'
          const typeFactory = el.getData(type)
          const code = el.stringifyCode(key ? typeFactory[key] : typeFactory)
          return code
        },
        filename: 'data.js',
        fileTabKey: 'data'
      },
      onCodeEditCallback: (editor, _, el, s) => {
        const code = editor.getValue()
        const value = el.call('evalStringCodeUnsafe', code, {
          onError: (err) => {
            s.update({
              err
            })
          }
        })
      }
    }
  }
}
