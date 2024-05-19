
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {
    const { 
        formData, onChangeInput, resetForm, isValidEmail,
        name, email, password, repeatPassword    
    } = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log( formData );
    }

    
    
    return (
      <div>
          <h1>Register Page</h1>

          <form noValidate onSubmit={ onSubmit }>
              <input 
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={ name }
                  onChange={ onChangeInput }
                  className={ `${ name.trim().length <= 0 && 'has-error'}` }
              />
              { name.trim().length <= 0 && <span> Este campo es necesario</span> }

              <input 
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={ email }
                  onChange={ onChangeInput }
                  className={ `${ !isValidEmail( email ) && 'has-error'}` }
              />
              { !isValidEmail( email ) && <span> Email No Valido</span> }

              <input 
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={ password }
                  onChange={ onChangeInput }
              />
              { password.trim().length <= 0 && <span> Este campo es necesario</span> }
              { password.trim().length < 6 && password.trim().length > 0 && <span> Este campo es necesario</span> }
              <input 
                  type="password"
                  placeholder="Repeat Password"
                  name="repeatPassword"
                  value={ repeatPassword }
                  onChange={ onChangeInput }
              />
              { password.trim().length <= 0 && <span> Este campo es necesario</span> }
              { password.trim().length > 0 &&password !== repeatPassword && <span> Las contraseñas no coinciden</span> }

              <button type="submit">
                  Create
              </button>
              <button type="button" onClick={ resetForm } >
                  Reset
              </button>
          </form>
      </div>
    )
}   
