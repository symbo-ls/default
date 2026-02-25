export const FilesSection = {
  FilesSectionTitle: {},
  FilesSectionList: {
    margin: '- -Y'
  },
  extend: 'Flex',
  props: {
    padding: '- - X2',
    flow: 'column',
    gap: 'X2',
    ':hover': {
      '& header > button, & header > a': {
        opacity: 1
      }
    }
  }
}
