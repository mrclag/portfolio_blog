import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import withAuth from '../components/hoc/withAuth';
import PortButtonDropdown from '../components/ButtonDropdown';
import { Link, Router } from '../routes';
import { getUserBlogs, updateBlog, deleteBlog } from '../actions';
import moment from 'moment';

import DropdownMenu from '../components/DropdownMenu';

import {
  SiteHeading,
  UserBlogList,
  BlogStatusCol,
  BlogStatusTitle,
  BlogPageWrapper,
  BlogList,
  Button
} from '../styles/userBlogs.styles';

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
        value: status.view,
        handlers: () => this.changeBlogStatus(status.value, blog._id)
      },
      {
        value: 'Delete',
        handlers: () => this.deleteBlogWarning(blog._id)
      }
    ];
  };

  renderBlogs(blogs) {
    return (
      <UserBlogList>
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link route={`/blogs/${blog._id}/edit`}>
              <a>{blog.title}</a>
            </Link>
            <PortButtonDropdown items={this.dropdownOptions(blog)} />
            <div style={{ fontSize: '0.5em' }}>
              {moment(blog.updatedAt).format('lll')}
            </div>
          </li>
        ))}
      </UserBlogList>
    );
  }

  render() {
    const { blogs } = this.props;
    const { published, drafts } = this.separateBlogs(blogs);
    return (
      <BaseLayout {...this.props.auth} headerType={'landing'}>
        <SiteHeading>
          <h1>Blogs</h1>
          <Link route="/blogs/new">
            <Button>CREATE</Button>
          </Link>
          <Link route="/blogs">
            <Button>VIEW</Button>
          </Link>
        </SiteHeading>
        <BlogPageWrapper>
          <DropdownMenu
            items={[
              { key: 'o1', value: 'Option 1' },
              { key: 'o2', value: 'Option 2' }
            ]}
          />
          <BlogList>
            <BlogStatusTitle>Published Blogs</BlogStatusTitle>
            {this.renderBlogs(published)}
          </BlogList>
          <BlogList>
            <BlogStatusTitle>Draft Blogs</BlogStatusTitle>
            {this.renderBlogs(drafts)}
          </BlogList>
        </BlogPageWrapper>
      </BaseLayout>
    );
  }
}

export default withAuth(UserBlogs, 'siteOwner');
