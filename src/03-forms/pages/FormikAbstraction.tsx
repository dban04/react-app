import { Formik, Form} from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Component abstraction</h1>
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
              <MyTextInput 
                label="First Name"
                name="firstName"
                placeholder='nestor'
              />
              <MyTextInput 
                label="Last Name"
                name="lastName"
                placeholder='diaz'
              />
              <MyTextInput 
                label="Email"
                name="email"
                placeholder='example@gmail.com'
                type="email"
              />

              <MySelect
                label="Job Type"
                name="jobType"  
              >
                <option value="">Pick One</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </MySelect>

              <MyCheckbox 
                label={'Terms & conditions'} 
                name={'terms'}              
              />

              <button type="submit">send</button>
            </Form>
          )
        }        
      </Formik>
      

    </div>
  )
  
}

