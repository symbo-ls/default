export const projectAccountCopy = {
  extends: [
    'Page',
  ],
  gap: 'B2',
  flow: 'y',
  SectionHeader: {
    title: (el) => 'Settings for ' + el.getRootState().projectName,
    p: 'Some settings will be stored only in this device.',
  },
  Flex: {
    props: {
      gap: 'D1',
      align: 'flex-start',
    },
    ProjectAvatar: {},
    CreatingProjectForm: {},
  },
  Group: {
    if: (el) => el.getRootState().userId === 'usb148d6dd' || el.getRootState().userId === 'usce70482d',
    gap: 'B1',
    Line: {
      order: '-1',
      width: '100%',
    },
    Title: {
      text: 'Admin Tools',
    },
    AccountFieldTemplate: {
      InputField: {
        Title: {
          text: 'Package',
        },
        Input: {
          placeholder: 'Package',
          value: '{{ package }}',
          required: true,
          onInput: (ev, el, s) => s.update({
            package: parseInt(el.node.value)
          }),
        },
      },
    },
  },
  Line: {
    width: '100%',
  },
  UsersTable: {
    if: (el) => el.getRootState().package > 1,
  },
  ContinueButton: {
    extends: [
      'Button',
      'ContinueButton',
    ],
    text: 'Update',
    padding: 'Z1 C1',
    margin: 'D1 - - -',
    width: 'fit-content',
  },
};