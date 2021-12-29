import generateClient from '../utils/generateClient';

const api = generateClient(process.env.REACT_APP_KYUPID_API);

export const getAreas = () => api.get('/areas');
export const getUsers = () => api.get('/users');
