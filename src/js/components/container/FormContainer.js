import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input'

class FormContainer extends Component {

  constructor() {
    super();

    this.state = {
      seo_title: '',
    };
  }

  render() {
    return(
      <form id='article-form'>
        <Input
          text="SEO Title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={this.state.seo_title}
          handleChange={this.handleChange}
        />  
      </form>
    );
  }
}

export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
