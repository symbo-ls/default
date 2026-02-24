export const invite = {
  flow: 'y',
  align: 'center',
  height: '100%',
  state: {
    role: 'guest',
  },
  Form: {
    margin: 'auto',
    maxWidth: 'H',
    width: '100%',
    Hgroup: {
      margin: '- - C1',
      H: {
        text: 'Invite team members',
      },
      P: null,
    },
    InviteForm: {
      gap: 'A2',
    },
    P: {
      gap: 'E',
      margin: 'A2 - C1 -',
      color: 'gray7',
      maxWidth: 'G1',
      text: 'Invite your team members and assign permissions and roles.',
    },
    ContinueButton: {
      tag: 'button',
      type: 'submit',
      margin: 'C1 - - -Y2',
      text: 'Invite',
      theme: 'primary',
    },
    CancelButton: {
      tag: 'button',
      type: 'button',
      margin: 'C1 - - Y1',
      text: 'Cancel',
      theme: 'secondary',
      onClick: async (ev, el) => {
        const isModal = el.getWindow('modal') === 'Invite'
        if (isModal) {
          await el.call('openModal', '/settings', {
            key: '/project-account'
          })
        } else if (el.isCanvas()) {
          await el.call('closeModal')
        } else {
          await el.router('/', el.getRoot())
        }
      },
    },
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
        if (projectId && email && role && name) {
          // NOTE: We need to be able to invite both registered and non-registered users
          await el.sdk.inviteMember(projectId, email, role, {
            name,
            callbackUrl: `${window.location.origin}/accept-invite`
          })
          el.call('openNotification', {
            title: 'Success message',
            message: `User '${name}' has been successfully invited`,
            type: 'success'
          })

          el.node.reset()
          s.set({
            role: 'guest'
          })
        } else {
          el.call('openNotification', {
            title: 'Validation message',
            message: `Please fill in all fields`,
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
    },
  },
};