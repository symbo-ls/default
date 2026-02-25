const Dropdownpublish = {
  Publish: {
    key: 'publish',
    CaptionTitle: {
      Text: {
        text: 'Publish'
      }
    },
    Section: {
      extends: 'PublishTools'
    }
  },
  Line: {
    margin: '-A2 0',
    ignoreChildProps: true
  },
  Sync: {
    key: 'sync',
    CaptionTitle: {
      Text: {
        text: 'Sync'
      }
    },
    Section: {
      extends: 'SyncSuggestionsInPublish'
    }
  },
  Line_2: {
    margin: '-A2 0',
    ignoreChildProps: true
  },
  Export: {
    key: 'export',
    CaptionTitle: {
      Text: {
        text: 'Export'
      }
    },
    Section: {
      extends: 'ExportsInPublish'
    }
  },
  extend: 'Flex',
  childExtend: 'Flex',
  props: {
    width: 'G3',
    flow: 'y',
    gap: 'C',
    padding: 'Z1 A',
    textAlign: 'start',
    childProps: {
      flow: 'y',
      gap: 'A',
      CaptionTitle: {
        extends: [
          'CaptionTitle',
          'CanvasButton'
        ],
        margin: '- -A2',
        padding: 'A A2',
        round: 'Z',
        Text: {},
        Icon: {
          margin: '- - - auto',
          icon: (el, s) => s.activeOutput === el.parent.parent.props.key ? 'arrow angle up' : 'arrow angle down'
        },
        onClick: (ev, el, s) => s.update({
          activeOutput: el.parent.props.key
        })
      },
      Section: {
        show: (el, s) => s.activeOutput === el.parent.props.key
      }
    }
  }
}

export { Dropdownpublish as 'Dropdown.Publish' }
