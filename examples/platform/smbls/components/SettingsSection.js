export const SettingsSection = {
  extends: 'Group',
  Title: {
    width: '100%',
    margin: 'A - -',
    align: 'center space-between',
    text: 'Platform settings',
    QuestionMarkTooltip: {
      margin: '0',
      TooltipHidden: {
        minWidth: 'none',
        padding: 'Z A',
        shapeDirection: 'top',
        description: 'Reset to default'
      },
      Icon: {
        fontSize: 'A2',
        opacity: '.65',
        name: 'refresh'
      }
    }
  },
  Grid: {
    margin: 'A -',
    templateColumns: 'repeat(4, 1fr)',
    gap: 'B1 C3',
    '@tabletM': {
      columns: 'repeat(3, 1fr)'
    },
    '@tabletS': {
      columns: 'repeat(2, 1fr)'
    },
    '@mobileL': {
      columns: 'repeat(1, 1fr)'
    },
    childExtends: 'OptionToggle'
  }
}
