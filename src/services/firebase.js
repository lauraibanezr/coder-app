
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore, collection, getDocs, getDoc, doc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBXQFKFzhHJLSK-VNtEJf-vVa-bURCPgA",
  authDomain: "react-project-coderhouse-a9fa1.firebaseapp.com",
  projectId: "react-project-coderhouse-a9fa1",
  storageBucket: "react-project-coderhouse-a9fa1.appspot.com",
  messagingSenderId: "168173234931",
  appId: "1:168173234931:web:3140a3407daae78931a586",
  measurementId: "G-5NJ5YZB94D"
};

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(FireApp);
const db = getFirestore(FireApp);

export async function getData(){
  const collectionRef = collection(db, "elementos");
  let results = await getDocs(collectionRef);
  let dataElements = results.docs.map(doc => {
   // return doc.data();
    return { id: doc.id, ...doc.data()};
  })
  return dataElements;
}

export async function getSingleData(idParams){
  const docRef = doc(db, "elementos", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}



export default FireApp;