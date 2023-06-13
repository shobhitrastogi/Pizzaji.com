import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="container text-center mt-2">
        <h1>Contact Now</h1>
      </div>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Contact Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link className="nav-link" to="/menu">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
           </Link>
        </form>
      </div>
    </>
  );
};

export default Contact;
