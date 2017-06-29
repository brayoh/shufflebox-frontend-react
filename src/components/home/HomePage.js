import React from 'react';
import BrownBag from './shuffleView/BrownBagView/BrownBag';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header ">
          <header className="mdl-layout__header">
            <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
              <a href="#brownbag" className="mdl-layout__tab is-active">BrownBag</a>
              <a href="#secretsanta" className="mdl-layout__tab">Secret Santa</a>
              <a href="#hangouts" className="mdl-layout__tab">Hangouts</a>
            </div>
          </header>
          <div className="settings-panel">
            <button id="demo-menu-lower-right"
                className="mdl-button mdl-js-button mdl-button--icon settings-button "
              >
                <i className="material-icons">more_horiz</i>
              </button>
              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="demo-menu-lower-right">
              <li className="mdl-menu__item">Some Action(Logout button)</li>
              <li className="mdl-menu__item">Another Action</li>
              <li className="mdl-menu__item">Yet Another Action</li>
            </ul>
          </div>
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="brownbag">
              <div className="page-content">
                <BrownBag />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="secretsanta">
              <div className="page-content">
                <p>Coming soon...after brown bag</p>
                {/* add the component for secret santa here*/}
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="hangouts">
              <div className="page-content">
                <p>Coming later...after soon has already come...</p>
                {/* add the component for hangouts here*/}
              </div>
            </section>
          </main>
         </div>
    );
  }
}

export default HomePage;
