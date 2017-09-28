import React from 'react';

class AuthPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <button onClick="do something">login with google</button>
      </div>
    );
  }
}

export default AuthPage;
