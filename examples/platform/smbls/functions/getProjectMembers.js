export const getProjectMembers = async function getProjectMembers () {
  const s = this.getRootState()

  const ordering = { owner: 0, admin: 1, editor: 2, guest: 3 }

  const projectMembers = (
    await this.sdk.getProjectMembers(this.getRootState('projectId'))
  ).sort((a, b) => {
    const roleDiff = ordering[a.role] - ordering[b.role]
    return roleDiff === 0
      ? a.name > b.name
        ? 1
        : a.name < b.name
          ? -1
          : 0
      : roleDiff
  })

  if (projectMembers.length === 0) {
    projectMembers.push({
      email: s.email,
      id: s.userId,
      joinedAt: s.createdAt,
      name: s.name,
      role: s.globalRole
    })
  }

  return projectMembers
}
