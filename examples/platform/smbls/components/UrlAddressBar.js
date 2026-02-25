export const UrlAddressBar = {
  tag: 'search',
  Form: {
    extends: 'Flex',
    align: 'center',
    gap: 'X',
    margin: '0',
    attr: {
      novalidate: true
    },
    onSubmit: (ev, el, s) => {
      ev.preventDefault()
      const inputNode = el.Input.node
      const val = inputNode.value.trim()

      if (!val) {
        inputNode.setCustomValidity('This field is required.')
        inputNode.reportValidity()
        return
      }

      let finalUrl = val
      let isValid = false

      // --- 1. Try to parse as-is (preserves user's http:// or https://) ---
      try {
        const u = new URL(finalUrl)

        if (u.protocol !== 'http:' && u.protocol !== 'https:') {
          throw new Error('Unsupported protocol')
        }

        finalUrl = u.href
        isValid = true
      } catch (e) {
        // --- 2. Strip any malformed protocol and rebuild with https:// ---
        // Remove all variations: https://, http://, https:, http:, //, ///
        const cleanDomain = finalUrl.replace(/^(?:https?:?\/+)+/i, '')

        finalUrl = `https://${cleanDomain}`

        // --- 3. Validate the fixed URL ---
        try {
          const u = new URL(finalUrl)

          // Ensure we have a valid hostname
          if (!u.hostname || (!u.hostname.includes('.') && u.hostname !== 'localhost')) {
            throw new Error('Invalid hostname')
          }

          isValid = true
          finalUrl = u.href
        } catch (e2) {
          inputNode.setCustomValidity('Please enter a valid domain (e.g., google.com)')
          inputNode.reportValidity()
          return
        }
      }

      // --- 4. Submit if valid ---
      if (isValid) {
        inputNode.setCustomValidity('')
        inputNode.value = finalUrl

        console.log(finalUrl)

        s.update({
          url: finalUrl
        })
      }
    },
    Icon: {
      fontSize: 'Z1',
      margin: '- -B2 - A',
      name: 'network'
    },
    Input: {
      flex: 1,
      autofocus: 'autofocus',
      round: '0',
      placeholder: 'Type URL to inspect',
      padding: 'Y1 B2 Y1 B2',
      theme: 'transparent',
      outline: 'none',
      name: 'url',
      required: true,
      type: 'text',
      disabled: () => !(window.top.chrome && window.top.chrome.runtime),
      style: {
        appearance: 'none'
      },
      ':focus-visible': {
        outline: 'none'
      },
      '::-webkit-search-cancel-button': {
        display: 'none'
      },
      '::placeholder': {
        color: 'placeholder'
      },
      onInput: (ev, el, s) => {
        el.node.setCustomValidity('')
        s.quietUpdate({
          urlPlaceholder: el.node.value
        })
      },
      onBlur: (ev, el, s) => {
        const v = el.node.value.trim()
        if (v && !/^https?:\/\//i.test(v)) {
          const clean = v.replace(/^(?:https?:?\/+)+/i, '')
          if (clean) {
            el.node.value = `https://${clean}`
            s.quietUpdate({
              urlPlaceholder: el.node.value
            })
          }
        }
      }
    }
  },
  VisitedPages: {
    extends: 'Dropdown',
    width: '100%',
    left: '0'
  },
  extend: 'DropdownParentFocus',
  props: {
    position: 'relative',
    theme: 'quinary',
    round: 'C',
    minWidth: 'D3',
    margin: '-V - - -'
  }
}
