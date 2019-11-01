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

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }
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
          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />
          <Field
            type="text"
            name="position"
            label="Position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
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

// import React from 'react';

// export default class PortfolioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: '', description: '', language: '' };
//   }

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = event => {
//     alert(
//       'A name was submitted: ' +
//         this.state.title +
//         ' ' +
//         this.state.description +
//         ' ' +
//         this.state.language
//     );
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             name="title"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <label>
//             Description
//             <textarea
//               name="description"
//               value={this.state.description}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             {' '}
//             Pick your favorite Language
//             <select
//               name="language"
//               value={this.state.language}
//               onChange={this.handleChange}
//             >
//               <option value="python">Python</option>
//               <option value="javascript">Javascript</option>
//               <option value="r">R</option>
//               <option value="c">C</option>
//             </select>
//           </label>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
