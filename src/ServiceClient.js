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
    return fetch("/api/search2?q="+searchTerm)
        .then(function (response) {
            if (response.status === 404) {
                throw new Error("virhe");
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
    return fetch("/api/"+id)
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

export function getAllToys2 (callback) {
    return fetch("/api/toys2")
        .then(function (response) {
            return response.json();
        })
        .then(function(json) {
            callback(json);
        })
}
