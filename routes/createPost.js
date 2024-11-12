const express = require("express");
const path = require("path");
const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../public", "form.html"));
});

router.get("/submit", (request, response) => {
  const { title, postText, author } = request.query;
  if (!title || !postText || !author) {
    response.send({ error: "Invalid Form Submission" });
  }

  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", idFromTitle),
    { title, text: postText, author }
  );

  setBlogPost
    .then((res) => {
      response.sendFile(path.join(__dirname, "../public", "success.html"));
    })
    .catch((error) => {
      response.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
