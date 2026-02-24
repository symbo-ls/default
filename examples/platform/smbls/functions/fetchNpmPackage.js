export const fetchNpmPackage = async function fetchNpmPackage(name, schemaVersion) {
    await window
      .fetch(
        `https://registry.npmjs.com/-/v1/search?text=${name}@${schemaVersion}&size=1`
      )
      .then(async res => {
        const {
          objects
        } = await res.json()
        const [pkg] = objects || []
        if (!pkg) {
          return
        }

        const {
          name: pkgName,
          version: pkgVersion
        } = pkg

        if (pkgName === this.state.name) {
          this.state.replace({
            name: pkgName,
            version: pkgVersion,
            schemaVersion
          })
        }
      })
      .catch(() => {
        if (name === this.state.name) {
          this.state.replace({
            version: null,
            isLoadingPackages: false
          })
        }
      })
  }