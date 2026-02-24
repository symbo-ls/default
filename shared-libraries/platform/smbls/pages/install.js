export const install = {
  extends: [
    'Page',
  ],
  flow: 'y',
  maxWidth: 'none',
  padding: 'D3+Z D3',
  state: {
    installTab: 'Development',
  },
  InstallHero: {},
  Space: {
    boxSize: 'D3',
  },
  InstallTabs: {},
  Line: {
    margin: '0',
  },
  Flex: {
    margin: 'C1 -',
    flow: 'y',
    gap: 'C1',
    childExtends: 'Flex',
    childProps: {
      flow: 'y',
    },
    InstallDomain: {
      gap: 'C1',
      show: (el, s) => s.installTab === 'Domain',
    },
    InstallLiveExt: {
      show: (el, s) => s.installTab === 'Live',
    },
    IfCdn: {
      gap: 'C1',
      show: (el, s) => s.installTab === 'Development' && el.getActivePkgManager() === 'cdn',
      InstallCdn: {},
      Line: {
        margin: 'B2 0 0',
        maxWidth: 'D1',
      },
      InstallLiveExt: {},
    },
    IfNotCdn: {
      gap: 'C1',
      show: (el, s) => s.installTab === 'Development' && el.getActivePkgManager() !== 'cdn',
      TerminalWithTitle: {
        maxWidth: '50%',
        '@tabletM': {
          maxWidth: 'none',
        },
        Title: {
          text: el => `1. Install Symbols via ${el.getActivePkgManager()}:`,
        },
        Terminal: {
          margin: '0 0 0 -Y',
          value: el => el.getActivePkgManager() === 'npm' ? {
            domql: 'npm i smbls --save',
            react: 'npm i @symbo.ls/react --save'
          } : el.getActivePkgManager() === 'yarn' ? {
            domql: 'yarn add smbls',
            react: 'yarn add @symbo.ls/react'
          } : el.getActivePkgManager() === 'pnpm' ? {
            domql: 'pnpm add smbls',
            react: 'pnpm add @symbo.ls/react'
          } : '// bash',
        },
      },
      InstallSymbolsJson: {},
      InstallSync: {},
      InstallProvider: {
        if: el => el.getRootState().framework === 'react',
      },
    },
  },
  Line_2: {
    margin: 'B2 -',
  },
  InstallFooter: {},
};