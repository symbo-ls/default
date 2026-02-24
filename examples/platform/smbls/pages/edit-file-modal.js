export const editFileModal = {
  extends: '/add-file-modal',
  onInit: (el, s) => {
    const key = s.key || el.call('getLastLocationPath').slice(1)
    const content = el.getFiles(key)
    s.quietUpdate({
      key,
      ...content
    })
  },
  ModalHeader: {
    title: 'Edit {{ key }} file',
    p: null,
  },
  Flex: {
    InputField: {
      pointerEvents: 'none',
      Input: {
        opacity: '.65',
        disabled: 'disabled',
      },
    },
    'CommonSection.type': null,
  },
  ModalFooter: {
    CheckBuuon: {},
    IconButton: {
      icon: 'trash outline',
      onClick: async (ev, el, s, ctx) => {
        if (s.key && window.confirm('Do you want to remove the file?')) {
          el.sdk.deleteItem('files', s.key)
          await el.call('rerenderFileSidebarByType', 'files')
          await el.call('closeModal')
        }
      },
    },
  },
};