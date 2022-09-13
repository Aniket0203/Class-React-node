import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundry";
import ErrorBoundry from "./ErrorBoundry";
import Image from "./Image";

export default class ErrorExample extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <div className="col-3">
              <Image xyz="https://rukminim1.flixcart.com/image/200/200/l3nco7k0/shoe/1/5/4/6-71-dunkaston-white-original-imageq6x5bdrvj5b.jpeg?q=70" />
            </div>
          </ErrorBoundary>

          <ErrorBoundary>
            <div className="col-3">
              <Image xyz="https://rukminim1.flixcart.com/image/200/200/l3nco7k0/shoe/1/5/4/6-71-dunkaston-white-original-imageq6x5bdrvj5b.jpeg?q=70" />
            </div>
          </ErrorBoundary>

          <ErrorBoundary>
            <div className="col-3">
              <Image xyz="https://rukminim1.flixcart.com/image/200/200/l3nco7k0/shoe/1/5/4/6-71-dunkaston-white-original-imageq6x5bdrvj5b.jpeg?q=70" />
            </div>
          </ErrorBoundary>

          <ErrorBoundary>
            <div className="col-3">
              <Image xyz="" />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
