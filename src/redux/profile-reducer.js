const UPDATE_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, author: 'Светлана Красных', message: 'Красотка, привет! Как ты?', likeCount: 4},
        {id: 2, author: 'Лиана Мун', message: 'Давай встретимся сегодня вечером?', likeCount: 15},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return ({
                ...state,
                posts: [...state.posts, {id: 1, author: 'Светлана Красных', message: state.newPostText, likeCount: 0}],
                newPostText: ''
            });
        }

        case UPDATE_TEXT: {
            return ({
                    ...state,
                    newPostText: action.newText
                }
            );
        }

        case SET_USER_PROFILE : {
            return ({...state, profile: action.profile})
        }

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});