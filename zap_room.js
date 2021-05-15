
var firebaseConfig = {
      apiKey: "AIzaSyDpeFCaCpHexgJ5oLQroOIJLEslDLBhAoY",
      authDomain: "kwitter-de8dd.firebaseapp.com",
      databaseURL: "https://kwitter-de8dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-de8dd",
      storageBucket: "kwitter-de8dd.appspot.com",
      messagingSenderId: "647848288879",
      appId: "1:647848288879:web:0cd226d64202c959f4239a",
      measurementId: "G-W72E47J1NK"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
