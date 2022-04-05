/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {


    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCtWtXifmXNjyDhVClnApzKacpuhmnfWP0",
        authDomain: "tournament-6d6e1.firebaseapp.com",
        databaseURL: "https://tournament-6d6e1.firebaseio.com",
        projectId: "tournament-6d6e1",
        storageBucket: "tournament-6d6e1.appspot.com",
        messagingSenderId: "123494838273",
        appId: "1:123494838273:web:e222b6cdbaf8a9bab19000",
        measurementId: "G-LXQWECD8CZ"
    };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            emailf = document.getElementById('validationCustom0309');
            // passf = document.getElementById('validationCustom04');
            btnloginf = document.getElementById('btnlogin2');
            btnloginf.addEventListener('click', e => {
            emailff = emailf.value;
                    // passff = passf.value;
                    authf = firebase.auth();
                    promise = authf.sendPasswordResetEmail(emailff);
                    promise.then(function() {var dataoutput="";
                    // dataoutput44=e.message.toString();
    
                    var tt=document.getElementById("popl21");
                  tt.innerText="LINK HAS BEEN SUCCESSFULLY SENT PLEASE CHECK YOU EMAIL"});
                    promise.catch(e => {var dataoutput="";
                    dataoutput44=e.message.toString();
    
                    var tt=document.getElementById("popl21");
                  tt.innerText=dataoutput44;});
            });
    //         btnloginfg = document.getElementById('btngoogle');
    //       btnloginfg.addEventListener('click', e => {  
    // var providert = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(providert).then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
     
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   //  console.log(errorMessage)
    //   // ...
    // });
            
    // });
    //code for facebook authentication
    //         btnloginfgh = document.getElementById('btnfb');
    //       btnloginfgh.addEventListener('click', e => {  
    // var providerth = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(providerth).then(function(result) {
    //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
            
    // });
    
    })()
    //Handle Account Status
            firebase.auth().onAuthStateChanged(user => {
                if(user.email=="myknot.gaming@gmail.com"){window.location = 'adminpanel.html';}
    else if(user) {
      // console.log(user);
            window.location = 'main.html';
            //After successful login, user will be redirected to home.html
    }
    
    
    });