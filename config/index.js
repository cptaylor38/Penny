const GOOGLE = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
};

const FACEBOOK = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET
}

const SESSION = {
    cookieKey: process.env.SESSIONKey
}

module.exports = {
    GOOGLE,
    FACEBOOK,
    SESSION
}