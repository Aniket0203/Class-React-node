import axios from "axios";
import React, { useState, useRef, useEffect, useCallback } from "react";

export default function Hook2() {
  var [count, setCount] = useState(1);
  var [mark, setMark] = useState(100);
  // useEffect(()=>{
  //     console.log("useEffect",Math.random());
  // })

  // useEffect(()=>{
  //     console.log("useEffect",Math.random());
  // },[])

  // useEffect(()=>{
  //     console.log("useEffect",Math.random());
  // },[mark])

  // useEffect(()=>{
  //     console.log("useEffect",Math.random());
  // },[mark])

  const [api, setapi] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setapi(res.data);
    });
  }, []);

  const myfunc = () => {
    // setCount(count+1)
    setMark(mark + 1);
  };

  return (
    <div>
      <p>count:{count}</p>

      <p>mark:{mark}</p>

      <p>
        <button onClick={myfunc} className="btn btn-danger">
          Enter
        </button>
      </p>

      {api &&
        api.map((obj) => (
          <>
            <h2>
              {obj.id}.{obj.title}
            </h2>
            <hr />
          </>
        ))}
    </div>
  );
}
