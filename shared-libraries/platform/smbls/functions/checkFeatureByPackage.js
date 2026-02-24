export const checkFeatureByPackage = function checkFeatureByPackage(key) {
    const PAGES_PACKAGES_AVAILABILITY_MAP = {
      preview: 0,
      designSystem: 0,
      components: 0,
      integrations: 0,
      settings: 0,
      pages: 0,
      functions: 0,
      state: 0,
      gettingStarted: 0,
      docs: 0,

      colors: 0,
      color: 0,
      media: 0,
      shape: 0,
      typography: 0,
      spacing: 0,
      semantic_color: 0,
      global_themes: 0,
      gradients: 0,
      gradient: 0,
      themes: 0,
      theme: 0,
      icons: 0,
      fonts: 0,
      font: 0,
      cases: 0,

      dependencies: 0,
      secrets: 0,
      content: 0,
      methods: 0,
      snippets: 0,
      files: 0,
      publish: 0
    }

    return (
      Number(this.getRootState()?.package) >= PAGES_PACKAGES_AVAILABILITY_MAP[key]
    )
  }