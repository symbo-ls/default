export const addSmblsSubdomain = async function addSmblsSubdomain(appKey) {
    const config = await this.getConfig()
    const API_URL = config.apiUrl
    if (this.call('isNotProduction')) {
      return this.warn('Creating domains is only allowed in production')
    }
    const res = await window
      .fetch(`${API_URL}/add-subdomain`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: appKey
        })
      })
      .then((response) => response.json())
    return res
  }