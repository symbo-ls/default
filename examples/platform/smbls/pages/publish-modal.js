export const publishModal = {
  extends: 'ModalWindow',
  tag: 'form',
  state: {
    isLoading: false,
    isConfirming: false
  },
  maxWidth: '65vw',
  width: '100%',
  maxHeight: '65vh',
  height: '100%',
  onRender: async (el, s) => {
    await el.sdk.checkpoint()
    const {
      projectId,
      branch
    } = el.getRootState()
    const changes = await el.sdk.getBranchChanges(projectId, branch)
    const reducedChanges = changes.reduce(
      (acc, v) => {
        const isSchema = v[1][0] === 'schema'
        const key = isSchema ? v[1][1] : v[1][0]
        const subKey = isSchema ? v[1][2] : v[1][1]
        if (acc[key]) {
          if (!subKey) {
            acc[key].push(...Object.keys(v[2]))
          } else if (!acc[key].includes(subKey)) {
            acc[key].push(subKey)
          }
        } else {
          acc.other.push(key)
        }
        return acc
      }, {
        components: [],
        pages: [],
        functions: [],
        designSystem: [],
        other: []
      }
    )
    s.replace({
      changes: reducedChanges
    })
  },
  onSubmit: async (e, el, s) => {
    e.preventDefault()
    if (s.isLoading) {
      return
    }

    // First click shows confirmation state
    if (!s.isConfirming) {
      s.update({
        isConfirming: true
      })
      return
    }

    s.update({
      isLoading: true,
      isConfirming: false
    })
    const rootState = el.getRootState()
    const {
      projectId,
      branch,
      version
    } = rootState
    const result = await el.sdk.publishVersion(projectId, {
      version,
      branch
    })

    rootState.replace({
      version: result.value
    }, {
      preventUpdate: true
    })

    // Notify other UI parts
    el.sdk.rootBus.emit('version:published', {
      projectId,
      version: result.value
    })

    s.update({
      isLoading: false
    })

    await el.call('closeModal')
    el.call('setCookie', `${el.getAppKey()}_projectWasPublished`, true)
  },
  ModalHeader: {
    margin: '0',
    title: 'Publish',
    p: 'Publish changes and release version.',
    Article: {
      P: {
        margin: '0'
      }
    }
  },
  Cnt: {
    margin: 'auto',
    padding: 'C1',
    LoadingGif: {
      hide: (el, s) => s.changes,
      inCenter: null
    },
    P: {
      hide: (el, s) => !s.changes,
      text: (el, s) =>
        s.changes && Object.keys(s.changes).length
          ? 'Changes to release:'
          : 'No new data to release.'
    },
    Changes: {
      children: (el, s) => s.changes &&
        Object.keys(s.changes)
          .filter(
            key => s.changes[key].length || Object.keys(s.changes[key]).length
          )
          .map(key => ({
            extends: 'P',
            text: () =>
              key === 'other'
                ? 'Other changed paths:'
                : `${key}: ${s.changes[key].join(', ')}`
          }))
    }
  },
  ConfirmTip: {
    hide: (el, s) => !s.isConfirming,
    tag: 'P',
    color: 'paragraph',
    text: 'Click "Publish" again to confirm.'
  },
  ModalFooter: {
    CheckButton: null,
    PublishButton: {
      LoadingGif: {
        width: '1.8em',
        height: '1.8em',
        hide: (el, s) => !s.isLoading,
        margin: '0 auto',
        opacity: '.9'
      },
      extends: [
        'Button',
        'ClickableItem'
      ],
      icon: (el, s) => s.isLoading ? '' : 'checkmark',
      type: 'submit',
      text: (el, s) => s.isLoading ? '' : (s.isConfirming ? 'Confirm publish' : 'Publish'),
      disabled: (el, s) => !s.changes || !Object.keys(s.changes).length || s.isLoading,
      padding: 'Z1 B1 Z1 B',
      minWidth: '12em',
      round: 'B',
      flexAlign: 'center center',
      theme: 'primary',
      gap: 'X2',
      ':disabled': {
        opacity: '.35',
        theme: 'secondary'
      }
    }
  }
}
