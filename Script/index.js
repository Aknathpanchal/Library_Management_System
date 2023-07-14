var data;
data = JSON.parse(localStorage.getItem("book-list")) || [];
document.querySelector("#form").addEventListener("submit", getdata);

/**
 * The function `getdata` is used to retrieve data from form inputs, create an object with the data,
 * store it in local storage, and log the data to the console.
 * @param event - The event parameter is an object that represents the event that triggered the
 * function. In this case, it is used to prevent the default behavior of a form submission, which is to
 * refresh the page. By calling `event.preventDefault()`, the function prevents the form from being
 * submitted and the page from being refreshed
 */
function getdata(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var auther = document.querySelector("#auther").value;
  var desc = document.querySelector("#desc").value;
  var date = document.querySelector("#date").value;
  var category = document.querySelector("#category").value;
  var price = document.querySelector("#price").value;

  var objdata = {
    name: name,
    auther: auther,
    desc: desc,
    date: date,
    category: category,
    price: price,
  };
  data.push(objdata);
  localStorage.setItem("book-list", JSON.stringify(data));
  console.log(data);
}
