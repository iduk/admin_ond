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
        <NavbarToggler className='d-lg-none' onClick={this.mobileSidebarToggle}>
          &#9776;
        </NavbarToggler>
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
        <Nav className='mr-auto topNav' navbar>
          <NavItem className='px-3'>
            <NavLink href='#'>메인홈</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>가맹점 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>리스트 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>거래 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>재고 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>회원 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>콘텐츠 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>메시지/푸시관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>견적 요청 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>예약/결제 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>정산 관리</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>통계</NavLink>
          </NavItem>
          <NavItem className='px-3'>
            <NavLink href='#'>관리자 권한</NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
