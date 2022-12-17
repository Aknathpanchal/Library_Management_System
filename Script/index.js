var data;
data=JSON.parse(localStorage.getItem("book-list"))||[];
document.querySelector("#form").addEventListener("submit",getdata);

function getdata(event){
    event.preventDefault();


    var name =document.querySelector("#name").value;
    var auther =document.querySelector("#auther").value;
    var desc =document.querySelector("#desc").value;
    var date=document.querySelector("#date").value;
    var category=document.querySelector("#category").value;
    var price=document.querySelector("#price").value;

    var objdata={
        name:name,
        auther:auther,
        desc:desc,
        date:date,
        category:category,
        price:price
    }
    data.push(objdata)
    localStorage.setItem("book-list",JSON.stringify(data))
    console.log(data)
}
console.log(data)