import tokenService from './tokenService';

const BASE_URL = '/api/comments';

export function createCommentAPI(commentToCreate) {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(commentToCreate)
    }).then(newComment => newComment.json());
}

export function deleteCommentAPI(commentIdToDelete) {
    return fetch(`${BASE_URL}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(deletedPost => deletedPost.json());
}
