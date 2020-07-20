
const BASE_URL = 'https://api.spotify.com/v1/search';

export function getInfoAPI(name, type) {
    return fetch(`${BASE_URL}?q=${name}&type=${type}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer BQCsTZnSwHUvG0DWrYKl_LEOmWve5b4G2r1-0A5_Wl33u-T3Jf1w49WO33ccTZ6G4MuRrYF_fONP_xiLvhzKQoDtaSZsif4kX0IbKcAY2TOKircB4ekgBgizhmroO_u3P7C7uBnFxprUTg0`
        },
    })
    .then(res => res.json())
}