import React, { Component } from "react";
import axios from "axios";

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log("const");
    this.state = {
      name: "Akshay",
      api: [],
    };
    this.x1 = React.createRef();
  }

  componentDidMount() {
    console.log("did mount");
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        this.setState({ api: res.data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("completed");
      });
  }
  componentWillUnmount() {}

  myfunc() {
    console.log(this.x1);
    console.log(this.x1.current.value);
    this.setState({ name: this.x1.current.value });
  }

  render() {
    console.log("render");
    const API = this.state.api;
    return (
      <div>
        {/* <h1 className='container text-center display-2'>Lifecycle</h1> */}
        <div className="container">
          <div>
            {this.state.name}
            <input type="text" ref={this.x1} />
            <button
              onClick={() => {
                this.myfunc();
              }}
            >
              Enter
            </button>
          </div>

          <div className="row">
            {API.map((obj) => (
              <div className="col-3">
                <img src={obj.image} className="img-fluid" />
                <h2>{obj.price}</h2>
                <p>{obj.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
