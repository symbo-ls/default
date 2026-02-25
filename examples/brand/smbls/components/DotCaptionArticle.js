export const DotCaptionArticle = {
  extends: 'Hgroup',
  gap: 'W1',
  H: {
    extends: [
      'Link',
      'DotCaption'
    ],
    tag: 'strong'
  },
  P: {
    padding: '0 0 0 A1'
  }
}
