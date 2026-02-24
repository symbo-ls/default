export const InsertPanelLibrary = {
  extend: 'Flex',
  props: {
    overflow: 'hidden auto',
    flow: 'y',
    gap: 'Z2',
    fontSize: 'Z1',
    width: '100%',
    overflowY: 'auto',
    onEventComplete: async (el, s) => {
      const elData = el.data

      s.replace({
        loading: true,
        CACHE: {}
      }, {
        preventListeners: true
      })

      let data
      if (elData[s.activeLibrary]) {
        data = elData[s.activeLibrary]
      } else {
        data = await el.sdk.getProjectByKey(s.activeLibrary)
        elData[s.activeLibrary] = data
      }

      const exclList = ['members', 'usedByProjects', 'environments', 'project', 'versions']
      const exclOpts = {
        exclude: ['canvas', 'schema', ...exclList]
      }
      const dataExclOpts = {
        exclude: exclList
      }
      const projData = el.call('deepClone', el.getData(), exclOpts)

      data = el.call('deepClone', data, dataExclOpts)

      const defLibrary = 'default.symbo.ls'
      if (s.activeLibrary !== defLibrary) {
        const defData = el.call('deepClone', elData[defLibrary], exclOpts)
        data = el.call('deepMerge', data, defData)
      }

      data = el.call('deepDestringifyFunctions', data)

      // Usage
      const componentsCache = Object.values(data.components)
      el.getCanvasScope().libraryComponentsCache = componentsCache

      window.setTimeout(() => {
        s.replace({
          loading: false,
          CACHE: el.call('deepMerge', projData, data)
        }, {
          preventListeners: true
        })
      }, 350)
    },
  },
  state: {
    CACHE: {},
    activeLibrary: 'default.symbo.ls',
  },
  data: {},
  LibraryNavbar: {},
  Nav: {
    extends: 'Flex',
    gap: 'A',
    childExtends: 'Button',
    padding: 'Z',
    overflow: 'auto hidden',
    minHeight: 'D',
    margin: '-Z2 - -',
    onRender: el => el.update(),
    childProps: {
      text: '{{ title }}',
      padding: 'Y Z',
      isActive: (el, s) => s.parent.activeLibrary === s.projectPath?.split('/')[1] + '.symbo.ls',
      '.isActive': {
        theme: 'primary',
      },
      '!isActive': {
        theme: 'tertiary',
      },
      onClick: (ev, el, s) => {
        const activeLibrary = s.projectPath.split('/')[1] + '.symbo.ls'
        s.parent.update({
          activeLibrary
        })
      },
    },
    childrenAs: 'state',
    children: (el) => el.call('getSnippet', 'TEMPLATES_DATA', 'array'),
    align: 'start',
  },
  P: {
    flexAlign: 'center',
    textAlign: 'center',
    margin: '-A auto C',
    color: 'placeholder',
    maxWidth: 'F1',
    flexFlow: 'y',
    Lottie: {
      src: 'swipe-right.json',
      fontSize: 'B1',
      margin: '- - -X2',
    },
    Text: {
      text: 'Drag and drop these components to your canvas',
    },
  },
  LoadingGif: {
    hide: (el, s) => !s.loading,
  },
  LibraryRows: {
    padding: 'Z',
    childrenAs: 'state',
    children: (el, s) => {
      if (!s.CACHE.canvas) return

      const canvasPages = s.CACHE.canvas.pages
      const data = s.CACHE.schema.components

      function unifyComponents(obj) {
        const allComponents = [];

        // Iterate through each key in the object
        for (const key in obj) {
          if (obj[key].components && Array.isArray(obj[key].components)) {
            allComponents.push(...obj[key].components);
          }
        }

        return allComponents;
      }

      const allDefined = unifyComponents(canvasPages)
      const filteredFromOtherPages = Object.keys(data).filter(item => !allDefined.includes(item))

      const arr = [{
        title: 'Default',
        components: filteredFromOtherPages
      }]

      const pages = s.CACHE.canvas.pages
      const exclPages = ['Archive', 'Working']
      const pagesArr = Object.keys(pages).filter(item => !exclPages.includes(item))
      return arr.concat(pagesArr.map(v => pages[v]))
    },
    childProps: {
      CaptionTitle: {
        Text: {
          text: '{{ title }}',
        },
      },
      Grid: {
        padding: '0',
        gap: 'A',
        margin: 'Z2 -Y -',
        templateColumns: 'repeat(4, 1fr)',
        childExtends: 'ComponentThumbnailIframe',
        childrenAs: 'state',
        children: (el, s) => {
          // const components = el.call('getProjectSchema', s.data)
          const components = s.components.map(v => {
            const data = s.parent.CACHE
            const schemaItem = data.schema.components[v]
            const dataItem = data.components[v]
            return schemaItem && dataItem && {
              ...schemaItem,
              value: dataItem
            }
          })
          return components.filter(v => v)
        },
      },
      Line: {
        margin: 'B1 -Z1',
      },
    },
    hide: (el, s) => s.loading,
  },
};