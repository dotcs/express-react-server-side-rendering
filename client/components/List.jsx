import PropTypes from 'prop-types';
import React, { Component } from 'react';

class List extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ul>
        { this.state.items.map(item => (
          <li key={item.id}>{item.name} &lt;{item.email}&gt;</li>
        )) }
      </ul>
    );
  }
}

List.contextTypes = {
  data: PropTypes.object
};

export default List;
