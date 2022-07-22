
let data = fetch("data.json").then(res => res.json()).then(mydata => {
    let ol = document.createElement("OL");
    ol.setAttribute("id", "myOl");
    document.getElementById("test").appendChild(ol);
    for (let i = 0; i < mydata.kullanicilar.length; i++) {
        let li = document.createElement("LI");
        let desc = document.createTextNode(mydata.kullanicilar[i].name + " "
        + mydata.kullanicilar[i].surname + " Yaşı:" + mydata.kullanicilar[i].age);
        li.appendChild(desc);
        document.getElementById("myOl").appendChild(li);           

    }
    
});