import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'
import { MyTextInput } from '../components'

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
             initialValues={{
                 name: '',
                 email: '',
                 password: '',
                 password2: '',
             }}

             onSubmit={ ( values ) => {
                 console.log(values)
             } }

             validationSchema={ Yup.object({
                 name: Yup.string()
                    .min(2, 'Must be 2 characters or more')
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                 email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                 password: Yup.string()
                    .required('No password provided.')
                    .min(6, 'Password is too short - should be 6 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                 password2: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
             }) }
            >
                {
                    ( formik ) => (
                        <Form>
                            <MyTextInput 
                                label='name' 
                                name='name'                       
                            />
                            <MyTextInput 
                                label='email' 
                                name='email'                        
                            />
                            <MyTextInput 
                                label='password' 
                                name='password'     
                                type='password'                   
                            />
                            <MyTextInput 
                                label='password' 
                                name='password2'                        
                                type='password'
                            />
                            <button type="submit">send</button>
                            <button onClick={ formik.handleReset }>reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}   
