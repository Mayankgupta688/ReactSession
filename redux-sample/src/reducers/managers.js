export default function(state=[], action) {
    if(action.type == "ADD_MANAGER") {
        return [action.payload, ...state];
    } else {
        return state;
    }
}