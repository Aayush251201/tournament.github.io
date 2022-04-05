/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
    
    btnf = document.getElementById('btnlog');
    btnf.addEventListener('click', e => {
    
             firebase.auth().signOut();
    });
    })()



firebase.auth().onAuthStateChanged(user => {
if(user) {var user8 = firebase.auth().currentUser;
    document.getElementById("useridmail").innerText=user8.email.toString();
    var yyy= firebase.auth().currentUser.uid;
    test66= firebase.database().ref('users/' + yyy );
    test66.on('value', function(snapshot){

     //           snapshot.forEach(function(childSnapshot){
                     var childdata = snapshot.val();
                     document.getElementById("lol12").innerText= "Hi,"+childdata['firstname'];
                   })
    // console.log(user);

//After successful login, user will be redirected to home.html
}
else{window.location = 'login.html';}


});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }