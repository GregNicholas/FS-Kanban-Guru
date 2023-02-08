import { useState } from "react"
import { useLocation } from 'react-router-dom'
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import Button from "../components/Button"

const Authentication = () => {
    const location = useLocation()
    const { action } = location.state
    const [formDisplay, setFormDisplay] = useState(action || "login")
  
  console.log("location state action? ", action, formDisplay)
  const matchPasswords = () => {
      console.log("placeholder for matchPasswords")
  }
  const validatePassword = () => {
    console.log("placeholder for validatePassword")
  }

  return (
    <>
    <section className="flex max-w-4xl max-h-full m-auto bg-main-purple">
        <section className="flex-[1_1.1_0%] relative bg-cover z-10 text-main-purple bg-[url('/assets/woods_background.jpg')]">
            <div className="absolute top-1/4 flex justify-center items-center text-4xl font-bold text-shadow shadow-white gap-1 w-full h-32 bg-white/[.6]">
            <img className="drop-shadow-lg" src="../assets/logo-dark.svg" />
            {/* <h1 className="hero-title-name">K Guru</h1> */}
            </div>
            <p className="credit absolute bottom-0 text-xs text-white text-center w-full">
            Photo by
            <a href="https://unsplash.com/@fabulu75">Fabrice Villard</a> on
            <a href="https://unsplash.com/">Unsplash</a>
            </p>
        </section>
        <section className="relative flex-[2_1_0%] text-main-purple bg-l-gray">
            <div className="px-10 pt-12 pb-8 font-bold text-base leading-snug">
            <p>
                Sign up to access all the benefits of your very own kanban boards!
                Kanban Guru will turn all of your projects into manageable tasks.
            </p>
            <p>Sign up <span className="italic">now</span>&nbsp; to get started.</p>
            <p className="mt-5">You <span className="italic">know</span>&nbsp; you want to.</p>
            </div>
            <div className="w-full bg-white h-64 pt-4 pr-10 pb-7 pl-10">
                {action === "register" ? <Register matchPasswords={matchPasswords} validatePassword={validatePassword} /> : <Login matchPasswords={matchPasswords} validatePassword={validatePassword}/>}
            </div>
            <div id="message" className="hidden">
                <h3>Password must contain the following:</h3>
                <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                <p id="capital" className="invalid">
                    A <b>capital (uppercase)</b> letter
                </p>
                <p id="number" className="invalid">A <b>number</b></p>
                <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                <p id="match" className="invalid">Passwords must match</p>
            </div>
        </section>
    </section>
    </>
  )
}
export default Authentication