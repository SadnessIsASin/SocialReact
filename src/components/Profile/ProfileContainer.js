import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {profileAPI} from "../API/API";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return <div>
            {/*берем пропсы, раскукоживаем и передаем*/}
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export const ProfileConnect = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));