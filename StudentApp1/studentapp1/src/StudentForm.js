// StudentForm.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as FormBS } from 'react-bootstrap';

const StudentForm = (props) => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission (e.g., send data to backend)
        props.onFormSubmit(values); // Pass form values to parent component
        setSubmitting(false);
      }}
      initialValues={{
        name: '',
        phone: '',
        email: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        phone: Yup.string().min(10, 'Must be 10 characters').max(10, 'Must be 10 characters').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" as={FormBS.Control} />
          <ErrorMessage name="name" component={FormBS.Text} />

          <Field type="text" name="phone" placeholder="Phone" as={FormBS.Control} />
          <ErrorMessage name="phone" component={FormBS.Text} />

          <Field type="email" name="email" placeholder="Email" as={FormBS.Control} />
          <ErrorMessage name="email" component={FormBS.Text} />

          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;
