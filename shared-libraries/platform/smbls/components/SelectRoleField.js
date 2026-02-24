export const SelectRoleField = {
  extends: 'SelectField',
  Select: {
    name: 'role',
    id: 'role',
    childrenAs: 'props',
    children: () => [{
        value: 'guest',
        text: 'Guest'
      },
      {
        value: 'editor',
        text: 'Editor'
      },
      {
        value: 'admin',
        text: 'Admin'
      },
    ],
    childProps: {
      tag: 'option',
      attr: {
        selected: (el, s) => {
          const userRole = s.role || -1
          const optionValue = el.props.value
          return userRole === optionValue
        },
      },
    },
  },
};