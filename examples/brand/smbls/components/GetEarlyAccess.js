export const GetEarlyAccess = {
  flow: 'y',
  align: 'start start',
  gap: 'B2',
  padding: '0 A2 0 C2',
  width: 'G2',
  borderColor: 'line',
  borderStyle: 'solid',
  borderWidth: '0 0 0 1px',
  margin: '0',
  Hgroup: {
    H: {
      tag: 'strong',
      text: 'Get early access'
    },
    P: {
      text: 'We\'re kicking off invite-only. Get early signup to make it to the top.'
    }
  },
  Link: {
    extends: [
      'Link',
      'Button'
    ],
    margin: '0 0 0 -X',
    theme: 'quaternary',
    fontWeight: '500',
    text: 'Join up',
    href: '/signup'
  }
}
