const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Павел Сундиков'},
        {id: 2, name: 'Александр Ватутин'},
        {id: 3, name: 'Дмитрий Петров'},
        {id: 4, name: 'Петр Александров'},
        {id: 5, name: 'Алексей Васильев'},
        {id: 6, name: 'Василий Алексеев'}
    ],
    messages: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Привет'},
        {id: 5, message: 'Привет'},
        {id: 6, message: 'Привет'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return (
                {
                    ...state,
                    messages: [...state.messages, {id: 7, message: state.newMessageText}],
                    newMessageText: ''
                }
            );

        case UPDATE_MESSAGE: {
            return ({
                ...state,
                newMessageText: action.newText
            });
        }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_MESSAGE,
    newText: text
});

