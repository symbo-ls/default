export const loadIntercom = function loadIntercom () {
  if (typeof window === 'undefined') return

  // Full Symbols root state
  const s = this.getRootState()

  const APP_ID = 'i3suvh8k'

  const toUnix = (iso) =>
    iso ? Math.floor(new Date(iso).getTime() / 1000) : undefined

  // ---------------------------
  // 🔹 USER IDENTITY
  // ---------------------------
  const userId = s.userId
  const email = s.email
  const name = s.username || s.projectName || 'User'
  const createdAt = toUnix(s.createdAt)
  const lastLogin = toUnix(s.lastLogin)

  // ---------------------------
  // 🔹 PROJECT (merged “company”) PROFILE
  //    This is what you asked for.
  //    Everything that belongs to a workspace, team,
  //    account, plan, project → goes under this.
  // ---------------------------
  const project = {
    id: s.projectId,
    name: s.projectName,
    key: s.projectKey || s.appKey,
    owner: s.workingProjectOwner || s.owner?.username,
    role: s.projectRole,
    type: s.projectType,
    visibility: s.visibility,
    tier: s.tier,
    subscription_id: s.subscription,
    status: s.status,
    created_at: createdAt,
    updated_at: toUnix(s.updatedAt),
    active_project: this.getAppKey(),

    // Optional but useful for Intercom segmentation:
    seats: s.seats,
    versions_count: s.versionscount,
    docs_context: s.docsContext,
    language: s.language
  }

  // ---------------------------
  // 🔹 EXTRA ATTRIBUTES (remaining root data)
  // ---------------------------
  const customAttributes = {
    access: s.access,
    global_role: s.globalRole,
    auth_provider: s.authProvider,
    last_login_at: lastLogin,
    is_account_owner: s.isAccountOwner,
    environment: s.environment,
    scenes_theme: s.sceneTheme
  }

  const bootAndShow = () => {
    if (!window.Intercom || typeof window.Intercom !== 'function') return

    if (!window.__intercomBooted) {
      window.__intercomBooted = true

      window.Intercom('boot', {
        app_id: APP_ID,
        hide_default_launcher: true,

        // ---------------------------
        // USER PROFILE
        // ---------------------------
        user_id: userId,
        name,
        email,
        created_at: createdAt,

        // ---------------------------
        // PROJECT PROFILE (YOUR REQUEST)
        // ---------------------------
        company: project, // Intercom expects "company" — but it **is** your project

        // ---------------------------
        // CUSTOM ATTRIBUTES
        // ---------------------------
        ...customAttributes
      })
    }

    // Safety: hide launcher if anything re-enabled it
    window.Intercom('update', {
      hide_default_launcher: true
    })

    // Open messenger
    window.Intercom('show')
  }

  // Script already loaded
  if (window.__intercomLoaded) {
    bootAndShow()
    return
  }

  if (window.__loadingIntercom) return
  window.__loadingIntercom = true

  // Lazy-load Intercom
  const script = document.createElement('script')
  script.async = true
  script.src = `https://widget.intercom.io/widget/${APP_ID}`
  script.onload = () => {
    window.__intercomLoaded = true
    bootAndShow()
  }

  document.head.appendChild(script)
}
