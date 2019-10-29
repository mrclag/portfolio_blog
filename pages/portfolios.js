import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import axios from 'axios';
import Link from 'next/link';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';

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
        <Col md="4">
          <React.Fragment key={i}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">
                  Some Position {i}
                </CardHeader>
                <CardBody>
                  <p className="portfolio-card-city"> Some Location {i} </p>
                  <CardTitle className="portfolio-card-title">
                    Some Company {i}
                  </CardTitle>
                  <CardText className="portfolio-card-text">
                    Some Description {i}
                  </CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
      );
    });
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Portfolios" className="portfolio-page">
          <Row>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
