import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponent = () => {

  return (
    <div>
      <h1>Formik Component Tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ ( values ) => {
          console.log(values)
        }}
        validationSchema={ Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .min(2, 'Must be 2 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean()
            .oneOf([true], 'The terms must be accepted'),
          jobType: Yup.string()
            .notOneOf(['other'], 'You must select a job type')
            .required('Required')
        }) 
      }>
        {
          ( formik ) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field 
                name="firstName"
                type="text"
              />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field 
                name="lastName"
                type="text"
              />
              <ErrorMessage name="lastName" component="span" />
           
              <label htmlFor="email">Email</label>
              <Field 
                name="email"
                type="email"
              />
              <ErrorMessage name="email" component="span" />

              <label>jobType</label>
              <Field name="jobType" as="select">
                <option value="">Pick One</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label>
                <Field 
                  name="terms"
                  type="checkbox"
                />
                Terms and Conditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button type="submit">send</button>
            </Form>
          )
        }        
      </Formik>
      

    </div>
  )
  
}

