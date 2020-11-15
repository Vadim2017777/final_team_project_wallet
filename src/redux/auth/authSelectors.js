const isAuthenticated = state => state.auth.token;
const getUserName = state => state.auth.user.name;
const getLoadingAuth = state => state.auth.loading;
// eslint-disable-next-line
export default {isAuthenticated, getUserName, getLoadingAuth};
