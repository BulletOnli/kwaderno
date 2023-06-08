// export const firebaseConfig = {
//     apiKey: "AIzaSyDfJARmETNk_VvJAzZ202H91Ko87-xSwr0",
//     authDomain: "kwadernote-cf746.firebaseapp.com",
//     projectId: "kwadernote-cf746",
//     storageBucket: "kwadernote-cf746.appspot.com",
//     messagingSenderId: "320182407150",
//     appId: "1:320182407150:web:52b4864c325ab9fd7e88ff",
// };

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};
