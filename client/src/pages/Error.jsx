import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque inventore fugit laborum, iure officia deleniti aspernatur itaque alias. Tenetur magni accusamus eveniet, eos suscipit cum tempore ullam quidem corrupti recusandae laborum eius nihil animi, accusantium sint. Dicta, harum enim soluta minus tenetur blanditiis, culpa architecto dolor maxime laborum similique aspernatur.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};