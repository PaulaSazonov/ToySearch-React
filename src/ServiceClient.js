export function getAllToys (callback) {
    return fetch("/api/toys")
        .then(function (response) {
            return response.json();
        })
        .then(function(json) {
            callback(json);
        })
}

export function getToysBySearchTerm (searchTerm, callback) {
    return fetch("/api/search?q="+searchTerm)
        .then(function (response) {
            if (response.status === 404) {
                throw "virhe";
            }
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], "virhe");
        })
}

export function getToysByProducer (producer, callback) {
    return fetch("/api/toys/"+producer)
        .then(function (response) {
            if (response.status === 404) {
                throw "virhe";
            }
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], "virhe");
        })
}

export function getToysById (id, callback) {
    return fetch("/api/61lyqmIBfpKc0tS_YXsz")
        .then(function (response) {
            if (response.status === 404) {
                throw "virhe";
            }
            console.log(response);
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], "virhe");
        })
}