export const DocsSupportLinks = {
  maxWidth: 'G2',
  margin: '- - - auto',
  H6: {
    tag: 'h6',
    text: 'Support',
  },
  P: {
    margin: '0',
    color: 'paragraph',
    childProps: {
      display: 'inline-block',
      margin: '0 X2 0 0',
    },
    children: [
      'Feel free to reach out to us at ',
      {
        DocsLink: {
          fontWeight: 400,
          text: 'Discord,',
          href: 'https://discord.com/invite/crdFSkapFY',
        },
      },
      {
        DocsLink: {
          fontWeight: 400,
          text: 'Twitter,',
          href: 'https://twitter.com/symbo_ls',
        },
      },
      ' or ',
      {
        DocsLink: {
          fontWeight: 400,
          text: 'hello@symbo.ls',
          href: 'mailto:hello@symbo.ls',
        },
      },
    ],
  },
};