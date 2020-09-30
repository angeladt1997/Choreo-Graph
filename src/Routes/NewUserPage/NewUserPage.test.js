import NewUserPage from './NewUserPage';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("NewUserPagePage", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><NewUserPage /></BrowserRouter>, div);
    });
  });