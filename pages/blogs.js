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
  BlogPageWrapper
} from './styles/blogs.styles';

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
      <Col
        key={index}
        md="8"
        style={{ border: '1px solid black', padding: '10px', margin: 'auto' }}
      >
        <Link route={`/blogs/${blog.slug}`}>
          <PostLink>
            <PostTitle>{blog.title}</PostTitle>
            <PostSubtitle>{shortenText(blog.subTitle)}</PostSubtitle>
          </PostLink>
        </Link>
        <PostMeta>
          Posted by {blog.author} on {moment(blog.createdAt).format('LL')}
        </PostMeta>
      </Col>
    ));

  render() {
    const { blogs } = this.props;
    return (
      <BaseLayout
        {...this.props.auth}
        headerType={'landing'}
        title="Matthew Clagett - Blogs"
      >
        <Container>
          <SiteHeading>
            <h1>Blogs</h1>
          </SiteHeading>
        </Container>
        <BlogPageWrapper>
          <Row>{this.renderBlogs(blogs)}</Row>
        </BlogPageWrapper>
      </BaseLayout>
    );
  }
}

export default Blogs;
