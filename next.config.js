/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIREBASE_API_KEY: process.env.apiKey,
        AUTH_DOMAIN: process.env.authDomain,
        PROJECT_ID: process.env.projectId,
        STORAGE_BUCKET: process.env.storageBucket,
        MESSAGING_SENDER_ID: process.env.messagingSenderId,
        APP_ID: process.env.appId,
    },
};

module.exports = nextConfig;
