import axios from 'axios'
import jsonp from 'jsonp'

const service = axios.create({
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);




const apiFuntions = {
    get: (urlData, jsonData) => {
        return new Promise((resolve, reject) => {
            service.get(urlData, jsonData)
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    post: (urlData, jsonData) => {
        return new Promise((resolve, reject) => {
            service.post(urlData, jsonData)
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    axiosL: (urlData, jsonData) => {
        return new Promise((resolve, reject) => {
            axios.get(urlData, jsonData)
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    jsonpGet: (urlData, AcceptanceName) => {
        return new Promise((resolve, reject) => {
            let AcceptanceNames = !!AcceptanceName ? { name: AcceptanceName } : {};
            jsonp(urlData, AcceptanceNames, (err, responseData) => {
                if (!!responseData) {
                    resolve(responseData);
                } else {
                    reject(err);
                }
            })
        });
    },
    jsonNative: () => {

    }
}
export default apiFuntions;
