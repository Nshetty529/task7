// src/pages/Contact.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => (
  <div className="container my-5">
    <h2 className="text-primary">Contact Us</h2>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="my-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <Field name="message" as="textarea" rows="4" className="form-control" />
          <ErrorMessage name="message" component="div" className="text-danger" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Contact;
