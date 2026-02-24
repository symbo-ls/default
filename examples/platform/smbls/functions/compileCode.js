export const compileCode = async function compileCode(source, method) {
  let dist = source

  try {
    if (method === 'markdown-to-symbols') {
      const {
        MarkdownToDomQLCompiler
      } = this.context.functions
      const compiler = new MarkdownToDomQLCompiler()
      dist = compiler.compile(source, {
        componentName: 'MarkdownComponent'
      })
    } else if (method === 'symbols-to-react') {
      const mod = '@symbo.ls/dompiler'
      const { convertDomqlToReact } = await import(mod)
      const text = this.call('decodeNewlines', source).replace(
        'export default ',
        'export const Component = '
      )
      const compiled = await convertDomqlToReact(text)
      dist = await this.call('prettifyCode', compiled, {
        indent_size: 2,
        space_in_empty_paren: true,
        preserve_newlines: false,
        brace_style: 'collapse',
        break_chained_methods: false
      })
      dist = this.call('formatImports', dist)
    } else if (method === 'editorjs-to-symbols') {
      dist = '// EditorJS to Symbols compilation not yet implemented\n' + source
    } else if (method === 'tailwind-to-symbols') {
      dist = '// Tailwind to Symbols compilation not yet implemented\n' + source
    } else if (method === 'symbols-to-tailwind') {
      dist = '// Symbols to Tailwind compilation not yet implemented\n' + source
    } else {
      dist = source
    }
  } catch (error) {
    console.error('Compilation error:', error)
    dist = `// Compilation Error:\n// ${error.message}\n\n${source}`
  }

  return dist
}