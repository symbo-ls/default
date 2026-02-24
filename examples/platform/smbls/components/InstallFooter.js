export const InstallFooter = {
  align: 'center',
  gap: 'X2',
  opacity: '.35',
  Icon: {
    name: 'question mark fill',
  },
  Paragraph: {
    margin: '0',
    childrenAs: 'props',
    children: [
      {
        text: 'Learn more on how to get started at ',
        padding: '0 V1',
      },
      {
        extends: 'DocsLink',
        href: '/docs/intro',
        text: 'Documentations page',
      },
    ],
  },
};