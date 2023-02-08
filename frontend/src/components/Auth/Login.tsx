import {useState, useEffect} from 'react'
import Button from "../Button"

interface AuthProps {
  matchPasswords: () => void,
  validatePassword: () => void
}

const Login = ({matchPasswords, validatePassword}: AuthProps) => {
  return (
    <>
    {/* <form action="#" id="form-register">
            <h2 className="form-title">Let's do this!</h2>
            <div className="inputs-all">
                <div className="input-block">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" required />
                </div>
                
                <div className="input-block">
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" required />
                </div>
               
                <div className="input-block">
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    onkeyup="validatePassword()"
                    required
                />
                </div>
                <div className="input-block">
                <label htmlFor="password-confirm">confirm password</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    id="password-confirm"
                    minLength={8}
                    onkeyup="matchPasswords()"
                    required
                />
                </div>
            </div>
            </form> */}
    </>
  )
}
export default Login