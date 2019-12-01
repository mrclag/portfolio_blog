import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { toast } from 'react-toastify';
import { Container } from 'reactstrap';

import moment from 'moment';

import { getBlogById, updateBlog } from '../actions';

import { BlogDetailWrapper } from './styles/blogDetail.styles';

class BlogEditorUpdate extends Component {
  static async getInitialProps({ query }) {
    const blogId = query.id;
    let blog;

    try {
      blog = await getBlogById(blogId);
    } catch (e) {
      console.error(e);
    }
    return { blog };
  }

  constructor(props) {
    super(props);

    this.state = {
      isSaving: false
    };
  }

  updateBlog = (story, heading) => {
    const { blog } = this.props;

    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;

    this.setState({
      isSaving: true
    });

    updateBlog(updatedBlog, blog._id)
      .then(updatedBlog => {
        toast.success('Blog Saved Successfully!');
        this.setState({ isSaving: false });
      })
      .catch(err => {
        this.setState({ isSaving: false });
        const message = err.message || 'Server error!';
        toast.error('Unexpected error. Copy progress and refresh browser');
        console.error(message);
      });
  };

  render() {
    const { blog } = this.props;
    const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BlogDetailWrapper>
          <Container>
            <SlateEditor
              initialValue={blog.story}
              isLoading={isSaving}
              save={this.updateBlog}
            />
          </Container>
        </BlogDetailWrapper>
      </BaseLayout>
    );
  }
}

export default withAuth(BlogEditorUpdate, 'siteOwner');
