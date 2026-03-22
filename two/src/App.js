import React from "react";
import "./App.css";
// import Hello from './Hello';
// import Range from './Range';
// import Lenght from './Lenght';
// import Form from './Form';
// import Posts from './Posts';
import Test from './Test';
import User from './User';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Js Basic',
        title: 'Основы Js',
      },
      {
        id: 2,
        name: 'React',
        title: 'Основы React',
      },
      {
        id: 3,
        name: 'Angular',
        title: 'Основы Angular',
      },
    ],
    show: false
  }
  removePost = (id) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    })
  }
  render() {
    // let {posts} = this.state
    return <div className="App">
      {/* <Hello />
      <Lenght />
      <Range />
      <Form /> */}
      {/* <Posts posts={posts} removePost={this.removePost}/> */}
      <Test />
      <button onClick={() => this.setState({show: !this.state.show})}>User</button>
      {this.state.show ? <User /> : null}
    </div>;
  }
}

export default App;
