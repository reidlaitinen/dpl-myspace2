const posts = (state = [], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [action.post, ...state]
    case 'DELETE_POST':
      return state.filter(post => post.id !== action.post.id)
    default:  
      return state;
  }
}

export default posts;