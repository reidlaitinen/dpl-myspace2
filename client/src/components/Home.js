import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
// we have a user in store now, so let's get connected to it:
import { connect } from 'react-redux';
// see second part of this at the bottom
import { getPosts, newPost, deletePost } from '../actions/posts';
import Post from './Post';

class Home extends Component {

  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let post = {title: this.state.title,
                body: this.state.body,
                user_id: this.props.coolPerson.id
              }
    this.props.dispatch(newPost(post));
  }



  render() {
    return (
      <div>
        <Header>Welcome: {this.props.coolPerson.name}</Header>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button type='submit'>Add Post</button>
          </form>
        </div>
        <div>
          {this.props.posts.map( p => {
            return(
              <Post post={p} />
            )
          })}
        </div>
      </div>
    );
  }
}

// second part: return the user to THIS COMPONENT'S PROPS
const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts
  }
}

// third part: hook it up.
export default connect(mapStateToProps)(Home);
