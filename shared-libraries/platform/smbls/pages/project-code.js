export const projectCode = {
  flow: 'x',
  width: '100%',
  height: '100%',
  padding: 'Z2 A1 X',
  align: 'stretch',
  gap: 'A',
  theme: 'modal',
  '& .monaco-editor': {
    style: {
      width: '100%',
    },
  },
  onInit: (el, s) => {
    const baseUrl = `https://${el.getAppKey()}`;
    s.placeholders['sitemap.xml'] = el.call('generateSitemap', baseUrl, el.getData('pages'))
  },
  state: {
    placeholders: {
      'index.html': `<html background="#000">
  <head>
    '\$' '\$'
  </head>
  <body>
    <script defer type="text/javascript">
      '\$';
    </script>
  </body>
</html>`,
      'app.js': `export default {
  props: {
    theme: 'document',
  },
}`,
      'context.js': `export default {
    key: '\$',
    designSystem: '\$',
    state: '\$',
    components: '\$',
    pages: {
      '/component': Component,
      ...'\$',
    },
    snippets: '\$',
    methods: '\$',
    functions: '\$',
    editor: '\$',
    files: '\$',
    dependencies: '\$',
    schema: '\$',
    routerOptions: {
      scrollToTop: true,
    },
    domqlOptions: {
      alowRefReference: true,
    },
  }`,
      'index.js': `export default {
  props: {
    theme: 'document',
  },
}`,
    },
    selected: {},
    selectedKey: '// placeholder',
  },
  IconButton: {
    icon: 'crossmark',
    padding: 'Y2',
    position: 'absolute',
    top: 'X',
    right: 'X',
    color: 'dim',
    onClick: (ev, el, s, ctx) => el.call('closeModal'),
  },
  Overflow: {
    overflow: 'hidden auto',
    flexFlow: 'y',
    gap: 'B2',
    widthRange: 'F2',
    padding: '- Z - -',
    borderWidth: '0 1px 0 0',
    borderStyle: 'solid',
    borderColor: 'line',
    fontSize: 'Z1',
    ProjectCodeSidebar: {},
  },
  Content: {
    extends: 'Flex',
    flex: 1,
    childExtends: 'Flex',
    childProps: {
      flow: 'y',
      flex: 1,
      height: '100%',
      padding: '- Z2',
      Header: {
        order: '-1',
        padding: '- Z Z X',
        borderBottom: '1px solid line',
        color: 'dim',
        fontSize: 'Y',
        textTransform: 'uppercase',
      },
      CodePreviewWidget: {
        flex: 1,
        widthRange: 'auto',
        maxWidth: 'none',
        width: '99.9%',
        round: 'Z1',
        padding: 'Y X2 X2 -',
        theme: 'field-static',
        overflow: 'hidden',
        Monaco: {
          readOnly: (el) => el.isReadOnly(),
          foldLevel: false,
          opacity: 1,
          fileTab: {
            type: 'javascript',
            fileTabKey: 'function',
          },
        },
      },
    },
    ProjectCodeData: {},
    ProjectCodeSchema: {
      hide: (el, s) => {
        const found = el.call('getWhichKey', s.type)
        return !found.includes('DATA_TYPES')
      },
    },
  },
};