export const SaveCheckpointControl = {
  position: 'relative',
  width: '100px',
  height: '30px',
  fontSize: 'X',
  flow: 'row',
  align: 'center',
  pointerEvents: 'auto',
  onInit: (el, s) => {
    const handler = ({
      origin
    }) => {
      if (origin === 'auto') {
        s.status = 'autoSaved'
        setTimeout(() => s.update({
          status: null
        }), 1500)
      }
    }
    el.sdk.rootBus.on('checkpoint:done', handler)
  },
  state: {
    status: null,
  },
  CommitBtn: {
    extends: 'Button',
    hide: true,
    show: (el, st) => st.status === null,
    icon: 'cloud',
    text: 'Commit',
    width: '100%',
    onClick: async (ev, el, st) => {
      try {
        st.update({
          status: 'saving'
        })
        await el.sdk.checkpoint()
        st.update({
          status: 'manualSaved'
        })
        setTimeout(() => st.update({
          status: null
        }), 2500)
      } catch (err) {
        console.error(err)
        st.update({
          status: null
        })
      }
    },
  },
  ManualSavedStatusMessage: {
    if: (el, st) => st.status === 'manualSaved',
    tag: 'Span',
    text: 'Save success',
    color: 'green',
    textAlign: 'center',
    width: '100%',
  },
  AutoSavedStatusMessage: {
    if: (el, st) => st.status === 'autoSaved',
    tag: 'Span',
    text: 'Auto Saved',
    color: 'green',
    textAlign: 'center',
    width: '100%',
  },
  SavingStatusMessage: {
    if: (el, st) => st.status === 'saving',
    tag: 'Span',
    text: 'Saving…',
    color: 'dim',
    textAlign: 'center',
    width: '100%',
  },
};