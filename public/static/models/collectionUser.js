(function () {

    class CollectionUsers {

        constructor(opt) {
            this.responseMap = {
                200: '1',
                400: '0',
                401: '0',
                403: '0',
            };
            this.collection = [];
            this.collectionSize = opt.collectionSize || 0;

        }

        createCollection() {

        }

        sendRequest(to = '/scoreboard?limit=10', method = 'GET') {
            return new Promise((resolve, reject) => {
                // const baseUrl = 'https://brain404-backend.herokuapp.com/api';
                const baseUrl = 'http://localhost:3000';
                const url = baseUrl + to;
                const initPomise = {
                    method,
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-type': 'application/json',
                    },
                };
                const responseObj = {};

                fetch(url, initPomise)
                .then(this.status.bind(this))
                .then((response) => {
                    this.serverStatus(response)
                    .then(this.toJson)
                    .then((data) => {
                        this.collection = data;
                        resolve();
                    })
                    .catch((error) => {
                        this.toJson(error)
                        .then((error) => {
                            reject();
                        });
                    });
                })
                .catch((error) => {
                    this.responseObj = { status: 0, msg: 'Not a server error!' };
                    reject(this.responseObj);
                });
            });
        }

        toJson(response) {
            return response.json();
        }

        status(response) {
            // console.log(response.status);
            if (response.status in this.responseMap) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        }

        serverStatus(response) {
            if (this.responseMap[response.status] === '1') {
                return Promise.resolve(response);
            } else {
                return Promise.reject(response);
            }
        }
        getCollection() {
            return this.collection;
        }


    }

    // exports
    window.CollectionUsers = CollectionUsers;
}());
