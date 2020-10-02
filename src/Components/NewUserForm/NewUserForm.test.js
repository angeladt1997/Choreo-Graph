import NewUserForm from './NewUserForm';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("NewUserForm", () => {
    it("form renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><NewUserForm /></BrowserRouter>, div);
    });
  });