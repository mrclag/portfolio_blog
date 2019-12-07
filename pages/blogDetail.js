import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { getBlogBySlug } from '../actions';

import { BlogDetailWrapper, BlogArticle } from '../styles/blogDetail.styles';

class BlogDetail extends Component {
  static async getInitialProps({ query }) {
    let blog = {};
    const slug = query.slug;
    try {
      blog = await getBlogBySlug(slug);
    } catch (err) {
      console.error(err);
    }
    return { blog };
  }

  render() {
    const { blog } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BlogDetailWrapper>
          <BlogArticle>
            <div dangerouslySetInnerHTML={{ __html: blog.story }}></div>
          </BlogArticle>
        </BlogDetailWrapper>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
