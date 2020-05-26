import app from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAUIo5oIifEQWjQPL0M6Bxq60oKNmcMvXI",
    authDomain: "home-27b06.firebaseapp.com",
    databaseURL: "https://home-27b06.firebaseio.com",
    projectId: "home-27b06",
    storageBucket: "home-27b06.appspot.com",
    messagingSenderId: "1028325623233",
    appId: "1:1028325623233:web:322e0c9d2581572e0e1b40",
    measurementId: "G-X47F1PVQT6"
  };

class firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
      //  this.auth = app.auth();
       this.db = app.firestore();
       this.auth = app.auth();
    }

    estaIniciado(){
      return new Promise (resolve=>{
        this.auth.onAuthStateChanged(resolve)
      })
    }
}
export default firebase;