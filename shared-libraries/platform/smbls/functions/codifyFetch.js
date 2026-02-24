export const codifyFetch = function codifyFetch() {
  const s = this.state

  const data = {
    method: s.method,
    endpointUrl: s.endpointUrl,
    headers: s.headers,
    params: s.params,
    auth: s.auth,
    body: s.body
  }

  const code = this.call('stringifyCode', data, {
    preventExportDefult: true,
    indent: 1
  })

  return `async () => {
  const options = ${code}

  return await window.fetch(options.endpointUrl, options)
}`
}