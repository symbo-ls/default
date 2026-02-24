export const DataSourcesInInsert = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
  },
  CaptionTitle: {
    Text: {
      text: 'Data sources',
    },
  },
  Flex: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'IntegrationsItem',
    childrenAs: 'state',
    childProps: {
      Button: {
        text: 'Add',
      },
    },
    children: [
      {
        icon: 'plus',
        title: 'Custom',
        descr: 'Add custom endpoint as data source',
        onConnect: (el, s) => {

        },
        onAdd: (el, s) => {
          el.setWindow('docs', '/fetch')
        },
      },
    ],
  },
};