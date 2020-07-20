
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQD69anzH-KpK6NnRbJlz6kUSvCgo3Sbipgs9czTBiw3_oJtri9hQJsyfMiMtYbOsVlO7c1cqDtespDFStQ8LqFgRP-qL3EP-YOYo-EUt6h0b2FYN20XRFxw_cU1l3oGFi4z9lMtOqtnXI8`
        },
    })
    .then(res => res.json())
}