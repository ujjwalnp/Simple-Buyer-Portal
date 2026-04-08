export const setToken = (token) => {
    const MAX_AGE = 7 * 24 * 60 * 60;
    document.cookie = `token=${token}; path=/; max-age=${MAX_AGE}`; 
}

export const getToken = () => {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    return match ? match[2] : null;
}

export const removeToken = () => {
    document.cookie = "token=; Max-Age=0; path=/";
}