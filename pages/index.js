import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Index extends Component {
  static async getInitialProps() {
    let userData = {};
    // static means you can call without initializing new class
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (e) {
      console.log(e);
    }
    return { initialData: [1, 2, 3, 4], userData: userData };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: 'I am index page'
    };
  }

  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;
    return (
      <BaseLayout>
        <h1>Index Page from class component</h1>
      </BaseLayout>
    );
  }
}

export default Index;
