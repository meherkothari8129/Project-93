
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyA8GQT13lv7VmKHt50wK9rZjnY9Zpq2z3I",
      authDomain: "kwitter-d3f38.firebaseapp.com",
      projectId: "kwitter-d3f38",
      storageBucket: "kwitter-d3f38.appspot.com",
      messagingSenderId: "522053722248",
      appId: "1:522053722248:web:e56ad98410a177480dff3d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
