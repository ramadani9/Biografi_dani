function tambah()
{
    var list = document.getElementById("bodyCaption");
    var text = document.getElementById("bodyCaption");
    var id = document.getElementById("nama").value;
    var Tarea = document.getElementById("area").value;


    if(id == "")
    {
        alert("Tolong isi nama !")
    }
    else if(Tarea == "")
    {
        alert("Tolong isi Caption !")
    }
    else if(id == "" && Tarea == "")
    {
        alert("Tolong isi Caption dan nama !")
    }
    else
    {
        var NewDiv = document.createElement("div")
        NewDiv.setAttribute('id', 'listCaption')
        var title = document.createElement("h2");
        title.innerHTML = id;
        var Subtitle = document.createElement("p")
        Subtitle.innerHTML = Tarea;
        NewDiv.appendChild(title);
        NewDiv.appendChild(Subtitle);

        list.appendChild(NewDiv);

        
    }


}