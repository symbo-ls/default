export const editBranchModal = {
  extends: '/add-branch-modal',
  onSubmit: async (e, el, s, ctx) => {
    e.preventDefault()
    if (!s.branch) {
      return s.update({
        error: 'Branch name cannot be empty'
      })
    }
    if (s.branch === el.getActiveBranch()) {
      return s.update({
        error: 'No changes'
      })
    }
    try {
      await el.sdk.renameBranch(el.getRootState().projectId, el.getActiveBranch(), s.branch)
      await el.call('setActiveBranch', s.branch)
      await el.call('closeModal')
    } catch (err) {
      s.update({
        error: err.message
      })
    }
  },
  ModalHeader: {
    title: 'Edit {{ branch }} branch',
    p: 'Edit branch name or delete it'
  },
  state: el => ({
    branch: el.getActiveBranch()
  }),
  Flex: {
    InputField: {
      Input: {}
    },
    Flex: {
      if: (el, s) => s.error,
      text: (el, s) => s.error
    }
  },
  ModalFooter: {
    CheckButton: {},
    IconButton: {
      icon: 'trash outline',
      onClick: async (e, el, s, ctx) => {
        e.preventDefault()
        try {
          await el.sdk.deleteBranch(el.getActiveBranch())
          await el.call('setActiveBranch', 'main')
          await el.call('closeModal')
        } catch (err) {
          s.update({
            error: err.message
          })
        }
      }
    }
  }
}
