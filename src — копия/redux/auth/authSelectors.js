const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;
export const getLoadingAuth = state => state.auth.loading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {isAuthenticated, getUserName, getLoadingAuth};
