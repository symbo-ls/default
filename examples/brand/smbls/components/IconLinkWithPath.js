export const IconLinkWithPath = {
  extends: 'Article',
  gap: 'W',
  padding: '0 0 0 A1',
  IconCaption: {
    extends: [
      'IconCaption',
      'DocsLink',
    ],
    href: '{{ href }}',
    margin: '0 0 0 -A1',
    target: '_blank',
    gap: 'X1',
    Icon: {
      icon: 'github',
    },
    Text: {
      text: '{{ title }}',
      color: 'title',
    },
  },
  P: {
    color: 'paragraph',
    margin: '0',
    text: '{{ description }}',
  },
  DocsLink: {
    text: '{{ href }}',
    href: '{{ href }}',
    target: '_blank',
    color: 'grassgreen .85',
    fontWeight: '400',
  },
};