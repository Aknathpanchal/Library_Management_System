/**
 * The function "handleFilter" filters an array of data based on a selected value and adds the filtered
 * data to a product list.
 * @returns The function `handleFilter()` returns either all the products (`datas`) or a filtered array
 * of products based on the selected category (`value`).
 */
function handleFilter() {
  let value = document.getElementById("Filtertag").value;
  if (value == "all") {
    addProduct(datas);
  } else {
    let checkValue = datas.filter(function (el) {
      return el.category === value;
    });
    addProduct(checkValue);
  }
}

/**
 * The function sorts an array of data objects by price in either ascending or descending order based
 * on the selected value of a dropdown menu.
 * @returns The function does not explicitly return anything.
 */
function sortByPrice() {
  datas.map(function (elem) {
    var sorting = document.querySelector("#sorter").value;
    console.log(sorting);
    if (sorting == "l2h") {
      datas.sort(function (a, b) {
        return a.price - b.price;
      });
      appendProduct(datas);
    } else if (sorting == "h2l") {
      datas.sort(function (a, b) {
        return b.price - a.price;
      });
      productappend(datas);
    }
  });
}

var datas = JSON.parse(localStorage.getItem("book-list")) || [];
var buylist = JSON.parse(localStorage.getItem("buy-list")) || [];
var bookmark = JSON.parse(localStorage.getItem("bookmark-list")) || [];

/* The code block is using the `map()` function to iterate over each element in the `datas` array. For
each element, it creates a new table row (`tr`) and populates it with data from the element. It
creates table data (`td`) elements for each property of the element (name, author, description,
date, category, price). */
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
  btn.setAttribute("id", "addlist");
  btn.innerText = "Buy";
  btn.addEventListener("click", function () {
    objcom = {
      name: elem.name,
      auther: elem.auther,
      desc: elem.desc,
      date: elem.date,
      category: elem.category,
      price: elem.price,
    };
    buylist.push(objcom);

    localStorage.setItem("buy-list", JSON.stringify(buylist));

    datas.splice(i, 1);
    localStorage.setItem("book-list", JSON.stringify(datas));
    row.remove();
  });

  var data7 = document.createElement("td");
  data7.append(btn);

  var btn1 = document.createElement("button");
  btn1.setAttribute("id", "addbookmark");
  btn1.innerText = "Bookmark";
  btn1.addEventListener("click", function () {
    objcom = {
      name: elem.name,
      auther: elem.auther,
      desc: elem.desc,
      date: elem.date,
      category: elem.category,
      price: elem.price,
    };
    bookmark.push(objcom);

    localStorage.setItem("bookmark-list", JSON.stringify(bookmark));

    datas.splice(i, 1);
    localStorage.setItem("book-list", JSON.stringify(datas));
    row.remove();
  });
  var data8 = document.createElement("td");
  data8.append(btn1);

  row.append(data1, data2, data3, data4, data5, data6, data7, data8);
  document.querySelector("tbody").append(row);
});
