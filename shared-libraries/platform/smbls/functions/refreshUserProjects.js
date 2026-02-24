export const refreshUserProjects = async function refreshUserProjects() {
    try {
      // Get current user data and projects from CoreService
      const currentUser = await this.sdk.getUserProfile()
      const userProjects = await this.sdk.getUserProjects()

      const userData = {
        ...currentUser,
        currentUser,
        userId: currentUser.id,
        projects: userProjects || []
      }

      // Update the rootState with fresh user data and projects
      const state = this.getRootState()
      this.call('overwrite', state, userData)

      return userData
    } catch (error) {
      console.error('[refreshUserProjects] Error:', error)
      throw error
    }
  }