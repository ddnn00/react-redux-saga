import { CREATE_POST, CREATE_MUSIC } from "./types"

const initialState = {
    posts: [],
    fetchedPosts: [],
    musics
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        case 
        default: return state
    }
    
    return state
}