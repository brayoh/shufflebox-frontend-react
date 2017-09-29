import React from 'react';
import PropTypes from 'prop-types';
import HomeNav from './HomeNav.js';
import Content from './Content.js';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {
      history
    } = this.props;
    return (
      <div>
        <HomeNav />
        <Content history={history}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object
};

export default HomePage;
