import React from "react";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/users-reducer";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/auth-reduser";
import {authAPI} from "../API/API";

export class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);

        authAPI.getAuthInfo()
            .then(data => {
                if(data.resultCode === 0){
                    let {userId, login, email} = data.data;
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