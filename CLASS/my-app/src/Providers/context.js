import React from "react";

var contextObj=React.createContext();

var Provider =contextObj.Provider;
var Consumer =contextObj.Consumer;

export {
    Provider,
    Consumer
};