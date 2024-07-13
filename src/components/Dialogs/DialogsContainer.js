import {Dialogs} from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newPostText: state.messagesPage.newMessageText
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text)=> {
            dispatch(updateNewMessageBodyCreator(text))
        },
        sendMessage: ()=> {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);