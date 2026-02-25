export const ProjectInfo = {
  extends: 'Group',
  gap: 'Z',
  tag: 'section',
  Title: {
    text: 'Connected',
    width: '100%'
  },
  ItemPreview: {
    flex: 1,
    templateColumns: 'repeat(12, 1fr)',
    autoFlow: 'dense',
    autoColumns: 'auto',
    autoRows: 'auto',
    justifyItems: 'stretch',
    position: 'relative',
    transition: 'C defaultBezier max-height'
  }
}
