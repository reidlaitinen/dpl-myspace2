import axios from 'axios'

export const getPosts = () => dispatch => {
  axios.get('/api/posts')
    .then( res => {
      dispatch({ type: 'GET_POSTS', posts: res.data })
    })
}

export const newPost = (post) => dispatch => {
  axios.post('/api/posts', post)
    .then( res => {
      dispatch({ type: 'ADD_POST', post: res.data})
    })
}

export const deletePost = (post) => dispatch => {
  axios.delete(`/api/posts/${post.id}`)
    .then( res=> {
      dispatch({ type: 'DELETE_POST', post: res.data})
    })
}