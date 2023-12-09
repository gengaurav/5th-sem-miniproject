let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyBHH4X_Xr-BxwkN4cqRUSjnQtIsJ3xyLF0",
    authDomain: "real-blog-site.firebaseapp.com",
    projectId: "real-blog-site",
    storageBucket: "real-blog-site.appspot.com",
    messagingSenderId: "506422447844",
    appId: "1:506422447844:web:c82ab0bc488943888d66f1"
  
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
