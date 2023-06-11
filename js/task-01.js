const list = document.querySelector("#categories");
console.log("Number of categories:", list.childElementCount);

[...list.children].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.childElementCount);
});
