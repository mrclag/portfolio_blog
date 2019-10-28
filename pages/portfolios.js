import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    // static means you can call without initializing new class
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      posts = response.data;
    } catch (e) {
      console.log(e);
    }

    return { posts: posts.splice(0, 10) };
  }

  // <Link href="/p/[id]" as={`/p/${props.id}`}>

  renderPosts(posts) {
    return posts.map((post, i) => {
      return (
        <li key={i}>
          <Link as={`/portfolio/${post.id}`} href={'/portfolio/[id]'}>
            {post.title}
          </Link>
        </li>
      );
    });
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>Porfolios Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
