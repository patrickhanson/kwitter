import { LOGIN, REGISTER, NEW_POST, LIKE, DELETE_MESSAGE } from './Types'

const initialState = { messages: [] }
export default function (state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return console.log("are we getting here?")

        case REGISTER:
            break;

        case NEW_POST:
            break;

        case LIKE:
            break;

        case DELETE_MESSAGE:
            break;
    }
}