export const SidebarSignupOverlay = {
  extend: 'SidebarPricingOverlay',
  SimpleOverlay: {
    background: 'electricBlue',
  },
  Notification: {
    onClick: (f, el, st) => {
        el.call('openModal', '/settings', {
          key: '/signup'
        })
      },
    Hgroup: {
      H: {
        text: 'Unlock editing!',
      },
      P: {
        text: 'Sign up to unlock more features, use templates, 5000+ components and more...',
      },
    },
  },
};