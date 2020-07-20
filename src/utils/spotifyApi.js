
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQCCGHBL-4wPcEYi-OFU7wQKycd4ADeLauN7mhQR9GZauNo-LYmOCjjZ-RyZdUTuCj4ynKqC1wELl8AvMEUKZRVoaf47CRkPNmx-I-U8o7SqbDN05MeXlJ7KUoA8APj7iNIJPCVA_mDF0A8`
        },
    })
    .then(res => res.json())
}