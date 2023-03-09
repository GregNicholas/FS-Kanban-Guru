type AuthenticationProps = {
    children: JSX.Element
  }

const Authentication = ({children}: AuthenticationProps) => {
  return (
    <>
    <section className="flex flex-col md:flex-row max-w-4xl h-full max-h-[600px] mx-auto md:my-10 shadow-lg">
        <section className="flex-none md:flex-[1_1.1_0%] h-80 md:h-full relative bg-cover z-10 text-main-purple bg-[url('/assets/woods_background.jpg')]">
            <div className="absolute top-1/4 flex justify-center items-center text-4xl font-bold text-shadow shadow-white gap-1 w-full h-32 bg-white/[.6]">
            <img className="drop-shadow-lg" src="../assets/logo-dark.svg" />
            </div>
            <p className="credit absolute bottom-0 text-xs text-white text-center w-full">
            Photo by
            <a href="https://unsplash.com/@fabulu75">Fabrice Villard</a> on
            <a href="https://unsplash.com/">Unsplash</a>
            </p>
        </section>
        <section className="relative md:flex-[2_1_0%] text-main-purple bg-l-gray">
            <div className="px-10 pt-6 pb-4 font-bold text-base leading-snug">
            <p>
                Access the benefits of your very own kanban boards!
                Kanban Guru will turn all of your projects into manageable tasks.
            </p>
            <p className="mt-3">Let's get started <span className="italic">now</span>.</p>
            </div>
            <div className="w-full bg-white h-fit pt-4 pr-10 pb-7 pl-10">
                {children}
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