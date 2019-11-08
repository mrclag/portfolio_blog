// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';
import PortInput from '../form/PortInput';

const validateInputs = values => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `${key} is required!`;
    }
  });

  return errors;
};

const PortFolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    {console.log(error)}
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />

          <Field type="text" name="blurb" label="Blurb" component={PortInput} />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />
          <Field
            type="text"
            name="githubLink"
            label="Github Link"
            component={PortInput}
          />
          <Field
            type="text"
            name="techUsed"
            label="Tech used"
            component={PortInput}
          />
          <Field
            type="text"
            name="imageUrl"
            label="Image URL"
            component={PortInput}
          />

          {error && <Alert color="danger">{error}</Alert>}
          <Button
            color="success"
            size="lg"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortFolioCreateForm;
