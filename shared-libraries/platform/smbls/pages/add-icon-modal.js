export const addIconModal = {
  extends: 'ModalWindow',
  onSubmit: (e, el, s) => {
    e.preventDefault()
    const {
      iconName,
      src
    } = s
    if (!iconName || !src) return

    el.call('closeModal', el, s)
    const t = setTimeout(() => {
      el.updateDesignSystem({
        ICONS: {
          [iconName]: src
        }
      })
      clearTimeout(t)
    }, 75)
  },
  tag: 'form',
  ModalHeader: {
    title: 'Icon Preview',
    p: 'Upload icons in SVG format',
  },
  Flex: {
    align: 'start space-between',
    gap: 'C1',
    padding: '0 C3 0 0',
    IconPreview: {
      extends: 'Flex',
      minWidth: 'F2+Z',
      flex: 3.5,
      color: 'gray10',
      position: 'relative',
      aspectRatio: '1/1',
      Svg: {
        position: 'absolute',
        boxSize: '100%',
        src: '<svg xmlns="http://www.w3.org/2000/svg" width="197" height="197" viewBox="0 0 197 197"><g fill="none" fill-rule="evenodd" stroke="#525474" stroke-width=".1" transform="translate(.5 .5)"><path d="M98,196.000245 L98,196.000245 C43.87705,196.000245 0,152.123195 0,98.000245 C0,43.874845 43.87705,0.000244999999 98,0.000244999999 C152.12295,0.000244999999 196,43.874845 196,98.000245 C196,152.123195 152.12295,196.000245 98,196.000245 Z"/><polygon points="9.8 186.2 186.2 186.2 186.2 9.8 9.8 9.8"/><polygon points="19.6 196 176.4 196 176.4 0 19.6 0"/><polygon points="0 176.4 196 176.4 196 19.6 0 19.6"/></g></svg>',
      },
      Svg_2: {
        position: 'absolute',
        boxSize: '100%',
        fontSize: '12.5em',
        src: (el, s) => s.src,
        '@light': {
          style: {
            fill: 'var(--color-caption-light)',
          },
        },
        '@dark': {
          style: {
            fill: 'var(--color-caption-dark)',
          },
        },
      },
    },
    Flex: {
      flex: 5,
      flexFlow: 'y',
      gap: 'A2',
      InputField: {
        Title: {
          text: 'Icon name',
        },
        Input: {
          placeholder: 'Eg: Arrow Right',
          value: '{{ iconName }}',
        },
      },
      UploadAvatar: {
        Title: {
          text: 'Upload the icon',
        },
        UploadIcon: {
          flow: 'x',
          whiteSpace: 'nowrap',
          gap: 'A',
          padding: 'A A2',
          P: {
            text: null,
            Span: {
              text: 'Upload SVG file from your computer',
            },
          },
          Input: {
            onChange: (evt, el, s) => {
              // Retrieve the first (and only!) File from the FileList object
              var file = evt.target.files[0]
              console.log(file)

              if (file) {
                var reader = new window.FileReader()
                reader.onload = function(e) {
                  var contents = e.target.result
                  const fileName = file.name.split('.svg')[0]
                  console.log(fileName)
                  console.log(contents)
                  s.update({
                    src: contents,
                    iconName: el.call('toCamelCase', fileName)
                      .replaceAll('-', ''),
                  })
                }
                reader.readAsText(file)
              }
            },
          },
        },
      },
    },
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      text: 'Save',
    },
  },
};