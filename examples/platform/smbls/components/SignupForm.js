export const SignupForm = {
  flow: 'column',
  gap: 'A',
  flex: '1',
  '@mobileL': {
    minWidth: '100%',
  },
  childExtends: {
    extend: 'InputField',
    props: {
      width: '100%',
      '@mobileL': {
        maxWidth: '100%',
      },
    },
    Title: {},
    Input: {
      width: '100%',
      onInput: (ev, el, s) => {
        s.update({
          [el.parent.key.toLowerCase()]: el.node.value
        })
      },
    },
  },
  Email: {
    Title: {
      text: 'Email',
      padding: '- - 0',
    },
    Input: (_, s) => ({
      height: 'B2',
      '@mobileL': {
        height: 'unset'
      },
      autofocus: true,
      autocomplete: 'email',
      required: true,
      value: s.email ? s.email : s.value,
      placeholder: 'e.g. hello@symbo.ls',
      disabled: s.hasToken
    }),
  },
  Name: {
    Title: {
      text: 'Full name',
      padding: '- - 0',
    },
    Input: {
      height: 'B2',
      '@mobileL': {
        height: 'unset',
      },
      autocomplete: '{{ value }}',
      required: true,
      value: '{{ value }}',
      placeholder: 'e.g. Mike',
      type: 'text',
    },
  },
  Password: {
    Title: {
      text: 'Password',
      padding: '- - 0',
    },
    Input: {
      height: 'B2',
      '@mobileL': {
        height: 'unset',
      },
      autocomplete: 'current-password',
      value: '{{ value }}',
      placeholder: '••••••••',
      required: true,
      type: 'password',
      onInput: (ev, el, s) => {
        s.password = el.node.value
        s.update({
          password: el.node.value
        })
      },
    },
  },
  ModalFooter: {
    padding: 'B1 - - -',
    CheckButton: {
      theme: 'primary',
      text: 'Sign up',
      height: 'B2',
      '@mobileL': {
        height: 'unset',
      },
      type: 'submit',
      icon: null,
    },
    Title: null,
    Input: null,
  },
};