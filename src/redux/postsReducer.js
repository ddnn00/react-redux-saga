import { CREATE_POST, DELETE_POST } from "./types"

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        case DELETE_POST:
            return {...state, posts: state.posts.filter((data, i) => data.id !== action.payload )}
        default: return state
    }
}