export const DocsSocialLinks = {
  extends: 'ArticleSmall',
  maxWidth: 'G2',
  padding: '0 E1 0 0',
  H6: {
    text: 'Discussions',
  },
  P: {
    color: 'paragraph',
    margin: '0 0 A',
    text: 'Join our discussion boards at Github and Discord',
  },
  Flex: {
    tag: 'nav',
    childExtends: 'MenuItem',
    display: 'flex',
    gap: 'Z',
    Discord: {
      target: '_blank',
      href: 'https://discord.com/invite/crdFSkapFY',
      icon: 'discord',
    },
    Github: {
      target: '_blank',
      href: 'https://github.com/symbo-ls/',
      icon: 'github',
    },
    X: {
      target: '_blank',
      href: 'https://twitter.com/symbo_ls',
      icon: 'twitter',
    },
  },
};