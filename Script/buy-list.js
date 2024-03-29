var datas = JSON.parse(localStorage.getItem("buy-list"));
var booklist = JSON.parse(localStorage.getItem("book-list")) || [];

/* The code snippet is using the `map` function to iterate over the `datas` array and create a table
row (`tr`) for each element in the array. */
datas.map(function (elem, i) {
  var row = document.createElement("tr");
  var data1 = document.createElement("td");
  data1.innerText = elem.name;
  var data2 = document.createElement("td");
  data2.innerText = elem.auther;
  var data3 = document.createElement("td");
  data3.innerText = elem.desc;
  var data4 = document.createElement("td");
  data4.innerText = elem.date;
  var data5 = document.createElement("td");
  data5.innerText = elem.category;
  var data6 = document.createElement("td");
  data6.innerText = elem.price;
  var btn = document.createElement("button");
  btn.setAttribute("id", "removelist");
  btn.innerText = "remove";
  btn.addEventListener("click", function () {
    objcom = {
      name: elem.name,
      auther: elem.auther,
      desc: elem.desc,
      date: elem.date,
      category: elem.category,
      price: elem.price,
    };
    booklist.push(objcom);
    localStorage.setItem("book-list", JSON.stringify(booklist));
    datas.splice(i, 1);
    localStorage.setItem("buy-list", JSON.stringify(datas));
    row.remove();
  });

  row.append(data1, data2, data3, data4, data5, data6, btn);
  document.querySelector("tbody").append(row);
});
