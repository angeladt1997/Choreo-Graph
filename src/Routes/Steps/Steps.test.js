import Steps from './Steps';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe("Steps", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<BrowserRouter><Steps match={{params: {id: 1}}}/></BrowserRouter>, div);
    });
  });