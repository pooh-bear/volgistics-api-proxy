export const checkAuth = (key: string) => {
    return key === 'Bearer ' + process.env.APP_API_KEY;
}

export default {
    checkAuth
}
