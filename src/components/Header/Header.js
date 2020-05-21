import React, { Component } from 'react';
import {
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  Container,
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  // mobileSidebarToggle(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-mobile-show');
  // }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className='app-header navbar'>
        {/* 
        <NavbarToggler className='d-lg-none' onClick={this.mobileSidebarToggle}>
          &#9776;
        </NavbarToggler> 
        */}
        <NavbarBrand href='#'></NavbarBrand>
        {/* 
        <NavbarToggler
          className='d-md-down-none mr-auto'
          onClick={this.sidebarToggle}
        >
          &#9776;
        </NavbarToggler> 
        */}

        {/* Top Nav */}
        <div className='navWrap'>
          <Nav className='' navbar>
            <NavItem>
              <NavLink href='#' className='p-3 active'>
                가맹점관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                리스트관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                거래관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                재고관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                회원관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                콘텐츠관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                메시지/푸시관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                견적요청관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                예약/결제관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                정산관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                통계
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#' className='p-3'>
                관리자권한
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </header>
    );
  }
}

export default Header;
