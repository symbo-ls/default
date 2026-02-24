export const compile = {
  flow: 'y',
  gap: 'Y1',
  round: 'A',
  width: '100%',
  padding: 'Y1',
  height: '100%',
  style: {
    padding: '0 !important',
  },
  ':hover .close': {
    opacity: 1,
    visibility: 'visible',
  },
  onInit: async (el, s) => {
    const dist = await el.call('compileCode', s.source, s.compilingMethod)
    s.update({
      dist
    })
  },
  onBeforeUpdate: async (changes, el, s) => {
    const {
      source,
      compilingMethod
    } = changes

    if (source !== undefined || compilingMethod !== undefined) {
      const newSource = source !== undefined ? source : s.source
      const newMethod =
        compilingMethod !== undefined ? compilingMethod : s.compilingMethod

      const dist = await el.call('compileCode', newSource, newMethod)
      s.dist = dist
    }
  },
  state: {
    source: `
# Markdown to Symbols Compiler

Welcome to the **Markdown to Symbols** compiler! This tool converts markdown syntax into Symbols (DOMQL) format.

## Headings

### This is H3
#### This is H4
##### This is H5
###### This is H6

`,
    dist: '',
    compilingMethod: 'markdown-to-symbols',
  },
  Flex_header: {
    align: 'end space-between',
    padding: '0 A X',
    fontSize: 'Z1',
    Strong: {
      text: 'Symbols compiler tools',
    },
    P: {
      margin: '0',
      text: 'Choose source and target to use compiler tools',
    },
    Toolbar: {
      flexFlow: 'y',
      flexAlign: 'end',
      gap: 'X2',
      align: 'center start',
      Button_dropdown: {
        extends: [
          'Button',
          'DropdownParentFocus',
        ],
        theme: 'secondary',
        gap: 'Z',
        flow: 'row-reverse',
        padding: 'Y2 Z2',
        icon: 'arrow angle down',
        text: (_, s) => {
          const methods = {
            'markdown-to-symbols': 'Markdown → Symbols',
            'editorjs-to-symbols': 'EditorJS → Symbols',
            'tailwind-to-symbols': 'Tailwind → Symbols',
            'symbols-to-tailwind': 'Symbols → Tailwind',
            'symbols-to-react': 'Symbols → React'
          }
          return methods[s.compilingMethod] || 'Select method'
        },
        Dropdown: {
          left: '0',
          align: 'start',
          top: '110%',
          onChoose: (_ev, _el, s, _ctx, calleeElement) => {
            const method = calleeElement.state.value
            s.update({
              compilingMethod: method
            })
          },
          ListInDropdown: {
            childProps: {
              extends: 'Button',
              textAlign: 'start',
              padding: 'Z1 A',
              color: 'inactive',
              round: 'C1',
              theme: null,
              fontWeight: '400',
              align: 'center start',
              ':hover': {
                theme: 'field',
              },
              '.isActive': {
                theme: 'field',
              },
              isActive: (_, s) => {
                return s.parent.parent.compilingMethod === s.value
              },
            },
            childrenAs: 'state',
            children: [
              {
                value: 'markdown-to-symbols',
                text: 'Markdown → Symbols',
              },
              {
                value: 'editorjs-to-symbols',
                text: 'EditorJS → Symbols',
              },
              {
                value: 'tailwind-to-symbols',
                text: 'Tailwind → Symbols',
              },
              {
                value: 'symbols-to-tailwind',
                text: 'Symbols → Tailwind',
              },
              {
                value: 'symbols-to-react',
                text: 'Symbols → React',
              },
            ],
          },
        },
      },
    },
  },
  Flex: {
    align: 'stretch start',
    padding: 'V1',
    flex: 1,
    gap: 'W',
    flexFlow: 'row',
    height: '100%',
    CodePreviewWidget_from: {
      flex: 1,
      theme: 'field-static',
      round: 'X2',
      padding: 'X2 X2 X2 -',
      minHeight: 'G1',
      maxHeight: '100%',
      widthRange: 'auto',
      overflow: 'hidden',
      Header: {
        order: '-1',
        padding: '- Z Z',
        borderBottom: '1px solid line',
        color: 'dim',
        fontSize: 'Y',
        textTransform: 'uppercase',
        text: 'Source Code',
      },
      Monaco: {
        foldLevel: false,
        opacity: 1,
        beautify: false,
        formatOnPaste: false,
        formatOnType: false,
        fileTab: {
          code: (_, s) => s.source || '',
          type: (_, s) => {
            if (s.compilingMethod === 'markdown-to-symbols') return 'markdown'
            if (s.compilingMethod === 'editorjs-to-symbols') return 'json'
            if (s.compilingMethod === 'tailwind-to-symbols') return 'css'
            return 'javascript'
          },
          filename: (_, s) => {
            if (s.compilingMethod === 'markdown-to-symbols') return 'source.md'
            if (s.compilingMethod === 'editorjs-to-symbols')
              return 'source.json'
            if (s.compilingMethod === 'tailwind-to-symbols') return 'source.css'
            if (s.compilingMethod === 'symbols-to-tailwind') return 'source.js'
            return 'source.js'
          },
        },
        onCodeEditCallback: async (editor, _2, _el, s) => {
          const source = editor.getValue()

          let parentState = s
          while (parentState.parent && !parentState.compilingMethod) {
            parentState = parentState.parent
          }

          if (source === parentState.source) return

          const dist = await el.call(
            'compileCode',
            source,
            parentState.compilingMethod
          )
          parentState.update({
            source,
            dist
          }, {
            forceMonacoUpdate: true,
            preventUpdate: ['CodePreviewWidget_from']
          })
        },
      },
    },
    CodePreviewWidget_to: {
      flex: 1,
      theme: 'field-static',
      round: 'X2',
      padding: 'X2 X2 X2 -',
      minHeight: 'G1',
      maxHeight: '100%',
      widthRange: 'auto',
      overflow: 'hidden',
      Header: {
        order: '-1',
        padding: '- Z Z',
        borderBottom: '1px solid line',
        color: 'dim',
        fontSize: 'Y',
        textTransform: 'uppercase',
        text: 'Target Code',
      },
      Monaco: {
        foldLevel: false,
        opacity: 1,
        readOnly: true,
        fileTab: {
          code: (_, s) => s.dist || '// Compiling...',
          type: 'javascript',
          filename: 'output.js',
        },
        onCodeEditCallback: async () => {},
      },
    },
    PreviewContainer: {
      if: (_, s) => s.compilingMethod.endsWith('-to-symbols'),
      flex: 1,
      padding: 'X2',
      theme: 'field-static',
      round: 'X2',
      overflow: 'auto',
      minHeight: 'G1',
      flexFlow: 'column',
      Header: {
        padding: '- Z Z',
        borderBottom: '1px solid line',
        color: 'dim',
        fontSize: 'Y',
        textTransform: 'uppercase',
        text: 'Preview',
      },
      Content: {
        padding: 'A B',
        overflow: 'auto',
        flex: 1,
        flexFlow: 'column',
        gap: '0',
        children: (_, s) => {
          if (!s.dist) return [{
            text: 'Compiling...'
          }]

          try {
            let code = s.dist.replace(/^export\s+const\s+\w+\s*=\s*/, '').trim()
            if (code.endsWith(';')) code = code.slice(0, -1)
            const result = eval(`(${code})`)

            const {
              props,
              __order,
              ...content
            } = result

            if (__order && __order.length > 0) {
              return __order.map((key) => content[key])
            }

            return Object.values(content)
          } catch (error) {
            console.error('[Preview] Eval error:', error)
            return [{
              P: {
                text: `Preview Error: ${error.message}`,
                color: 'red'
              }
            }]
          }
        },
      },
    },
  },
};