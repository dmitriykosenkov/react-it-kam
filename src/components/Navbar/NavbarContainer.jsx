import React from "react";
import { connect } from 'react-redux';
import { setFriends, toggleIsFetching } from "../../redux/sidebar-reducer";
import Navbar from './Navbar';
import { sidebarAPI } from "../../api/api";
import Preloader from "../commons/preloader/preloader";

class NavbarClass extends React.Component {

   componentDidMount() {
      
      this.props.toggleIsFetching(true)
      sidebarAPI.getFriends(this.props.pageSize)
         .then(data => {
            debugger
            this.props.toggleIsFetching(false)
            this.props.setFriends(data.items)
         })
   }

   render() {
      // debugger
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Navbar
            friends={this.props.friends}
         />
      </>
   }
}


let mapStateToProps = (state) => {
   return {
      friends: state.sidebar.friends,
      pageSize: state.sidebar.pageSize,
      isFetching: state.sidebar.isFetching
   }
}

const NavbarContainer = connect(mapStateToProps, { setFriends, toggleIsFetching })(NavbarClass)


export default NavbarContainer;