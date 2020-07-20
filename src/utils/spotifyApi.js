
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQCnQE9KsHmdbpSlh2x8R6NFY8Yli54Wcn9z35IMwzNDB0fwzEhKErsjOx7hK--JttIJs5yaywQQSk03H6h6oQu_qjzv1wBusK0GyMr5bj_TD_JIR-1UW7nqpTPAzLGtlrTC3PC8lGuoJtE`
        },
    })
    .then(res => res.json())
}