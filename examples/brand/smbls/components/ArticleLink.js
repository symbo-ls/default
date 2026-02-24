export const ArticleLink = {
  extends: [
    'Link',
    'ClickableButton',
  ],
  padding: 'Z1',
  round: 'Z2',
  flexFlow: 'column',
  flexAlign: 'flex-start flex-start',
  borderWidth: '1px',
  '@dark': {
    theme: null,
    color: 'gray11',
    border: 'gray2, solid',
  },
  '@light': {
    theme: null,
    color: 'gray11',
    border: 'gray11, solid',
  },
  Caption: {
    fontSize: 'Y',
    color: 'gray7',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  Title: {
    margin: '0',
    fontWeight: '500',
    '@dark': {
      color: 'gray11',
    },
    '@light': {
      color: 'gray3',
    },
  },
};