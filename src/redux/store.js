// import {profileReducer} from "./profile-reducer";
// import {dialogsReducer} from "./dialogs-reducer";
// import {sidebarReducer} from "./sidebar-reducer";
//
// export let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, author: 'Светлана Красных', message: 'Красотка, привет! Как ты?', likeCount: 4},
//                 {id: 2, author: 'Лиана Мун', message: 'Давай встретимся сегодня вечером?', likeCount: 15},
//             ],
//             newPostText: ''
//         },
//         messagesPage: {
//             dialogs: [
//                 {id: 1, name: 'Павел Сундиков'},
//                 {id: 2, name: 'Александр Ватутин'},
//                 {id: 3, name: 'Дмитрий Петров'},
//                 {id: 4, name: 'Петр Александров'},
//                 {id: 5, name: 'Алексей Васильев'},
//                 {id: 6, name: 'Василий Алексеев'}
//             ],
//             messages: [
//                 {id: 1, message: 'Привет'},
//                 {id: 2, message: 'Привет'},
//                 {id: 3, message: 'Привет'},
//                 {id: 4, message: 'Привет'},
//                 {id: 5, message: 'Привет'},
//                 {id: 6, message: 'Привет'}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {
//             myFriends: [
//                 {
//                     id: 1,
//                     url: 'https://avatars.dzeninfra.ru/get-zen_doc/2424254/pub_5ecb912271f6bb078b0d544f_5ecb9e32cdaa790dc5dae284/scale_1200',
//                     name: 'Павел'
//                 },
//                 {
//                     id: 2,
//                     url: 'https://avatars.dzeninfra.ru/get-zen_doc/2424254/pub_5ecb912271f6bb078b0d544f_5ecb9e32cdaa790dc5dae284/scale_1200',
//                     name: 'Алексей'
//                 },
//                 {
//                     id: 3,
//                     url: 'https://avatars.dzeninfra.ru/get-zen_doc/2424254/pub_5ecb912271f6bb078b0d544f_5ecb9e32cdaa790dc5dae284/scale_1200',
//                     name: 'Дмитрий'
//                 },
//             ]
//         }
//     },
//
//     _callSubsriber() {
//         console.log('State is change');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         store._callSubsriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._callSubsriber(this._state);
//     }
// }