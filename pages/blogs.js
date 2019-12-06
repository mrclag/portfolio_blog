import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';
import { getBlogs } from '../actions';
import { shortenText } from '../helpers/utils';
import moment from 'moment';

import {
  PostLink,
  PostTitle,
  PostSubtitle,
  PostMeta,
  SiteHeading,
  BlogPageWrapper,
  Title,
  BlogPostWrapper
} from '../styles/blogs.styles';

class Blogs extends Component {
  static async getInitialProps() {
    let blogs = [];
    try {
      blogs = await getBlogs();
    } catch (e) {
      console.error(e);
    }
    return { blogs };
  }

  renderBlogs = blogs =>
    blogs.map((blog, index) => (
      <BlogPostWrapper key={index}>
        <Link route={`/blogs/${blog.slug}`}>
          <PostLink style={{ display: 'flex' }}>
            <img src={blog.imgLink} alt="" style={{ marginRight: '20px' }} />
            <div>
              <PostTitle>{blog.title}</PostTitle>
              <PostSubtitle>{shortenText(blog.subTitle)}</PostSubtitle>
              <PostMeta>
                Posted by {blog.author} on {moment(blog.createdAt).format('LL')}
              </PostMeta>
            </div>
          </PostLink>
        </Link>
      </BlogPostWrapper>
    ));

  render() {
    const { blogs } = this.props;

    return (
      <BaseLayout
        {...this.props.auth}
        headerType={'landing'}
        title="Matthew Clagett - Blogs"
      >
        <BlogPageWrapper>
          <Title>BLOGS</Title>
          <div>{this.renderBlogs(blogs)}</div>
        </BlogPageWrapper>
      </BaseLayout>
    );
  }
}

export default Blogs;
