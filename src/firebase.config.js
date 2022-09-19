import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAXnthQ4Iz-XeZx3o5025EF_ARgv6ycDFM",
  authDomain: "sales-management-2ef4f.firebaseapp.com",
  projectId: "sales-management-2ef4f",
  storageBucket: "sales-management-2ef4f.appspot.com",
  messagingSenderId: "114536094498",
  appId: "1:114536094498:web:886fbd7779dda068e7637b",
  measurementId: "G-4FWTZHTNDF"
};

const app=getApps.length>0 ? getApp():initializeApp(firebaseConfig)

const firestore=getFirestore(app)
const storage=getStorage(app)
export {app,firestore,storage};