const { param } = require('./routes')

const TYPICODE_URL = 'https://jsonplaceholder.typicode.com/'

const fetchJson = async url => {
  const response = await fetch(url)
  return response.json()
}

const photoEnrichment = async id => {
  try {
    const photo = await fetchJson(`${TYPICODE_URL}/photos/${id}`)
    const album = await fetchJson(`${TYPICODE_URL}/albums/${photo?.albumId}`)
    const user = await fetchJson(`${TYPICODE_URL}/users/${album?.userId}`)

    const new_model = {
      id,
      title: photo?.title,
      url: photo?.url,
      thumbnailUrl: photo?.thumbnailUrl,
      album: {
        id: album?.id,
        title: album?.title,
        user: {
          ...user,
        },
      },
    }

    return new_model
  } catch (err) {
    return err
  }
}

const photoFiltering = async query => {
  try {
    const [photos, albums, users] = await Promise.all([
      fetchJson(`${TYPICODE_URL}/photos`),
      fetchJson(`${TYPICODE_URL}/albums`),
      fetchJson(`${TYPICODE_URL}/users`),
    ])

    const albumMap = new Map(albums.map(album => [album.id, album]))
    const userMap = new Map(users.map(user => [user.id, user]))

    const filteredData = photos
      .filter(photo => {
        const album = albumMap.get(photo.albumId)
        const user = userMap.get(album?.userId)

        const titleMatch = !query.title || photo.title.includes(query.title)
        const albumTitleMatch = !query['album.title'] || album?.title.includes(query['album.title'])
        const userEmailMatch = !query['album.user.email'] || user?.email === query['album.user.email']

        return titleMatch && albumTitleMatch && userEmailMatch
      })
      .map(photo => {
        const album = albumMap.get(photo.albumId)
        const user = userMap.get(album?.userId)
        return {
          id: photo.id,
          title: photo.title,
          url: photo.url,
          thumbnailUrl: photo.thumbnailUrl,
          album: {
            id: album.id,
            title: album.title,
            user: { ...user },
          },
        }
      })

    const limit = query['limit'] > 0 ? query['limit'] - 1 : 24
    const offset = query['offset'] > 0 ? query['offset'] - 1 : 0

    return filteredData.slice(offset, limit)

  } catch (err) {
    console.log(err)
    return err
  }
}

module.exports = {
  photoEnrichment,
  photoFiltering,
}
