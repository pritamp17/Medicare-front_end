import React from "react";
import MedicalHistory from "../../components/MedicalHistory";
import { useDispatch, useSelector } from "react-redux";

const history = () => {
  const session = useSelector((state) => state);
  const data = session.data.login;

  if (data) {
    if (data.isDoctor === true) {
      Router.push("/doctors");
      return <h4>Redirecting you to doctor's page</h4>;
    }
  } else {
    Router.push("/");
    return <h4>Redirecting to home page.</h4>;
  }
  return (
    <div>
      <MedicalHistory appointments={data ? data.appointments : null}/>
    </div>
  );
};

export default history;
