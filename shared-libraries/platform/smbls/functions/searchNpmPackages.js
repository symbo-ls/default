export const searchNpmPackages = async function searchNpmPackages(name) {
    await window
      .fetch(`https://registry.npmjs.com/-/v1/search?text=${name}&size=5`)
      .then(async res => {
        const {
          objects
        } = await res.json()
        const packages = objects.map(v => ({
          name: v.package.name,
          version: v.package.version
        }))
        if (name === this.state.name) {
          this.state.replace({
            packages,
            isLoadingPackages: false
          })
        }
      })
      .catch(() => {
        if (name === this.state.name) {
          this.state.replace({
            packages: [],
            isLoadingPackages: false
          })
        }
      })
  }