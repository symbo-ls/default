export const MembersInInvite = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
  },
  CaptionTitle: {
    Text: {
      text: 'Members',
    },
  },
  Flex: {
    flow: 'y',
    onInit: async el => {
        const members = await el.call('getProjectMembers')
        el.props.membersList = members.map(v => ({
          ...v.user,
          role: v.role
        }))
      },
    children: el => el.props.membersList,
    childrenAs: 'state',
    childExtends: 'Flex',
    childProps: {
      align: 'start',
      padding: 'Z1 0',
      gap: 'Z',
      Avatar: {
        props: (el, s) => ({
            boxSize: 'B',
            key: s.name
          }),
      },
      P: {
        margin: '0',
        flex: 1,
        hide: (el, s) => !s.username,
        text: '{{ username }}',
      },
      Select: {
        padding: 'X Y2',
        margin: '-W -Y2 - auto',
        background: 'none',
        color: 'currentColor',
        width: 'D2',
        onChange: (ev, el, s, ctx) => {
            const value = ev.target.value
            if (value) {
              s.update({
                action: value
              })
            }
          },
        childrenAs: 'props',
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
        children: [
          {
            value: 'guest',
            text: 'Guest',
          },
          {
            value: 'editor',
            text: 'Editor',
          },
          {
            value: 'admin',
            text: 'Admin',
          },
        ],
        if: (el, s) => el.isAdmin() && s.role !== 'owner',
      },
    },
  },
};