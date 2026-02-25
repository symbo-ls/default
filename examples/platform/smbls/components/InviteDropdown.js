export const InviteDropdown = {
  state: {},
  ShareSection: {
    extends: 'Flex',
    flow: 'y',
    gap: 'A',
    CaptionTitle: {
      Text: {
        text: 'New member'
      }
    },
    InviteFormInDropdown: {},
    DomainItem: {
      padding: 'Z -',
      Icon: null,
      Upgrade: null,
      Hgroup: {
        H: {
          text: 'https://symbols.app/...'
        },
        P: {
          order: '-1',
          text: 'Invite by magic link'
        }
      },
      CopyButton: {
        extends: [
          'CanvasButton',
          'CopyButton'
        ],
        padding: 'Y2',
        round: 'C1',
        fontSize: 'Z1',
        margin: '-X -Y2 - auto',
        icon: 'copy outline'
      }
    }
  },
  Line: {
    margin: '-Z2 -A'
  },
  MembersInInvite: {},
  Line_2: {
    margin: '-Z2'
  },
  RolePermissionsInInvite: {},
  extend: 'Flex',
  props: {
    width: 'G2',
    flow: 'y',
    gap: 'C',
    padding: 'A A2 A2',
    textAlign: 'start',
    onClick: null
  }
}
