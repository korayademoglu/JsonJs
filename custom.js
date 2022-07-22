
let data = fetch("data.json").then(res => res.json()).then(mydata => {
 document.createElement("OL");
    for (let i = 0; i < mydata.kullanicilar.length; i++) {
        document.getElementById("test").innerHTML += "<li>" + (i + 1) + ". " + mydata.kullanicilar[i].name + " " + mydata.kullanicilar[i].surname + " Yaşı:" + mydata.kullanicilar[i].age + "</li>";
    }

});