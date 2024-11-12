const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-five-e457c.firebaseapp.com",
  projectId: "exercise-five-e457c",
  storageBucket: "exercise-five-e457c.firebasestorage.app",
  messagingSenderId: "738405955390",
  appId: "1:738405955390:web:8530f64f89ad7190ec1e6f",
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Exercise Five app listening on port ${port}`);
});
