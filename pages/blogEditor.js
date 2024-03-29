import React, { Component, useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { Router } from '../routes';
import { toast } from 'react-toastify';

import { createBlog } from '../actions';

import { BlogDetailWrapper } from '../styles/blogDetail.styles';

const BlogEditor = props => {
  const [isSaving, setIsSaving] = useState(false);

  const saveBlog = (story, heading) => {
    const blog = {};
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;
    blog.imgLink = heading.imgUrl;
    console.log(blog.imgLink);
    console.log(blog);

    setIsSaving(true);

    createBlog(blog)
      .then(createdBlog => {
        toast.success('Blog Saved Successfully!');
        setIsSaving(false);
        Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
      })
      .catch(err => {
        setIsSaving(false);
        toast.error('Unexpected error. Copy progress and refresh browser');
        console.error(err.message || 'Server error!');
      });
  };
  return (
    <BaseLayout {...props.auth}>
      <BlogDetailWrapper>
        <SlateEditor isLoading={isSaving} save={saveBlog} />
      </BlogDetailWrapper>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor, 'siteOwner');
