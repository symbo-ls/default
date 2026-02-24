export const UploadField = {
  extends: 'GroupField',
  Title: {
    padding: '- - - X2',
    text: 'Project icon',
  },
  UploadIcon: {
    position: 'relative',
    padding: 'B1 B',
    gap: 'X2',
    boxSize: 'fit-content',
    border: 'none',
    theme: 'field-placeholder',
    Icon: {
      name: 'upload',
      fontSize: 'C1',
      opacity: '1',
    },
    P: {
      text: 'Drag and drop or click',
      maxWidth: 'E',
      textAlign: 'center',
      opacity: '1',
      fontSize: 'Z1',
      Span: null,
    },
    Input: {
      type: 'file',
      position: 'absolute',
      inset: '0 0 0 0',
      opacity: '0',
      visibility: 'hidden',
    },
  },
};