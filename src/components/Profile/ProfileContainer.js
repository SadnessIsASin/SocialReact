import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

export class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/10")
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

export const ProfileConnect = connect(mapStateToProps,
    {setUserProfile}) (ProfileContainer);