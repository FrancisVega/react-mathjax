import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import MathJax from "react-mathjax2";

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;

const K = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .mjx-chtml {
    margin-top: 64px;
    font-size: 72px !important;
  }
`;

const Input = styled.input`
  font-size: 32px;
  height: 32px;
  border: 0;
  border-top: 1px solid #f0f0f2;
  margin-top: 160px;
  padding-top: 64px;
  outline: 0;
  color: gray;
  &:focus {
    border: 0;
  }
`;

class App extends Component {
  state = {
    latex: tex
  };

  inputHandler = e => {
    this.setState({ latex: e.target.value });
  };

  render() {
    return (
      <K>
        <MathJax.Context
          input="tex"
          options={{
            showProcessingMessages: false,
            TeX: {
              TagSide: "right"
            }
          }}
        >
          <MathJax.Node inline>{this.state.latex}</MathJax.Node>
        </MathJax.Context>
        <Input
          placeholder="Dale a las Maths"
          value={this.state.latex}
          onChange={this.inputHandler}
        />
      </K>
    );
  }
}

export default App;
