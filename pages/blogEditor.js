import React, { Component, useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import { Router } from '../routes';
import { toast } from 'react-toastify';

import { createBlog } from '../actions';

const BlogEditor = props => {
  const [isSaving, setIsSaving] = useState(false);

  const saveBlog = (story, heading) => {
    const blog = {};
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;

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
      <BasePage containerClass="editor-wrapper" className="blog-editor-page">
        <SlateEditor isLoading={isSaving} save={saveBlog} />
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor, 'siteOwner');
