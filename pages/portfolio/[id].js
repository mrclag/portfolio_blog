import React, { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    // static means you can call without initializing new class
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
    } catch (e) {
      console.log(e);
    }

    return { post };
  }

  render() {
    const post = this.props.post;
    return (
      <BaseLayout>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        <p>{post.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
