export const uploadFile = async function uploadFile(contents) {
    try {
      const splitName = contents.name.split('.')
      const format = splitName[splitName.length - 1]
      if (!this.call('validateFormat', format)) {
        this.state.update({
          errorMessage: `Not allowed file type: ${format}`
        })
        return
      }

      const res = await this.sdk.uploadFile(contents)
      this.state.replace({
        key: this.state.key || contents.name,
        content: res,
        format
      })
    } catch (error) {
      this.call('openNotification', {
        title: 'Error message',
        message: `${error.message}`,
        type: 'error'
      })
    }
  }