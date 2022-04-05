



(function() {



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
                
                firebase.initializeApp(firebaseConfig);
               
        
                btnf = document.getElementById('btnlog');
                btnf.addEventListener('click', e => {
        
                firebase.auth().signOut();
                });
                preobject404 = document.getElementById("qwg123");  //morning
                preobject4041 = document.getElementById("qwg1231");  //afternoon
                preobject4042 = document.getElementById("qwg1232");  //night
        
        
                preobject = document.getElementById("qwe");
                var databaset = firebase.database().ref().child("pubg").child('morning');
               
                databaset.on('value', snap => {
                console.log(snap.val());
                        var noofelements = 0;
                        for (var j = 0; j < 10; j++){
                var key = Object.keys(snap.val())[j];
                        if (!key){noofelements = j; break; }
        
                }
                
                        document.getElementById("qwe").innerHTML = "";
                        document.getElementById("qwg123").innerHTML="";
        
                        for (var i = 0; i < noofelements; i++){
                var key = Object.keys(snap.val())[i];
                        var test2 = firebase.database().ref().child("pubg").child('morning').child(key.toString());
                        test2.on('value', function(snapshot){
        
                        var childdata = snapshot.val();
                            
                  
        
              preobject404.innerHTML += 
              `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw(this.id)">
              <div class="row-flex"  data-aos="fade-up">
            
                  <div style="display: block;">
                      <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                      <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
                  </div>
  
                  <div style="display: block;text-align: center!important;">
                      <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                      <h8 style="color:black;">Registration</h8>
                      ${childdata['registration_status'] == 'open'? 
                        `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                        :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
                }
                       
                      
                
                      
                  </div>
              </div>
          </a>`;
    
              const morningEvents = document.getElementById("qwe");
    
    
        morningEvents.innerHTML+=
        `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw(this.id)">
        <div class="row-flex"  data-aos="fade-up">
      
            <div style="display: block;">
                <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
            </div>

            <div style="display: block;text-align: center!important;">
                <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                <h8 style="color:black;">Registration</h8>
                ${childdata['registration_status'] == 'open'? 
                  `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                  :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
          }
                 
                
          
                
            </div>
        </div>
    </a>`;
        
                            })
        
                                     }         // console.log(key);
                 
    
             }); //Morning Ends here
    
    
    
             //afternoon starts here
    
                // databaset.onUpdate( ()=>location.reload());
                preobjectf = document.getElementById("qwf");
                var databasetgg = firebase.database().ref().child("pubg").child('afternoon');
                databasetgg.on('value', snap => {
        
        //            preobjectf.innerText = JSON.stringify(snap.val(), null, 3);
                console.log(snap.val());
                        var noofelements = 0;
                        for (var j = 0; j < 10; j++){
                var key = Object.keys(snap.val())[j];
                        if (!key){noofelements = j; break; }
        
                }
        
        
                console.log(noofelements);
                        document.getElementById("qwf").innerHTML = "";
                        document.getElementById("qwg1231").innerHTML="";
        
                        for (var i = 0; i < noofelements; i++){
                var key = Object.keys(snap.val())[i];
                        var test2 = firebase.database().ref().child("pubg").child('afternoon').child(key.toString());
                        test2.on('value', function(snapshot){
        //           snapshot.forEach(function(childSnapshot){
                        var childdata = snapshot.val();
                                
                
                        preobject4041.innerHTML += 
                        `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw1(this.id)">
                        <div class="row-flex"  data-aos="fade-up">
                      
                            <div style="display: block;">
                                <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                                <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
                            </div>
            
                            <div style="display: block;text-align: center!important;">
                                <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                                <h8 style="color:black;">Registration</h8>
                                ${childdata['registration_status'] == 'open'? 
                                  `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                                  :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
                          }
                                 
                                
                          
                                
                            </div>
                        </div>
                    </a>`;
              
                        const afternoonEvents = document.getElementById("qwf");
              
              
                  afternoonEvents.innerHTML+=
                  `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw1(this.id)">
                  <div class="row-flex"  data-aos="fade-up">
                
                      <div style="display: block;">
                          <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                          <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
                      </div>
      
                      <div style="display: block;text-align: center!important;">
                          <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                          <h8 style="color:black;">Registration</h8>
                          ${childdata['registration_status'] == 'open'? 
                            `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                            :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
                    }
                           
                          
                    
                          
                      </div>
                  </div>
              </a>`;
    
    
    
    
    
                        })
        
        
        
        
        
                        // console.log(key);
                 }
                });   //afternoon ends here
        //            var databaset = firebase.database().ref().child('afternoon').snapshots();
        //        databaset.onchanged('value',function(snapshot){snapshot.forEach(function(childSnapshot)
        //            {var childd=childSnapshot.val();
        //                preobjectf.innerHTML=childd['banner'];console.log(snapshot.val());})}
        //                );
        //            
        
             // Night starts here
        
                preobjectg = document.getElementById("qwg");
                var databaset = firebase.database().ref().child("pubg").child('night');
                databaset.on('value', snap => {
                console.log(snap.val());
                        var noofelements = 0;
                        for (var j = 0; j < 10; j++){
                var key = Object.keys(snap.val())[j];
                        if (!key){noofelements = j; break; }
        
                }
                console.log(noofelements);
                        document.getElementById("qwg").innerHTML = "";
                        document.getElementById("qwg1232").innerHTML="";
        
                        for (var i = 0; i < noofelements; i++){
        
                var key = Object.keys(snap.val())[i];
                        var test2 = firebase.database().ref().child("pubg").child('night').child(key.toString());
                        test2.on('value', function(snapshot){
                                
        
        //           snapshot.forEach(function(childSnapshot){
                        var childdata = snapshot.val();
                                
    
    
                        preobject4042.innerHTML += 
                        `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw2(this.id)">
                        <div class="row-flex"  data-aos="fade-up">
                      
                            <div style="display: block;">
                                <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                                <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
                            </div>
            
                            <div style="display: block;text-align: center!important;">
                                <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                                <h8 style="color:black;">Registration</h8>
                                ${childdata['registration_status'] == 'open'? 
                                  `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                                  :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
                          }
                                 
                                
                          
                                
                            </div>
                        </div>
                    </a>`;
    
              const nightEvents = document.getElementById("qwg");
    
    
        nightEvents.innerHTML+=
        `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw2(this.id)">
        <div class="row-flex"  data-aos="fade-up">
      
            <div style="display: block;">
                <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
            </div>

            <div style="display: block;text-align: center!important;">
                <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                <h8 style="color:black;">Registration</h8>
                ${childdata['registration_status'] == 'open'? 
                  `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                  :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
          }
                 
                
          
                
            </div>
        </div>
    </a>`; 
    
    
    
                        })
                        // console.log(key);
                 }
                });
    
                // Upcoming starts here
                preobjectgjj = document.getElementById("qwg1");
                var databaset = firebase.database().ref().child("pubg").child('upcoming');
                databaset.on('value', snap => {
                console.log(snap.val());
                        var noofelements = 0;
                        for (var j = 0; j < 10; j++){
                var key = Object.keys(snap.val())[j];
                        if (!key){noofelements = j; break; }
        
                }
                console.log(noofelements);
                        document.getElementById("qwg1").innerHTML = "";
                        for (var i = 0; i < noofelements; i++){
        
                var key = Object.keys(snap.val())[i];
                        var test2 = firebase.database().ref().child("pubg").child('upcoming').child(key.toString());
                        test2.on('value', function(snapshot){
        
        //           snapshot.forEach(function(childSnapshot){
                        var childdata = snapshot.val();
                                
    
              const upcomingEvents = document.getElementById("qwg1");
    
             
        upcomingEvents.innerHTML+=
        `<a href="./oneventpubg.html" class="event-anchor"  id="${key.toString()}" onclick="onveiw21(this.id)">
        <div class="row-flex"  data-aos="fade-up">
      
            <div style="display: block;">
                <p style="color: black; font-size: 1.3rem;margin-bottom: 0.4rem;" class="event-heading ">${childdata['banner'].toUpperCase()}</p>
                <p class="event-creator" style="color: black;">PUBG(MOBILE)-By ${childdata['organizer'].toUpperCase()}</p>
            </div>

            <div style="display: block;text-align: center!important;">
                <h8  class="online-status">online,${childdata['eventplace'].toUpperCase()}</h8>
                <h8 style="color:black;">Registration</h8>
                ${childdata['registration_status'] == 'open'? 
                  `<h8 style="color:rgb(6, 117, 6);"id="try">${childdata['registration_status']}</h8>`
                  :`<h8 id="try" style="color:red;">${childdata['registration_status']}</h8>`
          }
                 
                
          
                
            </div>
        </div>
    </a>`;
    
    
    
                        })
                        // console.log(key);
                 }
                });    // Upcoming ends here
        })()
    
        function onveiw(value){if (typeof(Storage) !== "undefined") {
            // Store
           
            localStorage.setItem("programming",value);
            
            localStorage.setItem("factor","morning");
                
        
                }}
                
                function onveiw21(value){if (typeof(Storage) !== "undefined") {
                        // Store
                        
                        localStorage.setItem("programming",value);
                        
                        localStorage.setItem("factor","upcoming");
                            
                    
                            }}
            
            
            function onveiw1(value){if (typeof(Storage) !== "undefined") {
            // Store
            
            localStorage.setItem("programming",value);
            
            localStorage.setItem("factor","afternoon");
                
        
                }}
            function onveiw2(value){if (typeof(Storage) !== "undefined") {
            // Store
            
            localStorage.setItem("programming",value);
            
            localStorage.setItem("factor","night");
                
        
                }}
        
        
        
        
        
              // Profile Section
        
                var variable = 1;
                firebase.auth().onAuthStateChanged(user => {
        if (user) { var user8 = firebase.auth().currentUser;
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
        else{window.location = 'login.html'; }
        
        
        });
        
        
        function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
              }
              
              /* Set the width of the side navigation to 0 */
              function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
              }
