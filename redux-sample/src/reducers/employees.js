export default function(state=[], action) {
    if(action.type == "ADD_EMPLOYEE") {
        return [action.payload, ...state];
    } else {
        return state;
    }
}