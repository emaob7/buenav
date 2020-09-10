import app from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUIo5oIifEQWjQPL0M6Bxq60oKNmcMvXI",
  authDomain: "home-27b06.firebaseapp.com",
  databaseURL: "https://home-27b06.firebaseio.com",
  projectId: "home-27b06",
  storageBucket: "home-27b06.appspot.com",
  messagingSenderId: "1028325623233",
  appId: "1:1028325623233:web:322e0c9d2581572e0e1b40",
  measurementId: "G-X47F1PVQT6",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    this.auth = app.auth();
    this.storage = app.storage();
    this.authorization = app.auth;

    this.storage.ref().constructor.prototype.guardarDocumentos = function (
      documentos
    ) {
      var ref = this;
      return Promise.all(
        documentos.map(function (file) {
          return ref
            .child(file.alias)
            .put(file)
            .then((snapshot) => {
              return ref.child(file.alias).getDownloadURL();
            });
        })
      );
    };
  }

  estaIniciado() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  guardarDocumento = (nombreDocumento, documento) =>
    this.storage.ref().child(nombreDocumento).put(documento);
  devolverDocumento = (documentoUrl) =>
    this.storage.ref().child(documentoUrl).getDownloadURL();

    guardarDocumentos = (documentos) => this.storage.ref().guardarDocumentos(documentos);

    eliminarDocumento = documento => this.storage.ref().child(documento).delete();
}
export default Firebase;
