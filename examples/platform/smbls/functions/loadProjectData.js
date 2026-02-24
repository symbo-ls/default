export const loadProjectData = async function loadProjectData(
    projectId,
    fields = [
      'state',
      'system',
      'settings',
      'designSystem',
      'components',
      'pages',
      'canvas',
      'colors',
      'icons',
      'schema',
      'functions',
      'methods',
      'define',
      'packages',
      'dependencies',
      'files',
      'project'
    ]
  ) {
    const projectData = this.call(
      'deepDestringifyFunctions',
      await this.sdk.getProjectData(projectId)
    )

    // If specific fields are requested, return only those
    if (Array.isArray(fields) && fields.length > 0) {
      return fields.reduce((result, field) => {
        if (field in projectData) {
          result[field] = projectData[field]
        }
        return result
      }, {})
    }

    return projectData
  }