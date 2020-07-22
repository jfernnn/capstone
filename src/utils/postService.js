import tokenService from './tokenService';

const BASE_URL = '/api/posts';

export function getAllPostsAPI() {
    console.log('made it to getallpostsapi')
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        }
    })
    .then(res => res.json());
}

export function createPostAPI(postToCreate) {
    console.log('made it to create all  ', postToCreate)

    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(postToCreate)
    }).then(newPost => newPost.json());
}

export function deletePostAPI(postIdToDelete) {
    return fetch(`${BASE_URL}/${postIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    }).then(deletedPost => deletedPost.json());
}
