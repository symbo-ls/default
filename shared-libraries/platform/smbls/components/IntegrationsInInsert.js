export const IntegrationsInInsert = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
    position: 'relative',
  },
  CaptionTitle: {
    Text: {
      text: 'INTEGRATIONS',
    },
  },
  Flex: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'IntegrationsItem',
    childrenAs: 'state',
    children: () => [{
          icon: 'github',
          title: 'Github',
          descr: 'Connect repository and sync changes',
        },
        {
          icon: 'slack',
          title: 'Slack',
          descr: 'Get notifications on important events',
        },
        {
          icon: 'intercom',
          title: 'Intercom',
          descr: 'Add live support on your website',
        },
        {
          icon: 'Amplitude',
          title: 'Amplitude',
          descr: 'Add Amplitude analytics to your website',
        },
        {
          icon: 'googleAnalytics',
          title: 'Google Analytics',
          descr: 'Collect data to your Google Tag dashboard',
        },
        {
          icon: 'stripe',
          title: 'Stripe',
          descr: 'Connect your Stripe payments to your app',
        },
        {
          icon: 'auth0',
          title: 'Auth0',
          descr: 'Connect authorisation to your app',
        },
        {
          icon: 'googleSheets',
          title: 'Google Sheets',
          descr: 'Connect sheets as data source',
        },
        {
          icon: 'supabase',
          title: 'Supabase',
          descr: 'Connect to Supabase endpoint',
        },
        {
          icon: 'instagram',
          title: 'Instagram feed',
          descr: 'Import instagram feed as data',
        },
        {
          icon: 'npm',
          title: 'NPM',
          descr: 'Publish your project as NPM package',
        },
        {
          icon: 'firebase',
          title: 'Firebase',
          descr: 'Connect to Firebase endpoint',
        },
      ].slice(0, 5),
  },
  InsertSectionShadow: {},
};