import React, { Component } from 'react';
import './loader-button.scss';

export default class LoaderButton extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    this.submitForm = this.submitForm.bind(this);
    this.getLoader = this.getLoader.bind(this);
  }

  submitForm(e) {
    e.preventDefault()
    this.setState({isLoading: !this.state.isLoading})
  }

  getLoader() {
    if (this.state.isLoading) {
      return (<span className="loading-spinner"></span>);
    } else {
      return ("Submit");
    }
  }

  render() {
    return (
      <form>
        <div className="control">
          <button
            className={`loader-button ${this.state.isLoading? "is-loading" : ""} rectangle-primary-action`}
            type="submit"
            onClick={this.submitForm}
            >
            {this.getLoader()}
          </button>
        </div>
      </form>
    );
  }
}
