export const createBucket = async function createBucket (project) {
  const API_URL = this.getConfig().apiUrl
  const randomString = Math.random().toString(36).slice(2, 15)
  const bucket = `symbols-bucket-${
    project.appKey?.split('.')[0]
  }-${randomString}`
  await window
    .fetch(`${API_URL}/webhook/package`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: project.projectId,
        key: project.appKey,
        bucket
      })
    })
    .catch(e => {
      throw new Error('Problem with creating bucket', e)
    })

  await this.sdk.setBucket(bucket)
  return bucket
}
