import React from 'react';
import { connect } from 'react-redux';
import {deletePost} from '../actions/posts';

class Post extends React.Component {

  

  render() {
    let { post } = this.props;
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button>Edit Post</button>
        <button onClick={() => this.props.dispatch(deletePost(post))}>Delete Post</button>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    user: state.user
  }

}

export default connect(mapStateToProps)(Post);