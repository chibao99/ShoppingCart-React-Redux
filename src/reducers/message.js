import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';
var initialState = Message.MES_WELCOME;
const message = (state = initialState,action)=>{
    switch(action.type){
        case Types.CHANE_MESSAGE:
            return action.message;
        default: return state;
    }
}
export default message;