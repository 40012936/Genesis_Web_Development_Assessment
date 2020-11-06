function checkUserNameExitsOrNot()
    {
     var usernames=['Ramaya','Tomaya','Rahula'];
     var username=document.getElementById("name").value;

    var count=0;
    for(var i=0;i<usernames.length;i++)
    {
        if(username==usernames[i])
    {
        count=count+1;
    }
    }
    if(count>0)
    {
        alert("Username Exists");
    }
    else{
        usernames.push(username);
        alert("Registration Successful!! "+" Hello "+username);
        document.getElementById("mydiv").innerHTML = "Hello " +username;
        
    }
    }