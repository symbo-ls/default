export const addSmblsSubdomains = async function addSmblsSubdomains(appKey) {
    const res1 = await this.call('addSmblsSubdomain', appKey)
    const res2 = await this.call('addSmblsSubdomain', `www.${appKey}`)

    const successMsg = 'Domain registered successfully'
    if (
      res1.message.startsWith(successMsg) &&
      res2.message.startsWith(successMsg)
    ) {
      this.call('openNotification', {
        title: successMsg,
        message: `"${appKey}" subdomain has been registered`,
        type: 'success'
      })
    } else {
      this.call('openNotification', {
        title: 'Error creating subdomain',
        message: res1.message + '\n' + res2.message,
        type: 'error'
      })
    }
  }