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
            // Get a reference to the database service
    
    btnf = document.getElementById('btnlog');
            btnf.addEventListener('click', e => {
            
                     firebase.auth().signOut();
            });
           
    
    
            preobject = document.getElementById("qwe");
            
            var databaset = firebase.database().ref().child("pubg").child('morning');
            databaset.on('value', snap => {
                    // console.log(snap.val());
        var noofelements=0;
                  for(var j=0;j<10;j++){
                      var key = Object.keys(snap.val())[j];
                      if(!key){noofelements=j;break;}
                      
                  }
                  console.log(noofelements);
                for(var i=0;i<noofelements;i++){
                var key = Object.keys(snap.val())[i];
                
                
                     var test2=  firebase.database().ref().child("pubg").child('morning').child(key.toString());
              test2.on('value',function(snapshot){
    //           snapshot.forEach(function(childSnapshot){
                   var childdata=snapshot.val();
               var div1 = document.createElement("div");
                   div1.className ="row";
                   var div2 = document.createElement("div");
                   div2.className ="feature rty";
                   div2.className ="feature col-lg-4 rty";
                   var hr9 = document.createElement("hr");
                   var div100 = document.createElement("h6");
                   
    //            div100.style.display="none";
                   div100.textContent=key.toString();
                   div100.id=key.toString();
                   div2.appendChild(div100);
                  
                   
                   var h2 = document.createElement("h2");
                   h2.textContent = childdata['banner'].toUpperCase();
                   h2.style.margin='0';
                   var h6 = document.createElement("h6");
                   h6.className ="organizerclass";
                   h6.textContent ="PUBG(MOBILE)-By "+ childdata['organizer'].toUpperCase();
                   
                   div2.appendChild(h2);
                   div2.appendChild(h6);
                   div1.appendChild(div2);
                    var a = document.createElement("a");
                    a.className="po";
                    a.href="";
                    a.style.textDecoration='none';
                    var divk = document.createElement("div");
                    divk.className="po";
                    
                   a.appendChild(div1);
                   divk.appendChild(a);
                   preobject.appendChild(divk);
                   
                   
                    var div3 = document.createElement("div");
                   div3.className ="feature";
                   div3.className ="feature col-lg-4 eventplaceclass rty";
                 
                   
                   
                                
                   var h5 = document.createElement("h5");
                   
                   h5.textContent ="online, "+ childdata['eventplace'];
    //               div3.className ="eventplaceclass";
                    div3.appendChild(h5);
                     div1.appendChild(div3);
                   
                   var div4 = document.createElement("div");
                   
                   div4.className ="feature col-lg-4 rty";
               
                   
                   var h512 = document.createElement("h5");
                     var h5124 = document.createElement("div"); 
                     h5124.className="rty"
    
                   h512.textContent =childdata['registration_status'];
                   if(h512.textContent=="open"){
                   div4.className ="registration_statusclass feature col-lg-4 rty";}else{div4.className ="registration_statusclass1 feature col-lg-4 rty";}
                  var h51 = document.createElement("h5");
                   h51.textContent ="Registration "
                   h5124.appendChild(h51); 
                  h5124.appendChild(h512);
                  div4.appendChild(h5124); 
                  
                  
                   div1.appendChild(div4);
                   var div9 = document.createElement("button");
                   div9.className ="btn btn-outline-warning";
                   div9.textContent ="DELETE";
                   div9.value=key;
                   div9.id=key;
                   div9.setAttribute("onclick","ondelete(this.id)");
                   var div998 = document.createElement("button");
                   var a1 = document.createElement("a");
                   a1.href="#targetnamenew";
                   div998.className ="btn btn-outline-warning";
                   div998.textContent ="UPDATE";
                   div998.value=key;
                   div998.id=key;
                   div998.setAttribute("onclick","update(this.id)");
                   var div91 = document.createElement("div");
                   div91.className="rt"
                   div91.appendChild(div9);
                   a1.appendChild(div998);
                    div91.appendChild(a1);
                   preobject.appendChild(div91);
                   preobject.appendChild(hr9);
                   
                  
                  
                  
              })
                
                
                
                
                
                
                
                  
                    // console.log(key);
                  }        
        });
                
            preobjectf = document.getElementById("qwf");
           
            var databasetgg = firebase.database().ref().child("pubg").child('afternoon');
            databasetgg.on('value', snap => {
                
    //            preobjectf.innerText = JSON.stringify(snap.val(), null, 3);
                  // console.log(snap.val());
                  
                  
                  
                  
                  var noofelements=0;
                  for(var j=0;j<10;j++){
                      var key = Object.keys(snap.val())[j];
                      if(!key){noofelements=j;break;}
                      
                  }
                  
                     
                  // console.log(noofelements);
                  
                for(var i=0;i<noofelements;i++){
                var key = Object.keys(snap.val())[i];
                
              var test2=  firebase.database().ref().child("pubg").child('afternoon').child(key.toString());
              test2.on('value',function(snapshot){
    //           snapshot.forEach(function(childSnapshot){
                   var childdata=snapshot.val();
                    var div1 = document.createElement("div");
                   div1.className ="row";
                   var div2 = document.createElement("div");
                   div2.className ="feature rty";
                   div2.className ="feature col-lg-4 rty";
                   var hr9 = document.createElement("hr");
                   var div100 = document.createElement("h6");
                   
    //            div100.style.display="none";
                   div100.textContent=key.toString();
                   div100.id=key.toString();
                   div2.appendChild(div100);
                  
                   
                   var h2 = document.createElement("h2");
                   h2.textContent = childdata['banner'].toUpperCase();
                   h2.style.margin='0';
                   var h6 = document.createElement("h6");
                   h6.className ="organizerclass";
                   h6.textContent ="PUBG(MOBILE)-By "+ childdata['organizer'].toUpperCase();
                   
                   div2.appendChild(h2);
                   div2.appendChild(h6);
                   div1.appendChild(div2);
                    var a = document.createElement("a");
                    a.className="po";
                    a.href="";
                    a.style.textDecoration='none';
                    var divk = document.createElement("div");
                    divk.className="po";
                    
                   a.appendChild(div1);
                   divk.appendChild(a);
                   preobjectf.appendChild(divk);
                   
                   
                    var div3 = document.createElement("div");
                   div3.className ="feature";
                   div3.className ="feature col-lg-4 eventplaceclass rty";
                 
                   
                   
                                
                   var h5 = document.createElement("h5");
                   
                   h5.textContent ="online, "+ childdata['eventplace'];
    //               div3.className ="eventplaceclass";
                    div3.appendChild(h5);
                     div1.appendChild(div3);
                   
                   var div4 = document.createElement("div");
                   
                   div4.className ="feature col-lg-4 rty";
               
                   
                   var h512 = document.createElement("h5");
                     var h5124 = document.createElement("div"); 
                     h5124.className="rty"
    
                   h512.textContent =childdata['registration_status'];
                   if(h512.textContent=="open"){
                   div4.className ="registration_statusclass feature col-lg-4 rty";}else{div4.className ="registration_statusclass1 feature col-lg-4 rty";}
                  var h51 = document.createElement("h5");
                   h51.textContent ="Registration "
                   h5124.appendChild(h51); 
                  h5124.appendChild(h512);
                  div4.appendChild(h5124); 
                  
                  
                   div1.appendChild(div4);
                   var div9 = document.createElement("button");
                   div9.className ="btn btn-outline-warning";
                   div9.textContent ="DELETE";
                   div9.value=key;
                   div9.id=key;
                   div9.setAttribute("onclick","ondelete1(this.id)");
                   var div998 = document.createElement("button");
                   var a1 = document.createElement("a");
                   a1.href="#targetnamenew";
                   div998.className ="btn btn-outline-warning";
                   div998.textContent ="UPDATE";
                   div998.value=key;
                   div998.id=key;
                   div998.setAttribute("onclick","update1(this.id)");
                   var div91 = document.createElement("div");
                   div91.className="rt"
                   div91.appendChild(div9);
                   a1.appendChild(div998);
                    div91.appendChild(a1);
                   preobjectf.appendChild(div91);
                   preobjectf.appendChild(hr9);
                  
                  
              })
              
              
                
                
                  
                    // console.log(key);
                  }
                });
                
    //            var databaset = firebase.database().ref().child('afternoon').snapshots();
    //        databaset.onchanged('value',function(snapshot){snapshot.forEach(function(childSnapshot)
    //            {var childd=childSnapshot.val();
    //                preobjectf.innerHTML=childd['banner'];console.log(snapshot.val());})}
    //                );
    //       
    preobjectfdd = document.getElementById("qwg1");
           
    var databasetgg = firebase.database().ref().child("pubg").child('upcoming');
    databasetgg.on('value', snap => {
        
    //            preobjectf.innerText = JSON.stringify(snap.val(), null, 3);
          // console.log(snap.val());
          
          
          
          
          var noofelements=0;
          for(var j=0;j<10;j++){
              var key = Object.keys(snap.val())[j];
              if(!key){noofelements=j;break;}
              
          }
          
             
          // console.log(noofelements);
          
        for(var i=0;i<noofelements;i++){
        var key = Object.keys(snap.val())[i];
        
      var test23=  firebase.database().ref().child("pubg").child('upcoming').child(key.toString());
      test23.on('value',function(snapshot){
    //           snapshot.forEach(function(childSnapshot){
           var childdata=snapshot.val();
            var div1 = document.createElement("div");
           div1.className ="row";
           var div2 = document.createElement("div");
           div2.className ="feature rty";
           div2.className ="feature col-lg-4 rty";
           var hr9 = document.createElement("hr");
           var div100 = document.createElement("h6");
           
    //            div100.style.display="none";
           div100.textContent=key.toString();
           div100.id=key.toString();
           div2.appendChild(div100);
          
           
           var h2 = document.createElement("h2");
           h2.textContent = childdata['banner'].toUpperCase();
           h2.style.margin='0';
           var h6 = document.createElement("h6");
           h6.className ="organizerclass";
           h6.textContent ="PUBG(MOBILE)-By "+ childdata['organizer'].toUpperCase();
           
           div2.appendChild(h2);
           div2.appendChild(h6);
           div1.appendChild(div2);
            var a = document.createElement("a");
            a.className="po";
            a.href="";
            a.style.textDecoration='none';
            var divk = document.createElement("div");
            divk.className="po";
            
           a.appendChild(div1);
           divk.appendChild(a);
           preobjectfdd.appendChild(divk);
           
           
            var div3 = document.createElement("div");
           div3.className ="feature";
           div3.className ="feature col-lg-4 eventplaceclass rty";
         
           
           
                        
           var h5 = document.createElement("h5");
           
           h5.textContent ="online, "+ childdata['eventplace'];
    //               div3.className ="eventplaceclass";
            div3.appendChild(h5);
             div1.appendChild(div3);
           
           var div4 = document.createElement("div");
           
           div4.className ="feature col-lg-4 rty";
       
           
           var h512 = document.createElement("h5");
             var h5124 = document.createElement("div"); 
             h5124.className="rty"
    
           h512.textContent =childdata['registration_status'];
           if(h512.textContent=="open"){
           div4.className ="registration_statusclass feature col-lg-4 rty";}else{div4.className ="registration_statusclass1 feature col-lg-4 rty";}
          var h51 = document.createElement("h5");
           h51.textContent ="Registration "
           h5124.appendChild(h51); 
          h5124.appendChild(h512);
          div4.appendChild(h5124); 
          
          
           div1.appendChild(div4);
           var div9 = document.createElement("button");
           div9.className ="btn btn-outline-warning";
           div9.textContent ="DELETE";
           div9.value=key;
           div9.id=key;
           div9.setAttribute("onclick","ondelete12(this.id)");
    
           var div9001 = document.createElement("button");
           div9001.className ="btn btn-outline-warning";
           div9001.textContent ="PUSH TO";
           div9001.value=key;
           div9001.id=key;
           div9001.setAttribute("onclick","onde(this.id)");
           var div90012 = document.createElement("div");
           div90012.className="rt";
           var div9001y = document.createElement("div");
           div9001y.className="form-group";
           var div9001yz = document.createElement("select");
           div9001yz.id=key +"gg";
           div9001yz.className="form-control";
           var div9001yz1 = document.createElement("option");
           div9001yz1.innerText="morning";
           var div9001yz2 = document.createElement("option");
           div9001yz2.innerText="afternoon";
           var div9001yz3 = document.createElement("option");
           div9001yz3.innerText="night";
           div9001yz.appendChild(div9001yz1);
           div9001yz.appendChild(div9001yz2);
           div9001yz.appendChild(div9001yz3);
           div9001y.appendChild( div9001yz);
           
           
    
    
    
    
    
           var div998 = document.createElement("button");
           var a1 = document.createElement("a");
           a1.href="#targetnamenew";
           div998.className ="btn btn-outline-warning";
           div998.textContent ="UPDATE";
           div998.value=key;
           div998.id=key;
           div998.setAttribute("onclick","update21(this.id)");
           var div91 = document.createElement("div");
           div91.className="rt"
           div91.appendChild(div9);
           a1.appendChild(div998);
            div91.appendChild(a1);
            div90012.appendChild(div9001);
            div90012.appendChild(div9001y);
    
    
    
           preobjectfdd.appendChild(div91);
           preobjectfdd.appendChild(div90012);
    
           preobjectfdd.appendChild(hr9);
          
          
      })
      
      
        
        
          
            // console.log(key);
          }
        });     
                
    
    
    
    
    
                
                
                preobjectg = document.getElementById("qwg");
            
            var databaset = firebase.database().ref().child("pubg").child('night');
            databaset.on('value', snap => {
                    console.log(snap.val());
                    var noofelements=0;
                  for(var j=0;j<10;j++){
                      var key = Object.keys(snap.val())[j];
                      if(!key){noofelements=j;break;}
                      
                  }
                  // console.log(noofelements);
                for(var i=0;i<noofelements;i++){
                var key = Object.keys(snap.val())[i];
                       var test2=  firebase.database().ref().child("pubg").child('night').child(key.toString());
              test2.on('value',function(snapshot){
    //           snapshot.forEach(function(childSnapshot){
                   var childdata=snapshot.val();
                    var div1 = document.createElement("div");
                   div1.className ="row";
                   var div2 = document.createElement("div");
                   div2.className ="feature rty";
                   div2.className ="feature col-lg-4 rty";
                   var hr9 = document.createElement("hr");
                   var div100 = document.createElement("h6");
                   
    //            div100.style.display="none";
                   div100.textContent=key.toString();
                   div100.id=key.toString();
                   div2.appendChild(div100);
                  
                   
                   var h2 = document.createElement("h2");
                   h2.textContent = childdata['banner'].toUpperCase();
                   h2.style.margin='0';
                   var h6 = document.createElement("h6");
                   h6.className ="organizerclass";
                   h6.textContent ="PUBG(MOBILE)-By "+ childdata['organizer'].toUpperCase();
                   
                   div2.appendChild(h2);
                   div2.appendChild(h6);
                   div1.appendChild(div2);
                    var a = document.createElement("a");
                    a.className="po";
                    a.href="";
                    a.style.textDecoration='none';
                    var divk = document.createElement("div");
                    divk.className="po";
                    
                   a.appendChild(div1);
                   divk.appendChild(a);
                   preobjectg.appendChild(divk);
                   
                   
                    var div3 = document.createElement("div");
                   div3.className ="feature";
                   div3.className ="feature col-lg-4 eventplaceclass rty";
                 
                   
                   
                                
                   var h5 = document.createElement("h5");
                   
                   h5.textContent ="online, "+ childdata['eventplace'];
    //               div3.className ="eventplaceclass";
                    div3.appendChild(h5);
                     div1.appendChild(div3);
                   
                   var div4 = document.createElement("div");
                   
                   div4.className ="feature col-lg-4 rty";
               
                   
                   var h512 = document.createElement("h5");
                     var h5124 = document.createElement("div"); 
                     h5124.className="rty"
    
                   h512.textContent =childdata['registration_status'];
                   if(h512.textContent=="open"){
                   div4.className ="registration_statusclass feature col-lg-4 rty";}else{div4.className ="registration_statusclass1 feature col-lg-4 rty";}
                  var h51 = document.createElement("h5");
                   h51.textContent ="Registration "
                   h5124.appendChild(h51); 
                  h5124.appendChild(h512);
                  div4.appendChild(h5124); 
                  
                  
                   div1.appendChild(div4);
                   var div9 = document.createElement("button");
                   div9.className ="btn btn-outline-warning";
                   div9.textContent ="DELETE";
                   div9.value=key;
                   div9.id=key;
                   div9.setAttribute("onclick","ondelete2(this.id)");
                   var div998 = document.createElement("button");
                   var a1 = document.createElement("a");
                   a1.href="#targetnamenew";
                   div998.className ="btn btn-outline-warning";
                   div998.textContent ="UPDATE";
                   div998.value=key;
                   div998.id=key;
                   div998.setAttribute("onclick","update2(this.id)");
                   var div91 = document.createElement("div");
                   div91.className="rt"
                   div91.appendChild(div9);
                   a1.appendChild(div998);
                    div91.appendChild(a1);
                   preobjectg.appendChild(div91);
                   preobjectg.appendChild(hr9);
                  
              })
                    // console.log(key);
                  }
                });
                
                
                
            })()
    var variable=1;
    function onde(valuey){
      pretime =document.getElementById(valuey+"gg").value;
        if(pretime=="morning"){
        document.getElementById("qwe").innerHTML = "";}
    else if(pretime=="afternoon"){
        document.getElementById("qwf").innerHTML = "";}
    else if(pretime=="night"){
        document.getElementById("qwg").innerHTML = "";}
        else if(pretime=="upcoming"){
          document.getElementById("qwg1").innerHTML = "";}
        
          var testing78=firebase.database().ref().child("pubg").child("upcoming").child(valuey.toString());
          testing78.on('value',function(snapshot){
              var childdata95=snapshot.val();
              document.getElementById("inputGroupSelect02789").value= childdata95['registration_status'];
                      document.getElementById("validationCustom029").value= childdata95['eventplace'];
              document.getElementById("validationCustom0219").value= childdata95['organizer'];
              document.getElementById("vali9").value= childdata95['banner'];
                      document.getElementById("inputGroupSelect029").value= childdata95['eventslot'];
                      
                      document.getElementById("valiab7").value= childdata95['prizemoney'];
                              document.getElementById("validationCustom021ab7").value= childdata95['timezone'];
      
              document.getElementById("validationCustom021abc7").value= childdata95['entryfee'];
      
              document.getElementById("validationCustom021abcl7").value= childdata95['url'];
      
              document.getElementById("validationCustom021abck7").value= childdata95['from'];
      
              document.getElementById("validationCustom021abct7").value= childdata95['to'];
              document.getElementById("validationCustom021abctnn1").value= childdata95['telegramlink'];
                      document.getElementById("validationCustom021abctn81").value= childdata95['cashless'];
      document.getElementById("validationCustom021abcty61").value= childdata95['game'];
      document.getElementById("validationCustom021abcl001").value= childdata95['discord'];
    
          })
    
    
        firebase.database().ref().child("pubg").child(pretime).push({
            eventslot:document.getElementById("inputGroupSelect029").value,
            eventslotclass:"eventslotclass",
            banner:document.getElementById("vali9").value,
            bannerclass:"bannerclass",
            organizer:document.getElementById("validationCustom0219").value,
            organizerclass:"organizerclass",
            registration_status:document.getElementById("inputGroupSelect02789").value,
            registration_statusclass:"registration_statusclass",
            eventplace:document.getElementById("validationCustom029").value,
            eventplaceclass:"eventplaceclass",
            prizemoney:document.getElementById("valiab7").value,
            timezone:document.getElementById("validationCustom021ab7").value,
            entryfee:document.getElementById("validationCustom021abc7").value,
            url:document.getElementById("validationCustom021abcl7").value,
            from:document.getElementById("validationCustom021abck7").value,
            to:document.getElementById("validationCustom021abct7").value,
            telegramlink:document.getElementById("validationCustom021abctnn1").value,
                    cashless:document.getElementById("validationCustom021abctn81").value,
                                    game:document.getElementById("validationCustom021abcty61").value,
                                    discord:document.getElementById("validationCustom021abcl001").value,
    
            
        })
    ondelete12(valuey)
    
        location.reload();
        variable++;
    }
    function writedata(){
        pretime =document.getElementById("inputGroupSelect02").value;
        if(pretime=="morning"){
        document.getElementById("qwe").innerHTML = "";}
    else if(pretime=="afternoon"){
        document.getElementById("qwf").innerHTML = "";}
    else if(pretime=="night"){
        document.getElementById("qwg").innerHTML = "";}
        else if(pretime=="upcoming"){
          document.getElementById("qwg1").innerHTML = "";}
        
        firebase.database().ref().child("pubg").child(pretime).push({
            eventslot:document.getElementById("inputGroupSelect02").value,
            eventslotclass:"eventslotclass",
            banner:document.getElementById("vali").value,
            bannerclass:"bannerclass",
            organizer:document.getElementById("validationCustom021").value,
            organizerclass:"organizerclass",
            registration_status:document.getElementById("inputGroupSelect0278").value,
            registration_statusclass:"registration_statusclass",
            eventplace:document.getElementById("validationCustom02").value,
            eventplaceclass:"eventplaceclass",
            prizemoney:document.getElementById("valiab").value,
            timezone:document.getElementById("validationCustom021ab").value,
            entryfee:document.getElementById("validationCustom021abc").value,
            url:document.getElementById("validationCustom021abcl").value,
            from:document.getElementById("validationCustom021abck").value,
            to:document.getElementById("validationCustom021abct").value,
            telegramlink:document.getElementById("validationCustom021abctnn").value,
                    cashless:document.getElementById("validationCustom021abctn8").value,
                                    game:document.getElementById("validationCustom021abcty6").value,
                                    discord:document.getElementById("validationCustom021abcl00").value,
                                    sheet:document.getElementById("validationCustom021abcl00asd").value,
    
    
            
        })
        location.reload();
        variable++;
    }
    function ondelete(value){firebase.database().ref().child("pubg").child("morning").child(value.toString()).remove();location.reload();}
    function ondelete1(value){firebase.database().ref().child("pubg").child("afternoon").child(value.toString()).remove();location.reload();}
    function ondelete2(value){firebase.database().ref().child("pubg").child("night").child(value.toString()).remove();location.reload();}
    function ondelete12(value){firebase.database().ref().child("pubg").child("upcoming").child(value.toString()).remove();location.reload();}
    
    
    
    var string3="wowo";
    function update(value){document.getElementById("adminpanel6").style.display="block";
        var testing=firebase.database().ref().child("pubg").child("morning").child(value.toString());
        testing.on('value',function(snapshot){
            var childdata9=snapshot.val();
            document.getElementById("inputGroupSelect02789").value= childdata9['registration_status'];
                    document.getElementById("validationCustom029").value= childdata9['eventplace'];
            document.getElementById("validationCustom0219").value= childdata9['organizer'];
            document.getElementById("vali9").value= childdata9['banner'];
                    document.getElementById("inputGroupSelect029").value= childdata9['eventslot'];
                    
                    document.getElementById("valiab7").value= childdata9['prizemoney'];
                            document.getElementById("validationCustom021ab7").value= childdata9['timezone'];
    
            document.getElementById("validationCustom021abc7").value= childdata9['entryfee'];
    
            document.getElementById("validationCustom021abcl7").value= childdata9['url'];
    
            document.getElementById("validationCustom021abck7").value= childdata9['from'];
    
            document.getElementById("validationCustom021abct7").value= childdata9['to'];
            document.getElementById("validationCustom021abctnn1").value= childdata9['telegramlink'];
                    document.getElementById("validationCustom021abctn81").value= childdata9['cashless'];
    document.getElementById("validationCustom021abcty61").value= childdata9['game'];
    document.getElementById("validationCustom021abcl001").value=childdata9['discord'];
    document.getElementById("validationCustom021abcl00asd1").value=childdata9['sheet'];
    
    
                    
                    
                    
                    document.getElementById(string3).id= value.toString();
                    
                    string3=value.toString();
                    var di=document.createElement("div");
                                    var niv=document.createElement("p");
                                    
                                    
                                    di.appendChild(niv)
                                    var niba=document.getElementById("mkl");
                                    if(niba.innerHTML==null){
                                    niv.innerText="morning";}else{niba.innerHTML="";niv.innerText="morning";}
                                    niba.appendChild(di);
    
                    
    
            
    
        })
    }
    function update1(value){document.getElementById("adminpanel6").style.display="block";
        var testing=firebase.database().ref().child("pubg").child("afternoon").child(value.toString());
        testing.on('value',function(snapshot){
            var childdata9=snapshot.val();
            document.getElementById("inputGroupSelect02789").value= childdata9['registration_status'];
                    document.getElementById("validationCustom029").value= childdata9['eventplace'];
            document.getElementById("validationCustom0219").value= childdata9['organizer'];
            document.getElementById("vali9").value= childdata9['banner'];
                    document.getElementById("inputGroupSelect029").value= childdata9['eventslot'];
                         document.getElementById("valiab7").value= childdata9['prizemoney'];
                            document.getElementById("validationCustom021ab7").value= childdata9['timezone'];
    
            document.getElementById("validationCustom021abc7").value= childdata9['entryfee'];
    
            document.getElementById("validationCustom021abcl7").value= childdata9['url'];
    
            document.getElementById("validationCustom021abck7").value= childdata9['from'];
    
            document.getElementById("validationCustom021abct7").value= childdata9['to'];
            document.getElementById("validationCustom021abctnn1").value= childdata9['telegramlink'];
                    document.getElementById("validationCustom021abctn81").value= childdata9['cashless'];
                    document.getElementById("validationCustom021abcty61").value= childdata9['game'];
                  document.getElementById("validationCustom021abcl001").value=childdata9['discord'];
    document.getElementById("validationCustom021abcl00asd1").value=childdata9['sheet'];
    
    
    
                    document.getElementById(string3).id= value.toString();
                    
                    string3=value.toString();
                    
                    var di=document.createElement("div");
                                    var niv=document.createElement("p");
                                    
                                    
                                    di.appendChild(niv)
                                    var niba=document.getElementById("mkl");
                                    if(niba.innerHTML==null){
                                    niv.innerText="afternoon";}else{niba.innerHTML="";niv.innerText="afternoon";}
                                    niba.appendChild(di);
    
            
    
        })
    }
    function update2(value){
        document.getElementById("adminpanel6").style.display="block";
        var testing=firebase.database().ref().child("pubg").child("night").child(value.toString());
        testing.on('value',function(snapshot){
            var childdata9=snapshot.val();
            document.getElementById("inputGroupSelect02789").value= childdata9['registration_status'];
                    document.getElementById("validationCustom029").value= childdata9['eventplace'];
            document.getElementById("validationCustom0219").value= childdata9['organizer'];
            document.getElementById("vali9").value= childdata9['banner'];
                    document.getElementById("inputGroupSelect029").value= childdata9['eventslot'];
                         document.getElementById("valiab7").value= childdata9['prizemoney'];
                            document.getElementById("validationCustom021ab7").value= childdata9['timezone'];
    
            document.getElementById("validationCustom021abc7").value= childdata9['entryfee'];
    
            document.getElementById("validationCustom021abcl7").value= childdata9['url'];
    
            document.getElementById("validationCustom021abck7").value= childdata9['from'];
    
            document.getElementById("validationCustom021abct7").value= childdata9['to'];
            document.getElementById("validationCustom021abctnn1").value= childdata9['telegramlink'];
                    document.getElementById("validationCustom021abctn81").value= childdata9['cashless'];
                    document.getElementById("validationCustom021abcty61").value= childdata9['game'];
                  document.getElementById("validationCustom021abcl001").value=childdata9['discord'];
    document.getElementById("validationCustom021abcl00asd1").value=childdata9['sheet'];
    
    
    
                    document.getElementById(string3).id= value.toString();
                    
                    string3=value.toString();
                    
                    var di=document.createElement("div");
                                    var niv=document.createElement("p");
                                   
                                    di.appendChild(niv)
                                    var niba=document.getElementById("mkl");
                                    if(niba.innerHTML==null){
                                    niv.innerText="night";}else{niba.innerHTML="";niv.innerText="night";}
                                    niba.appendChild(di);
    
            
    
        })
    }
    
    
    function update21(value){
      document.getElementById("adminpanel6").style.display="block";
      var testing=firebase.database().ref().child("pubg").child("upcoming").child(value.toString());
      testing.on('value',function(snapshot){
          var childdata9=snapshot.val();
          document.getElementById("inputGroupSelect02789").value= childdata9['registration_status'];
                  document.getElementById("validationCustom029").value= childdata9['eventplace'];
          document.getElementById("validationCustom0219").value= childdata9['organizer'];
          document.getElementById("vali9").value= childdata9['banner'];
                  document.getElementById("inputGroupSelect029").value= childdata9['eventslot'];
                       document.getElementById("valiab7").value= childdata9['prizemoney'];
                          document.getElementById("validationCustom021ab7").value= childdata9['timezone'];
    
          document.getElementById("validationCustom021abc7").value= childdata9['entryfee'];
    
          document.getElementById("validationCustom021abcl7").value= childdata9['url'];
    
          document.getElementById("validationCustom021abck7").value= childdata9['from'];
    
          document.getElementById("validationCustom021abct7").value= childdata9['to'];
          document.getElementById("validationCustom021abctnn1").value= childdata9['telegramlink'];
                  document.getElementById("validationCustom021abctn81").value= childdata9['cashless'];
                  document.getElementById("validationCustom021abcty61").value= childdata9['game'];
                  document.getElementById("validationCustom021abcl001").value=childdata9['discord'];
    document.getElementById("validationCustom021abcl00asd1").value=childdata9['sheet'];
    
    
                  document.getElementById(string3).id= value.toString();
                  
                  string3=value.toString();
                  
                  var di=document.createElement("div");
                                  var niv=document.createElement("p");
                                 
                                  di.appendChild(niv)
                                  var niba=document.getElementById("mkl");
                                  if(niba.innerHTML==null){
                                  niv.innerText="upcoming";}else{niba.innerHTML="";niv.innerText="upcoming";}
                                  niba.appendChild(di);
    
          
    
      })
    }
    function updatedata(value){
        var nibab=document.getElementById("mkl");
        saved_data =nibab.innerText.toString();
        firebase.database().ref().child("pubg").child(saved_data).child(value.toString()).set({
            eventslot:document.getElementById("inputGroupSelect029").value,
            eventslotclass:"eventslotclass",
            banner:document.getElementById("vali9").value,
            bannerclass:"bannerclass",
            organizer:document.getElementById("validationCustom0219").value,
            organizerclass:"organizerclass",
            registration_status:document.getElementById("inputGroupSelect02789").value,
            registration_statusclass:"registration_statusclass",
            eventplace:document.getElementById("validationCustom029").value,
            eventplaceclass:"eventplaceclass",
            prizemoney:document.getElementById("valiab7").value,
            timezone:document.getElementById("validationCustom021ab7").value,
            entryfee:document.getElementById("validationCustom021abc7").value,
            url:document.getElementById("validationCustom021abcl7").value,
            from:document.getElementById("validationCustom021abck7").value,
            to:document.getElementById("validationCustom021abct7").value,
            cashless:document.getElementById("validationCustom021abctn81").value,
            telegramlink:document.getElementById("validationCustom021abctnn1").value,
            game:document.getElementById("validationCustom021abcty61").value,
            discord:document.getElementById("validationCustom021abcl001").value,
            sheet:document.getElementById("validationCustom021abcl00asd1").value,
    
    
            
            
            
        })
    location.reload();}
    
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        // console.log(user);
        if(user.email=="myknot.gaming@gmail.com"){}else{window.location = 'login.html';}
    
        //After successful login, user will be redirected to home.html
      }
      else{window.location = 'login.html';}
      
     
    });
    function showdatapromo(){
      preobjectgzx = document.getElementById("something1");
    
      preobjectgzxa = document.getElementById("validationCustom021abct7098").value.toString().toUpperCase();
            var databasetnew1 = firebase.database().ref().child('promocode').child(preobjectgzxa);
            databasetnew1.on('value', snap => {
            console.log(snap.val());
                    var noofelements = 0;
                    for (var j = 0; j < 10; j++){
            var key = Object.keys(snap.val())[j];
                    if (!key){noofelements = j; break; }
    
            }
           
    
            console.log(noofelements);
                    document.getElementById("something1").innerHTML = "";
                    var dov12 = document.createElement("div");
                    var h2632 = document.createElement("h4");
                    h2632.textContent = "total:-"+ noofelements.toString();
                    dov12.appendChild(h2632);
            
                    preobjectgzx.appendChild(dov12);
                    for (var i = 0; i < noofelements; i++){
    
            var key = Object.keys(snap.val())[i];
                    var test298 = firebase.database().ref().child('promocode').child(preobjectgzxa).child(key.toString());;
                    test298.on('value', function(snapshot){
                      var childdata = snapshot.val();
                      var dov1 = document.createElement("div");
                      var h26 = document.createElement("h6");
                      h26.textContent = (i+1) +"."+childdata['userprof'].toUpperCase();
                      dov1.appendChild(h26);
                      preobjectgzx.appendChild( dov1);
                      
    
    
    
    
    
    
                    })}});
    
    
    };