export const UploadIcon = {
  extends: [
    'Focusable',
  ],
  tag: 'label',
  position: 'relative',
  theme: 'field',
  flow: 'column',
  align: 'center center',
  round: 'A',
  cursor: 'pointer',
  border: '1.6px, dashed, line 0.1',
  padding: 'B B2',
  Input: {
    type: 'file',
    position: 'absolute',
    inset: '0 0 0 0',
    opacity: '0',
    visibility: 'hidden',
  },
  Icon: {
    name: 'upload',
    fontSize: 'B',
    opacity: '.2',
  },
  P: {
    text: ' or click and upload from your computer',
    flexFlow: 'column-reverse',
    flexAlign: 'center center',
    opacity: '.22',
    margin: '0',
    Span: {
      text: 'Drag and drop your font file',
      display: 'block',
    },
  },
};