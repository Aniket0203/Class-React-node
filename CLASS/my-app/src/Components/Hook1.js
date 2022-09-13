import React, { useRef, useState } from "react";

export default function Hook1(props) {
  var [count, setCount] = useState(100);
  var [brand, setBrand] = useState(["nike", "abbibas"]);
  var [user, setUser] = useState({ name: "akshay", age: 20 });

  const text1 = useRef();
  const text2 = useRef();

  console.log(props);

  const myfunc = () => {
    console.log("test");

    setCount(300);
  };
  const myfunc1 = function () {
    setCount(400);
  };

  const myfunc2 =() =>{
    setBrand(["Nike New", "puma New"]);
    setUser({ name: "akshay shah", age: 10 });
     setUser({age:10})
    setUser({ ...user, age: 10 });
  };

  const myfunc3 =()=> {
    var rec1 = text1.current.value;
    var rec2 = text2.current.value;

    setUser({name:rec1,age:rec2})
  };
  return (
    <div className="container">
      <p>count value :{count}</p>
      <p>Age:{props.age}</p>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(200);
          }}
        >
          {" "}
          Change
        </button>
      </p>
      <p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            myfunc();
          }}
        >
          Change
        </button>
      </p>
      <p>
        <button className="btn btn-danger" onClick={myfunc1}>
          change
        </button>
      </p>
      <p>
        {brand[0]},{brand[1]}
      </p>

      <p>
        {user.name},{user.age}
      </p>
      <p>
        <button className="btn btn-dark" onClick={myfunc2}>
          change
        </button>
      </p>
      <hr />
      <p>
        <input type="text" ref={text1} />
        <br />
        <input type="text" ref={text2} />
        <br />
      </p>

      <p>
        <button className="btn btn-dark" onClick={myfunc3}>
          {" "}
          change
        </button>
      </p>
    </div>
  );
}
