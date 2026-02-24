export const DocsLink = {
  extends: 'Link',
  tag: 'a',
  fontWeight: 500,
  color: 'title',
  style: {
    whiteSpace: 'nowrap',
  },
  ':hover': {
    textDecoration: 'underline',
  },
  onClick: 'navigateDocs',
};