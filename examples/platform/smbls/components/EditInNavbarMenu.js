export const EditInNavbarMenu = {
  flow: 'y',
  gap: 'A',
  theme: 'navbar',
  padding: 'Y Z1',
  onClick: (ev, el) => {
    el.lookup('TextNavbarButtonDropdown').update()
  },
  ListInDropdown: {
    margin: '- -Z2',
    gap: '0',
    childProps: {
      ':hover': {
        style: {
          svg: {
            opacity: 1,
          },
        },
      },
      padding: 'Z Z2',
      fontSize: 'A',
      fontWeight: '400',
      round: 'Z',
      Text: null,
      color: 'title',
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100',
      },
    },
    childrenAs: 'props',
    children: el => [{
      text: 'Open in Editor',
      Icon: {
        name: 'playOvalDotted',
      },
      onClick: (ev, el, s) => {
        el.setCanvasScope({
          editorActive: true,
          preferredEditor: 'editor'
        })
      },
    }, {
      text: 'Edit in Code',
      Icon: {
        name: 'code',
      },
      onClick: (ev, el, s) => {
        if (el.getWindow('componentEditor') === 'code') {
          el.closeWindow('componentEditor')
        } else {
          el.setWindow('componentEditor', 'code')
        }
        el.setCanvasScope({
          preferredEditor: 'code'
        })
      },
    }, {
      text: 'Open in Sidebar',
      Icon: {
        name: 'sidebarLeftFill'
      },
      onClick: async (ev, el, s) => {
        if (el.getWindow('explorer') !== 'explorer') {
          await el.setWindow('explorer', 'explorer')
        }
        setTimeout(() => {
          const itemFound = el.call('findFileSidebarItem', s.type, s.key)
          itemFound?.state?.update({
            showLayers: true
          })
        }, 350)
        el.setCanvasScope({
          preferredEditor: 'sidebar'
        })
      },
    }],
  },
};