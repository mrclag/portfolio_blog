import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortButtonDropdown from '../components/ButtonDropdown';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link, Router } from '../routes';
import { getUserBlogs, updateBlog, deleteBlog } from '../actions';
import moment from 'moment';

class UserBlogs extends Component {
  static async getInitialProps({ req }) {
    let blogs = [];
    try {
      blogs = await getUserBlogs(req);
    } catch (err) {
      console.error(err);
    }

    return { blogs };
  }

  changeBlogStatus(status, blogId) {
    updateBlog({ status }, blogId)
      .then(() => {
        Router.pushRoute('/userBlogs');
      })
      .catch(err => console.error(err));
  }

  deleteBlogWarning(blogId) {
    const res = confirm('Are you sure you want to delete this blog post?');
    if (res) {
      this.deleteBlog(blogId);
    }
  }

  deleteBlog(blogId) {
    deleteBlog(blogId)
      .then(status => {
        Router.pushRoute('/userBlogs');
      })
      .catch(err => console.error(err.message));
  }

  separateBlogs(blogs) {
    const published = [];
    const drafts = [];

    blogs.forEach(blog => {
      blog.status === 'draft' ? drafts.push(blog) : published.push(blog);
    });

    return { published, drafts };
  }

  createStatus = status => {
    return status === 'draft'
      ? { view: 'Publish Story', value: 'published' }
      : { view: 'Make a draft', value: 'draft' };
  };

  dropdownOptions = blog => {
    const status = this.createStatus(blog.status);
    return [
      {
        text: status.view,
        handlers: {
          onClick: () => this.changeBlogStatus(status.value, blog._id)
        }
      },
      {
        text: 'Delete',
        handlers: { onClick: () => this.deleteBlogWarning(blog._id) }
      }
    ];
  };

  renderBlogs(blogs) {
    return (
      <ul className="user-blogs-list">
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link route={`/blogs/${blog._id}/edit`}>
              <a>{blog.title}</a>
            </Link>
            <PortButtonDropdown items={this.dropdownOptions(blog)} />
            <div className="updatedAt">
              {moment(blog.updatedAt).format('lll')}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { blogs } = this.props;
    const { published, drafts } = this.separateBlogs(blogs);
    return (
      <BaseLayout {...this.props.auth} headerType={'landing'}>
        <div
          className="masthead"
          style={{ backgroundImage: "url('/static/images/home-bg.jpg')" }}
        >
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Blogs</h1>
                  <span className="subheading">
                    <Link route="/blogs/new">
                      <Button color="primary">Create new blog</Button>
                    </Link>
                    <Link route="/blogs">
                      <Button color="primary">View Blogs</Button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-user-page">
          <Row>
            <Col md="6" className="mx-auto text-center">
              <h2 className="blog-status-title"> Published Blogs</h2>
              {this.renderBlogs(published)}
            </Col>
            <Col md="6" className="mx-auto text-center">
              <h2 className="blog-status-title">Draft Blogs</h2>
              {this.renderBlogs(drafts)}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(UserBlogs, 'siteOwner');
