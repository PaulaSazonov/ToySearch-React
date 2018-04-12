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
            callback([], Error);
        })
}

export function getToysBySearchTermAndFilter (searchTerm, price, producerlist, callback) {
    return fetch("/api/search3?q="+searchTerm+"&p="+price+"&l="+producerlist)
        .then(function (response) {
            if (response.status === 404) {
                throw new Error("virhe");
            }
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], Error);
        })
}

export function getToysByProducer (producer, callback) {
    return fetch("/api/toys/"+producer)
        .then(function (response) {
            if (response.status === 404) {
                throw new Error("virhe");
            }
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], Error);
        })
}

export function getToysById (id, callback) {
    return fetch("/api/"+id)
        .then(function (response) {
            if (response.status === 404) {
                throw new Error("virhe");
            }
            return response.json();
        })
        .then(function (json) {
            callback(json);

        }).catch(function () {
            callback([], Error);
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
