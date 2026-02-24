export const prettifyCode = async function prettifyCode(code, opts = {}) {
  const beautify = await import('js-beautify')
  return beautify.js(code, {
    indent_size: 2,
    space_in_empty_paren: true,
    ...opts
  })
}