import { Link } from "react-router-dom"

function PagenotFound() {
    return <div className='container'>
        <div className="todo-app"> <img alt="Page not found" src="assets/404.jpg" /><br /><Link to="/"> <button className="">
            Go To Home page
        </button></Link></div></div>
}

export default PagenotFound