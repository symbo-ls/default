export const compileMarkdown = {
  align: 'stretch start',
  padding: 'V1',
  flex: 1,
  gap: 'W',
  CodePreviewWidget: {
    props: (el, s) => ({
      flex: 1,
      widthRange: null,
      theme: 'field-static',
      round: 'X2',
      padding: 'X2 X2 X2 -',
      minHeight: 'G1',
      maxHeight: '100%',
      Monaco: {
        foldLevel: false,
        opacity: 1,
        fileTab: {
          code: s.text,
          type: 'javascript',
          filename: 'props.js',
          fileTabKey: 'props'
        },
        onCodeEditCallback: async editor => {
          const beautify = await import('js-beautify')
          const text = editor.getValue()
          const compiled = await convertDomqlToReact(text)

          const code = await beautify.js(compiled, {
            indent_size: 2,
            space_in_empty_paren: true,
            preserve_newlines: false,
            brace_style: 'collapse',
            break_chained_methods: false
          })

          s.replace({
            code: formatImports(code)
          })
        }
      }
    })
  },
  Code: {
    flex: 1,
    height: '100%',
    value: '{{ code }}',
    Title: null,
    CodePreview: {
      round: 'X2',
      height: '100%',
      margin: '0'
    },
    Buttons: {
      padding: '0 Y2'
    }
  }
}
