import { NavLink, useRouteError } from "react-router-dom"


const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  
  return <section className="erorPage">
    <div className="erorPage-container">
      <h2>Oops! An Error Occured</h2>
      <p>{error && error.status}</p>
      <NavLink className="homeBtn" to="/">Go Home</NavLink>
    </div>
  </section>
}

export default ErrorPage
