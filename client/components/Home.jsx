import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };

  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  render() {
    const { mounted } = this.state;
    return (
      <div>
        <h2>Home component</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        {mounted && <small>I will only appear if the component has been mounted</small>}
      </div>
    );
  }

}

export default Home;
