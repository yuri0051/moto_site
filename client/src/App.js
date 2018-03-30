import React from 'react';
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </div>
    );
  }
}