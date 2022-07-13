function addRoom(){
    Room_names = document.getElementById("room_name").value;

    firebase.database().ref("/").child(Room_names).update({
          purpose : "adding room name"
    });

    localStorage.setItem("Room_names",Room_names);

    window.location = "LetsChatRoom.html"
}

function getData() 
{
    firebase.database().ref("/").on('value',
    function(snapshot) 
    {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) 
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();