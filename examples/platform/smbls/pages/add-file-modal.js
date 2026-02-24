export const addFileModal = {
  extends: 'ModalWindow',
  onSubmit: async (ev, el, s) => {
    ev.preventDefault()
    const {
      content,
      key,
      code,
      type,
      format
    } = s

    if (!key) {
      el.call('openNotification', {
        title: 'Validation message',
        message: 'Key can not be empty',
        type: 'warning'
      })
      return
    }
    if (content?.src) {
      content.src = content.src.replace(
        'https://files-production-symbols-platform-development-en-d5-u3-p7x0.based.dev/',
        'https://files.symbo.ls/'
      )
    }

    const obj = {
      content,
      code,
      key,
      type,
      format
    }

    const exists = el.getFiles(key)
    const path = ['files', key]

    el.sdk.updateData([
      ['update', path, obj]
    ], {
      message: exists ? `Updated ${key}` : `Created ${key}`
    })

    // TODO: use event instead of calling rerenderFileSidebarByType function
    await el.call('rerenderFileSidebarByType', 'files')
    await el.call('closeModal')
    el.getCanvasContext().files[key] = obj
  },
  tag: 'form',
  state: {
    key: '',
    type: 'files',
    code: '',
    content: {},
  },
  ModalHeader: {
    title: 'Add a new file',
    p: null,
  },
  Flex: {
    overflow: 'auto',
    maxHeight: 'G3',
    boxSize: 'auto I',
    padding: '0 C 0',
    align: 'start',
    gap: 'B',
    flow: 'column',
    InputField: {
      hide: (el, s) => !s.content?.src,
      width: '100%',
      Title: {
        fontSize: 'Z',
        text: 'File name',
      },
      Input: {
        placeholder: 'new.html',
        value: '{{ key }}',
        onChange: (e, el, s) => {
          const val = el.node.value
          s.update({
            key: val,
            format: val.split('.').slice(-1)[0]
          }, {
            forceMonacoUpdate: true
          })
        },
      },
    },
    UploadAvatar: {
      if: (el, s) => s.type !== 'code',
      width: '100%',
      position: 'relative',
      Title: {
        fontSize: 'Z',
        text: 'Upload the file',
      },
      UploadIcon: {
        margin: '0 -X2',
        minHeight: 'F3',
        flex: 1,
        Avatar: null,
        Input: {
          onChange: async (ev, el, s) => {
            const [contents] = ev.target.files
            if (!contents) {
              return
            }
            await el.call('uploadFile', contents)
          },
        },
        onDragenter: (ev, el) => {
          ev.preventDefault()
          el.node.style.background = 'rgba(255, 255, 255, 0.1)'
        },
        onDragover: (ev, el) => {
          ev.preventDefault()
          el.node.style.background = 'rgba(255, 255, 255, 0.1)'
        },
        onDragleave: (ev, el) => {
          ev.preventDefault()
          el.node.style.background = 'rgba(255, 255, 255, 0.02)'
        },
        onDrop: async (ev, el, s) => {
          ev.preventDefault()
          ev.stopPropagation()

          el.node.style.background = 'rgba(255, 255, 255, 0.02)'

          const {
            files
          } = ev.dataTransfer

          if (!files || !files.length) {
            return
          }

          await el.call('uploadFile', files[0])
        },
      },
      ErrorMessage: {
        if: (el, s) => s.errorMessage,
        color: 'red',
        fontSize: 'Z',
        text: (el, s) => s.errorMessage,
      },
      FilePreview: {
        if: (el, s) => s.content?.src,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate3d(-50%, -40%, 1px)',
        href: null,
      },
    },
    PublicURL: {
      extends: 'Code',
      minWidth: '100%',
      if: (el, s) => s.content?.src,
      Title: {
        fontSize: 'Z',
        fontWeight: '400',
        text: 'Public URL:',
      },
      CodePreview: {
        padding: 'A A B2',
        theme: 'field-static',
        text: (el, s) => s.content?.src,
      },
      Buttons: {
        Copy: {
          value: (el, s) => s.content?.src,
        },
        Link: {
          href: (el, s) => s.content?.src,
          target: '_blank',
        },
      },
    },
    Code: {
      minWidth: '100%',
      if: (el, s) => s.content?.src,
      Title: {
        fontWeight: '400',
        text: 'Using as property:',
      },
      CodePreview: {
        padding: 'A A B2',
        theme: 'field-static',
        text: (el, s) => `{
  Img: {
    src: '${s.content?.src}'
  }
}`,
      },
      Buttons: {
        Copy: {
          value: (el, s) => `{
  Img: {
    src: '${s.content?.src}'
  }
}`,
        },
        Link: null,
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      text: 'Add',
    },
  },
};