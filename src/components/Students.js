import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <div>
     <button >
          <Link to="/Aranka">
          Click here to see individual student
          </Link>
          <div className="imageBox">
            <img
              src="/assets/user.png"
              alt="profilePic"
            ></img>
          </div>
        </button>
        <button >
          <Link to="/Aranka">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Evelyn">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Floris">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Hector">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Martina">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Maurits">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Rahima">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Sandra">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Storm">
          Click here to see individual student
          </Link>
        </button>
        <button >
          <Link to="/Wietske">
          Click here to see individual student
          </Link>
        </button>
    </div>
  );
}
export default Students;
