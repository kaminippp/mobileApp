import apisauce from 'apisauce'

const create = (baseURL = 'https://api.nytimes.com/svc/mostpopular/v2') => {
    const api = apisauce.create({
        baseURL,
        timeout: 15000
    });

    const login = ({username, password}) =>
        api.post('/token', {username: username, password: password}, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    const userDetails = () => api.get('/members/me');
    const getArticles = () => api.get('/viewed/1.json?api-key=rmtxFubtJ5UA3rt1Y00b3CuDOTxfFeVI');
    const getActivities = () => api.get('/orders/activities/1187');
    const postDispatch = () => api.get('/transactions');

    const startDispatch = (dispatchId) => api.put('dispatches/start/' + dispatchId);

    return {
        getArticles,
        getActivities,
        login,
        postDispatch,
        userDetails,
        startDispatch
    }
};

export default {
    create
}