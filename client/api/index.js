import request from 'superagent'

export function getCategories () {
  return request.get('/v1/categories')
    .then(res => {
      const categoriesData = res.body
      return categoriesData
    })
    .catch(() => {
      throw Error('Cannot GET categories')
    })
}
