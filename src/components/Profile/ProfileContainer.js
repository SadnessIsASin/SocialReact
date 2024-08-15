import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

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
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
            this.props.setUserProfile(response.data);
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