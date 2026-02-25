export const ResetEmailForm = {
  flow: 'y',
  gap: 'A',
  flex: '1',
  height: '100%',
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%'
    },
    Title: {},
    Input: {
      width: '100%'
    }
  },
  '@mobileL': {
    justifyContent: 'unset',
    height: 'unset'
  },
  if: (el, s) => !s.token,
  Email: {
    Title: {
      text: 'Email'
    },
    Input: {
      height: 'B2',
      '@mobileL': {
        height: 'unset'
      },
      autocomplete: 'username',
      value: '{{ email }}',
      placeholder: 'e.g. hello@symbo.ls',
      onInput: (ev, el, s) => {
        s.update({
          touched: true,
          email: el.node.value
        })
      }
    },
    Label: {
      show: (el, st) => st.touched === true && !st.email,
      color: 'red',
      text: 'Email field is required'
    }
  },
  ModalFooter: {
    ignoreChildExtend: true,
    display: 'flex',
    flow: 'row',
    width: '100%',
    maxWidth: 'unset',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'Z',
    padding: 'B1 0 0',
    '@mobileL': {
      flow: 'column',
      gap: 'A2',
      childProps: {
        width: '100%'
      }
    },
    CheckButton: {
      theme: 'primary',
      text: 'Reset password',
      type: 'submit',
      Icon: null,
      width: '100%',
      height: 'B2',
      padding: 'Z1 C1 Z1 B1',
      '@mobileL': {
        width: '100%',
        maxWidth: '100%',
        height: 'unset'
      }
    }
  }
}
