export const RolePermissionsInInvite = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
  },
  CaptionTitle: {
    Text: {
      text: 'Role Permissions',
    },
  },
  Flex: {
    gap: 'A',
    flow: 'y',
    margin: '- -Z2',
    childExtends: 'DomainItem',
    childProps: {
      align: 'start',
      Icon: null,
      Upgrade: null,
      Hgroup: {},
      Select: {
        padding: 'X Y2',
        margin: '-W -Y2 - auto',
        background: 'none',
        color: 'currentColor',
        width: 'D3+Z2',
        onChange: (ev, el, s, ctx) => {
            const value = ev.target.value
            if (value) {
              s.update({
                action: value
              })
            }
          },
        childrenAs: 'props',
        childProps: {
          tag: 'option',
          attr: {
            selected: (el, s) => el.node.value === s.action,
          },
        },
      },
    },
    Guests: {
      Hgroup: {
        H: {
          text: 'Guests',
        },
        P: {
          text: 'Control access level for guests',
        },
      },
      Select: {
        children: [
          {
            text: 'Can view',
          },
          {
            text: 'Can comment',
          },
        ],
      },
    },
    Editors: {
      Hgroup: {
        H: {
          text: 'Editors',
        },
        P: {
          text: 'Control access level for editors',
        },
      },
      Select: {
        children: [
          {
            text: 'Can edit',
          },
          {
            text: 'Can publish',
          },
        ],
      },
    },
  },
};