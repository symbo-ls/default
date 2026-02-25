export const confirmEmail = async function confirmEmail () {
  try {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const email = params.get('email')

    if (!token || !email) {
      throw new Error('Invalid confirmation link')
    }

    const result = await this.sdk.confirmRegistration(token)
    if (result) {
      this.state.update({
        loading: false,
        success: true
      })
    } else {
      throw new Error('Confirmation failed')
    }
  } catch (error) {
    this.state.update({
      loading: false,
      success: false,
      error: error.message
    })
  }
}
