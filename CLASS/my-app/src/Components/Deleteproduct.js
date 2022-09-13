import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Deleteproduct() {
  let parameter = useParams();
//   console.log(parameter);
  var userid = parameter.xyz;

  let navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:3004/users/${userid}`)
    .then((res) => {
      console.log(res);
      navigate("/show");
    }).catch((err)=>{
        console.log(err)
    })
  });
  return (<div>

  </div>
  )

}

export default Deleteproduct;
