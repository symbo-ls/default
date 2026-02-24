export const ResetPasswordsForm = {
  flow: 'y',
  gap: 'B1',
  flex: '1',
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%',
      maxWidth: 'G+B',
    },
    Title: {},
    Input: {
      width: '100%',
    },
  },
  Password: {
    Title: {
      text: 'Type in new password',
    },
    Input: {
      type: 'password',
      autocomplete: 'password',
      placeholder: 'Password',
      value: '{{ password }}',
      height: 'B2',
      '@mobileL': {
        height: 'unset',
      },
      onInput: (ev, el, s) => {
        s.update({
          passwordTouched: true,
          password: el.node.value
        })
      },
    },
    Label_1: {
      show: (el, st) => st.passwordTouched === true && !st.password,
      color: 'red',
      text: 'Password field is required',
    },
  },
  RepeatPassword: {
    Title: {
      text: 'Repeat new password',
    },
    Input: {
      type: 'password',
      height: 'B2',
      '@mobileL': {
        height: 'unset',
      },
      autocomplete: 'password',
      placeholder: 'Password',
      value: '{{ repeatPassword }}',
      onInput: (ev, el, s) => {
        s.update({
          repeatPasswordTouched: true,
          repeatPassword: el.node.value
        })
      },
    },
    Label_2: {
      show: (el, st) => st.repeatPasswordTouched === true && !st.repeatPassword,
      color: 'red',
      text: 'Repeat password field is required',
    },
    Label_3: {
      show: (el, st) =>
        st.passwordTouched === true &&
        st.repeatPasswordTouched === true &&
        st.password !== st.repeatPassword,
      color: 'red',
      text: 'Passwords do not match',
    },
  },
  ModalFooter: {
    display: 'flex',
    flow: 'row',
    width: '100%',
    maxWidth: 'unset',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'Z',
    '@mobileL': {
      flow: 'column',
      gap: 'A2',
      childProps: {
        width: '100%',
      },
    },
    CheckButton: {
      theme: 'primary',
      text: 'Confirm',
      type: 'submit',
      Icon: null,
      width: 'fit-content',
      height: 'B2',
      padding: 'Z1 B1',
      '@mobileL': {
        width: '100%',
        maxWidth: '100%',
        height: 'unset',
      },
    },
    Title: null,
    Input: null,
  },
};