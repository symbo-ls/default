export const MembersNavbar = {
  extend: 'Flex',
  props: {
    align: 'center',
  },
  ActiveCanvasUsers: {},
  Invite: {
    borderColor: 'line',
    borderWidth: '1px',
    borderStyle: 'solid',
    extends: [
      'IconButton',
      'DropdownParentFocus',
    ],
    margin: '- - - -Z',
    round: 'C1',
    Icon: {
      fontSize: 'Z',
    },
    padding: 'Y+U',
    title: 'Invite Members',
    icon: 'plus',
    theme: 'secondary',
    Dropdown: {
      left: '-F1',
      onClick: () => {},
      InviteDropdown: {},
    },
  },
};