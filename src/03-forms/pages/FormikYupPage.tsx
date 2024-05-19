import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {

  const { handleReset, handleSubmit, errors,
          touched, 
          getFieldProps
        } = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: ( values ) => {
      console.log(values)
    },
    validationSchema: Yup.object({
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
    })
  })
  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={ handleSubmit } noValidate>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          { ...getFieldProps('firstName') }
        />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          { ...getFieldProps('lastName') }
        />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email</label>
        <input 
          type="email"
          { ...getFieldProps('email') }
        />
        { touched.lastName && errors.email && <span>{ errors.email }</span> }

        <button type="submit">send</button>
        <button onClick={ handleReset }>reset</button>
      </form>

    </div>
  )
  
}

