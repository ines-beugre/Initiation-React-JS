
export function fetchRegions(){
    return fetch(`https://wines-api.herokuapp.com/api/regions`).then(r => r.json());
}

export function fecthWinesFrom(region){
    return fetch (`https://wines-api.herokuapp.com/api/wines?region=${region}`).then(r =>r.json());
}

export function fetchWine(id){
    return fetch(`https://wines-api.herokuapp.com/api/wines/${id}`).then(r => r.json());
}

export function likeWine(id){
    return fetch(`https://wines-api.herokuapp.com/api/wines/${id}/like`, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ like: true })
    });
}

/*like button*/
export function unlikeWine(id){
    return fetch (`https://wines-api.herokuapp.com/api/wines/${id}/like`, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({like: false}),
    });
}
/*permet de récupérer la valeur du like*/
export function isWineLiked(id){
    return fetch (`https://wines-api.herokuapp.com/api/wines/${id}/like`).then(r => r.json());
}

/*Section dédiée au commentaire*/
export function fecthComments(id){
    return fetch (`https://wines-api.herokuapp.com/api/wines/${id}/comments`).then(r => r.json());
}