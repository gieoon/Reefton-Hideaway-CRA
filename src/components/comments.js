import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore'
import htmlToText from 'html-to-text';
const firebaseConfig = {
    apiKey: "AIzaSyBiw4ORAbMmxImx4qPGq9JAFtUI36PeYQ0",
    authDomain: "sheets2website-1598313088115.firebaseapp.com",
    databaseURL: "https://sheets2website-1598313088115.firebaseio.com",
    projectId: "sheets2website-1598313088115",
    storageBucket: "sheets2website-1598313088115.appspot.com",
    messagingSenderId: "1082271392691",
    appId: "1:1082271392691:web:45c06be046a0a72b5b21c6",
    measurementId: "G-ZWGE5NLZ4Z"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default function Comments({

}){
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        
        
        var out = [];
        db.collection('CMS')
            .doc('reefton_hideaway')
            .collection('Reviews')
            .orderBy('createdOn','desc')
            .get()
            .then(docs => {
                docs.forEach(doc => {
                    console.log(doc.id, doc.data);
                    out.push({id:doc.id, ...doc.data()});
                });
                setReviews(out);
            })
    }, []);

    return(
        <div className="Comments">
            <h2>What people are saying about us:</h2>
            {
                reviews.map(review => (
                    <div className="review" key={review.id}>
                        <div className="text">{htmlToText.fromString(review.content)}</div>
                        <div className="author">{htmlToText.fromString(review.title)}</div>
                    </div>
                ))
            }
            <a href="/review" rel="noopener noreferer" target="_blank">
                <div className="new-comment">
                    Leave us your review
                </div>
            </a>
        </div>
    )
}