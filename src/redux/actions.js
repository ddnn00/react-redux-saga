import { CREATE_MUSIC, CREATE_POST } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function createMusic(music) {
    return {
        type: CREATE_MUSIC,
        payload: music
    }
}