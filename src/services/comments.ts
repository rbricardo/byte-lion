import axios from 'axios'

export const getComments = async (page, limit) => {
  const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`
  try {
    const data = axios.get(url)
    return data
  } catch (error) {
    return error
  }
}
