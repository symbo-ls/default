export const getErroredCodeKey = function getErroredCodeKey(key) {
    const projectKey = this.getAppKey()
    const componentKey = key || this.state.key
    return `code-error-${projectKey}_${componentKey}`
  }