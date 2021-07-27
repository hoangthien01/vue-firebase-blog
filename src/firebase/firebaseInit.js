import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAgQCQi_80Ibd2UVmblh2E4W4eD30rVCF8",
  authDomain: "vuefirebaseblog-c997b.firebaseapp.com",
  projectId: "vuefirebaseblog-c997b",
  storageBucket: "vuefirebaseblog-c997b.appspot.com",
  messagingSenderId: "686401332073",
  appId: "1:686401332073:web:3a2015f4b7054e931393f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.server.serverTimestamp;

export { timestamp };
export default firebase.firestore();