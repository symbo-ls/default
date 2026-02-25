export const InviteFormInDropdown = {
  extend: 'Flex',
  tag: 'form',
  props: {
    position: 'relative',
    flow: 'y',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()

      const {
        name,
        email,
        role
      } = s
      const {
        projectId
      } = el.getRootState()

      try {
        if (projectId && email && role) {
          // NOTE: We need to be able to invite both registered and non-registered users
          await el.sdk.inviteMember(projectId, email, role, {
            name,
            callbackUrl: `${window.location.origin}/accept-invite`
          })
          el.call('openNotification', {
            title: 'Success message',
            message: `User '${name || email}' has been successfully invited`,
            type: 'success'
          })

          el.node.reset()
          s.set({
            role: 'guest'
          })
        } else {
          el.call('openNotification', {
            title: 'Validation message',
            message: 'Please fill in all fields',
            type: 'warning'
          })
        }
      } catch (err) {
        el.call('openNotification', {
          title: 'Error message',
          message: `${err}`,
          type: 'error'
        })
        console.error(err)
      }
    }
  },
  Input: {
    margin: '- -A1',
    padding: 'Z2 A2 Z2 A2',
    placeholder: 'Type email to invite',
    type: 'email',
    required: true,
    onChange: (ev, el, s, ctx) => {
      const value = ev.target.value
      if (value) {
        s.update({
          email: value
        })
      }
    }
  },
  Flex: {
    position: 'absolute',
    top: 'Y+U',
    gap: 'A',
    right: '-Z',
    Select: {
      padding: 'X Y2',
      margin: '-W -Y2 - auto',
      background: 'none',
      color: 'currentColor',
      width: 'D1',
      onChange: (ev, el, s, ctx) => {
        const value = ev.target.value
        if (value) {
          s.update({
            role: value
          })
        }
      },
      childrenAs: 'props',
      childProps: {
        tag: 'option',
        attr: {
          selected: (el, s) => el.node.value === s.action
        }
      },
      children: [
        {
          text: 'Guest',
          value: 'guest'
        },
        {
          text: 'Editor',
          value: 'editor'
        },
        {
          text: 'Admin',
          value: 'admin'
        }
      ]
    },
    Copy: {
      extends: [
        'CanvasButton',
        'IconButton'
      ],
      padding: 'Y2',
      round: 'C1',
      icon: 'send',
      Icon: {
        order: 2,
        color: 'blue'
      },
      type: 'submit'
    }
  }
}
