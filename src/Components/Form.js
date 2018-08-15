import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Form.js';
import './skeleton.css'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country:""
    };
  }

  render() {
    return (
       <div class="five columns" align="center">
      <label for="exampleEmailInput">Weather</label>
      <input class="u-center-block" type="text" placeholder="Ciudad" id="exampleEmailInput"/>
      <input class="u-center-block" type="text" placeholder="Pais" id="exampleEmailInput"/>
      <input class="button-primary u-center-block" type="button" value="Obtener Clima"/>
    </div>
      
    );
  }
}

export default Form;