import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate} from "react-router-dom"

import { FormikAbstraction, FormikBasicPage, FormikComponent, FormikYupPage, RegisterPage } from "../03-forms/pages"
import logo from "../logo.svg"

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo" />
                <ul>
                    <li>
                        <NavLink to='/register' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-basic' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-yup' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik-Yup </NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-component' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik-Component</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formik-abstraction' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik-Abstrsaction</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' className={ ({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/register" element={ <RegisterPage />} />
                <Route path="/formik-basic" element={ <FormikBasicPage />}/> 
                <Route path="/formik-yup" element={ <FormikYupPage />}/> 
                <Route path="/formik-component" element={ <FormikComponent />}/> 
                <Route path="/formik-abstraction" element={ <FormikAbstraction />}/> 
                <Route path="/" element={ <h1>Home Page</h1> } />

                <Route path="/*" element={ <Navigate to="/home replace" /> } />
            </Routes>
            
        </div>      
    </BrowserRouter>
  )
}
