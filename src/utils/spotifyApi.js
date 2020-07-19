
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQCWav1xgL21dI6RJ0e5VubRwivxDP4yi3GnlWT0BGWZiDXvtnMUhXKPY0jbPZuJyO6bKzt9D8idPiupSWkXn4OQEfrJ79-OY-kVBXRnM4Xyr9X31gm_W34RkJrImZ4ruCUSSsFaeXtr5KY`
        },
    })
    .then(res => res.json())
}