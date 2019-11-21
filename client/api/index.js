import request from 'superagent';

export function getCategories () {
  return request
    .get('/v1/categories')
    .then(res => {
      const categoriesData = res.body
      return categoriesData
    })
    .catch(() => {
      throw Error('Cannot GET categories')
    })
}

export function getItems (id) {
  return request
    .get(`/v1/items/${id}`)
    .then(res => {
      const itemsData = res.body
      return itemsData
    })
    .catch(() => {
      throw Error('Cannot GET items')
    })
}
