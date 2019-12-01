import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { getBlogBySlug } from '../actions';
import { Row, Col, Container } from 'reactstrap';

import { BlogDetailWrapper } from './styles/blogDetail.styles';

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
          <Container>
            <Row>
              <Col md={{ size: 8, offset: 2 }}>
                <div dangerouslySetInnerHTML={{ __html: blog.story }}></div>
              </Col>
            </Row>
          </Container>
        </BlogDetailWrapper>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
