import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='app-footer'>
        <a href='http://coreui.io'>Admin OPT</a> &copy; 2020
        <span className='float-right'>
          Powered by <a href='http://www.ezhara.com/'>OndemandLAB</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
