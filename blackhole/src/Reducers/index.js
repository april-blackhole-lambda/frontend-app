import {ALL OF THE ACTIONS, ADD_SUCCESS } from '../Actions';


const initialAppState = {
    isLoggedIn: "false",
    isLoggingIn: "false",
    homePage: "false",
        username: [],
    userID: '',
    posts: [],

}

const initialPostsState = {
    posts: [],
    //crud
    error: null,
    adding: false,
    fetching: false,
    updating: false,
    deleting: false,

} 
export const reducer = (state = initialPostsState, action) => {
    switch(action.type) {
        case ADD_POST:
        return{
            ...state,
            adding: true
        };
        case ADD_SUCCESS:
        return{
            ...state,
            posts: [...state.posts, 
            {text: action.payload.text,
                id: action.payload.id,
                timeout: action.payload.timeout,
                expDate: action.payload.expDate,
            }
            ],
            adding: false,
        }
            
            }}
        }
    }
}
}
export default( state = initialAppState, action) => {
    switch(action.type){
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        case :
        return {
            ...state,
        }
        default:
        return state;
    }
}``