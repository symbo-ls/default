export const waitlist = {
  flow: 'y',
  align: 'center',
  height: '100%',
  flex: '1',
  onSubmit: async (ev, el, s) => {
    ev.preventDefault()
    const {
      email,
      name
    } = s.parse()
    await el.sdk.addToWaitlist({
      email,
      name
    })
    el.router('/', el.getRoot())
    if (window.plausible) {
      window.plausible('Signup to Waitlist')
    }
  },
  content: {
    tag: 'form',
    props: {
      maxWidth: 'H',
      width: '100%',
      margin: 'auto',
    },
    Hgroup: {
      margin: '- - C1',
      H: {
        text: 'Get early access',
      },
      P: {
        text: `You're joining the waitlist. Knowing your preferences helps us customize your invitation.`,
      },
    },
    WaitlistForm: {
      margin: '- - - -Y2',
      gap: 'Z2',
    },
    ContinueButton: {
      type: 'submit',
      margin: 'C1 - - -Y2',
      text: 'Sign up to waitlist',
      theme: 'primary',
    },
  },
  Footer: {},
};