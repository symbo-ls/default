const Dropdownmorelearnmenu = {
  ListInDropdown: {
    margin: '- -Z2',
    gap: '0',
    childProps: {
      padding: 'Z Z2',
      fontSize: 'A',
      round: 'Z',
      fontWeight: '400',
      color: 'title',
      Text: null,
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100',
      },
      ':hover': {
        style: {
          svg: {
            opacity: 1,
          },
        },
      },
    },
    childrenAs: 'props',
    children: el => [{
      text: 'Onboarding',
      Icon: {
        name: 'intOutline'
      },
      onClick: (ev, el) => {
        el.setWindow('explorer', 'onboarding')
        el.parent.update()
      }
    }, {
      text: 'Examples',
      Icon: {
        name: 'ratingFrame'
      },
      onClick: (ev, el) => {
        el.setWindow('docs', '/examples')
      }
    }, {
      text: 'Properties',
      Icon: {
        name: 'ratingFrame'
      },
      onClick: (ev, el) => {
        el.setWindow('docs', '/props')
      }
    }],
  },
  GeneralNav: {
    CaptionTitle: {
      margin: 'X - X2',
      Text: {
        text: 'More',
      },
    },
    ListInDropdown: {
      margin: '- -Z2',
      gap: '0',
      childProps: {
        padding: 'Z Z2',
        fontSize: 'A',
        round: 'Z',
        fontWeight: '400',
        Icon: null,
        ':hover': {
          style: {
            svg: {
              opacity: 1,
            },
          },
        },
        Text: null,
        color: 'title',
      },
      childrenAs: 'props',
      children: el => [{
        text: 'Intro to Symbols',
        onClick: (ev, el) => {
          el.setWindow('docs', '/intro')
        }
      }, {
        text: 'Documentation',
        onClick: (ev, el) => {
          el.setWindow('docs', '/developers')
        }
      }, {
        text: 'Contribution',
        onClick: (ev, el) => {
          el.setWindow('docs', '/symbols-developer')
        }
      }],
    },
  },
  extend: 'Flex',
  props: {
    padding: 'Z1 A',
    gap: 'A',
    flexFlow: 'y',
  },
};

export { Dropdownmorelearnmenu as 'Dropdown.MoreLearnMenu' }