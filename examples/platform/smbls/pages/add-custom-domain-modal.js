export const addCustomDomainModal = {
  extends: [
    'ModalWindow',
    'Form'
  ],
  width: '100%',
  maxWidth: 'I',
  onSubmit: (e, el, st, ctx) => {
    e.preventDefault()

    if (!st.domainName) {
      return
    }

    const urlParams = new URLSearchParams(ctx.window.location.search)
    const type = urlParams.get('type')

    if (!type) {
      return
    }

    const {
      root
    } = st
    if (root && root.domains && root.domains[type]) {
      if (root.domains[type].domain === st.domainName) {
        st.replace({
          validationMessage: `Domain with this name is already added for '${type}' environment`
        })
        return
      }
    }

    el.router(
      ctx.window.location.pathname.replace(
        '/add-domain',
        `/add-cname?type=${type}&domainName=${st.domainName}`
      ), el.getRoot()
    )
    ctx.window.location.reload()
  },
  tag: 'form',
  state: {
    domainName: '',
    validationMessage: ''
  },
  ModalHeader: {
    title: 'Add custom domain',
    p: 'Add custom domain to manage your domain in isolation'
  },
  Flex: {
    overflow: 'auto',
    padding: 'A',
    minWidth: '100%',
    flow: 'column',
    flexAlign: 'flex-start space-between',
    gap: 'B3',
    childProps: {
      width: '50%'
    },
    InputField: {
      Title: {
        text: 'Domain name'
      },
      Input: {
        value: '{{ domainName }}',
        required: true,
        placeholder: 'eg. test.com or www.test.com',
        onInput: (ev, el, st) => {
          const {
            node
          } = el
          const {
            value
          } = node

          const regex =
            /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gu

          if (!regex.test(value)) {
            st.replace({
              domainName: null,
              validationMessage: 'Invalid domain name'
            })

            return
          }

          st.update({
            validationMessage: '',
            domainName: value
          })
        }
      },
      Label: {
        show: (ev, st) => st.validationMessage,
        color: 'red',
        text: (ev, st) => st.validationMessage
      }
    }
  },
  ModalFooter: {
    CheckButton: {
      type: 'submit',
      reverse: true,
      text: 'Next',
      icon: 'arrow right',
      ':hover': {
        cursor: 'pointer'
      }
    }
  }
}
