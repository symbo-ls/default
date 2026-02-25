export const getCodePreviewValue = function getCodePreviewValue (val) {
  const globalState = this.getRootState()
  const parentPropsValue = this.parent.props.value
  const value = val || (parentPropsValue
    ? this.call('exec', parentPropsValue, this.parent)
    : this.call('exec', this.props.value, this))
  const code = this.call('isObjectLike', value)
    ? value[globalState.framework] || value.symbols || value.domql
    : value
  if (!code) return
  const stringifiedCode = this.call('isString', code)
    ? code
    : this.call('objectToString', code)
  return this.call('replaceLiteralsWithObjectFields', stringifiedCode)
}
