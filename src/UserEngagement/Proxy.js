import firebase from 'firebase';
require('firebase/firestore');

const config = {
    apiKey: "AIzaSyCT1M0crrf_4Sg61tUesQCFA50COVC5lzs",
    authDomain: "law-news.firebaseapp.com",
    projectId: "law-news",
};

export default class Proxy{
    constructor(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.db = firebase.firestore();
        this.db.settings({
            timestampsInSnapshots: true
        });
    }

    getByArticle = (id) => {
        let docRef = this.db.collection('UserEngagementArticle').doc(`${id}`);
        return docRef.get().then(function(doc) {
            if (doc.exists) {
                return doc.data();
            } else {
                docRef.set({});
                return {};
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }

    updateArticle = (id,emotion) => {
        let sfDocRef = this.db.collection("UserEngagementArticle").doc(`${id}`);
        return this.db.runTransaction(function(transaction) {
            return transaction.get(sfDocRef).then(function(sfDoc) {
                if (!sfDoc.exists) {
                    throw "Document does not exist!";
                }
                let current = sfDoc.data()[emotion] ? sfDoc.data()[emotion] : 0;
                let increased = current + 1;
                transaction.update(sfDocRef, { [emotion]: increased });
                return sfDoc.data();
            });
        })
    }
}
