export const InstallDomain = {
  flow: 'y',
  gap: 'C1',
  P: {
    color: 'gray8',
    margin: '0',
    Text: {
      text: '1. Go to your DNS manager for '
    },
    LabeledHighlight: {
      text: (el) => el.getRootState().domain
    }
  },
  ARecord: {
    P: {
      color: 'gray8',
      margin: '0 - Z2',
      text: '2. Create A record:'
    },
    Terminal: {
      width: 'fit-content',
      Icon: {},
      value: '1.1.1.1'
    }
  },
  TxtRecord: {
    P: {
      color: 'gray8',
      margin: '0 - Z2',
      text: '3. Create TXT record:'
    },
    Code: {
      margin: 'Z1 0 0',
      Title: null,
      value: '// txt_record',
      Buttons: {
        Link: null,
        FrameworkSwitcher: null
      }
    }
  }
}
