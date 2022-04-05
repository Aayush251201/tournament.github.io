/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    // Set the configuration for your app
    // TODO: Replace with your project's config object
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
         var testing=firebase.database().ref().child("Version");
  testing.on('value',function(snapshot){
      var childdata9=snapshot.val();
      document.getElementById("validationCustom02").value= childdata9['versionnumber'];
  })
        
        
        
        })()
        function updatedata(){
            
          
            firebase.database().ref().child("Version").set({
                versionnumber:document.getElementById("validationCustom02").value,})
                location.reload();
            
            }
            firebase.auth().onAuthStateChanged(user => {
                if(user) {
                  // console.log(user);
                  if(user.email=="myknot.gaming@gmail.com"){}else{window.location = 'login.html';}
              
                  //After successful login, user will be redirected to home.html
                }
                else{window.location = 'login.html';}
                
               
              });