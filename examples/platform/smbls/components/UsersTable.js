export const UsersTable = {
  onRender: async (el, s) => { 
    const projectMembers = await el.call('getProjectMembers')
    return s.set(projectMembers)
  },
  state: {},
  Flex_Title: {
    flow: 'x',
    align: 'center space-between',
    margin: '- - B2',
    gap: 'C1',
    Span: {
      text: 'Team Members:',
    },
    DocsLink: {
      if: el => el.sdk.hasPermission('projectSettings'),
      extends: 'Flex',
      align: 'center',
      gap: 'X2',
      Icon: {
        name: 'plus',
      },
      text: 'Invite new member',
      theme: 'transparent',
      onClick: async (ev, el) => {
        await el.call('openModal', '/settings', {
          key: '/invite'
        })
      },
    },
  },
  Flex_members: {
    flow: 'y',
    childExtends: 'Grid',
    childProps: {
      alignItems: 'center',
      columns: '2.2em 1fr 3fr 1fr 1.8rem',
      padding: 'Z1 0',
      gap: 'C1',
      Avatar: {
        props: (el, s) => ({
          boxSize: 'B',
          key: s.name
        }),
      },
      Name: {
        margin: '- - - -C',
        Text: {
          tag: 'span',
          text: '{{ name }}',
        },
        Strong: {
          hide: (el, s) => !s.username,
          text: ' ({{ username }})',
        },
      },
      Email: {
        text: '{{ email }}',
      },
      Role: {
        role: '{{ role }}',
      },
      IconButton_Remove: {
        if: (el, s) => el.sdk.hasPermission('iam') && s.role !== 'owner',
        icon: 'trash',
        onClick: async (ev, el, s) => {
          ev.preventDefault()
          ev.stopImmediatePropagation()
          const res = window.confirm(
            'Do you really want to remove the User from this Project?'
          )
          if (res) {
            try {
              const rs = el.getRootState()
              await el.sdk.removeMember(rs.projectId, s.id)
              el.parent.remove()
            } catch (err) {
              console.error(err)
            }
          }
        },
      },
    },
    children: (el, s) => s.parse(),
    childrenAs: 'state',
  },
};