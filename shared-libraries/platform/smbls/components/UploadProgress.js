export const UploadProgress = {
  theme: 'field',
  padding: 'Z1 Z1+V Z1 Z1',
  round: 'A2',
  position: 'relative',
  align: 'center flex-start',
  gap: 'Z',
  '@mobileS': {
    fontSize: 'Z2',
  },
  Icon: {
    theme: 'bordered',
    icon: 'copy',
    boxSizing: 'content-box',
    padding: 'Y2',
    fontSize: 'C',
    round: 'Z',
  },
  XBtn: {
    position: 'absolute',
    top: 'Y',
    right: 'Y1',
    padding: 'Y',
    $isSafari: {
      top: '0',
      right: 'Y',
    },
  },
  Flex: {
    flow: 'y',
    gap: 'X',
    flex: '1',
    H6: {
      text: 'Image.jpg',
      alignSelf: 'flex-start',
      fontWeight: '700',
    },
    ProgressLineValue: {
      ProgressLine: {},
      UnitValue: {},
    },
  },
};