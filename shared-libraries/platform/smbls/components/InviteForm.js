export const InviteForm = {
  extend: 'Flex',
  props: {
    flow: 'column',
    gap: 'B1',
    flex: '1',
    childProps: {
      Input: {
        margin: '- -Z',
      },
    },
  },
  'InputField.name': {
    Title: {
      text: 'Full name',
    },
    Input: {
      value: '{{ name }}',
      required: true,
      placeholder: 'Mike',
      onInput: (ev, el, s) => {
          const [, key] = el.parent.key.split('.')
          s.update({
            [key]: el.node.value
          })
        },
    },
  },
  'InputField.email': {
    Title: {
      text: 'Email of member',
    },
    Input: {
      value: '{{ email }}',
      required: true,
      placeholder: 'mike@me.com',
      pattern: '^[^s@]+@[^s@]+.[^s@]{2,}$',
      type: 'email',
      onInput: (ev, el, s) => {
          const [, key] = el.parent.key.split('.')
          s.update({
            [key]: el.node.value
          })
        },
    },
  },
  Flex: {
    extend: 'GroupField',
    Title: {
      text: 'Role of member',
    },
    'SelectRoleField.role': {
      margin: '- -Z',
      Select: {
        value: '{{ role }}',
        required: true,
        onChange: (ev, el, s) => {
            const [, key] = el.parent.key.split('.')
            s.update({
              [key]: el.node.value
            })
          },
        onRender: (el, s) => {
            const [, key] = el.parent.key.split('.')
            console.error(111, s)
            s.update({
              [key]: 'guest'
            })
          },
      },
    },
    Input: {
      display: 'none',
    },
  },
};