
const BASE_URL = 'https://api.spotify.com/v1/search';
const TOKEN = 'BQBBCm1mciQ79AvV24Y9fqgaIzORRmvxZdUjf91qxVSXF5r6UIAOyhb4Z4BgrX2yj_iKiXKagweO6OENceAFchO9Em7LcWuU4ylLw3B8S34kcv8BGmPrUS-UU8sGjUr9nok23Xn0uq72ei4';

export function getInfoAPI(name, type) {
    console.log(TOKEN);
    return fetch(`${BASE_URL}?q=${name}&type=${type}&limit=10`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })
    .then(res => res.json())
}