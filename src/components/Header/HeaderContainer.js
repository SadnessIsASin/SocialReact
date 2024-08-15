import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/users-reducer";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reduser";

export class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                debugger;
                if(response.data.resultCode === 0){
                    let {userId, login, email} = response.data.data;
                    this.props.setAuthUserData(userId, login, email);
                }
                this.props.toggleIsFetching(false);
            })
    }

    render(){
        return <>
            <Header {...this.props}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return{
        login: state.auth.login,
        auth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}

export const HeaderConnector = connect(mapStateToProps, {
    setAuthUserData,toggleIsFetching
})(HeaderContainer);