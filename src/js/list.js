const myList = document.getElementById('myList');

const productList = [];

class Product {
  constructor(prod, pcs, cat) {
    this.prod = prod;
    this.pcs = pcs;
    this.cat = cat;
  }
}

printItem = function () {
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    const el = document.createElement('li');

    el.classList.add('list-group-item');
    el.classList.add('list-group-item-primary');
    el.innerHTML = `
        <div class="d-flex">
            <div class="me-auto me-2">${product.prod} <span class="badge primary">${product.pcs} szt</span> <div class="small">${product.cat}</div></div>
            <div class="me-2"><i class="fas fa-edit fa-sm"></i></div>
            <div><a href="#" onclick="delItem(${i});return false;"><i class="fas fa-trash fa-sm"></i></a></div>
        </div>`;
    // el.setAttribute("title", item);
    // el.style.setProperty("padding", "5px");
    // el.style.margin="10px";

    const div = document.getElementById('myList');
    div.appendChild(el);
    // console.log(product.prod);
  }
};

window.addItem = function () {
  const prodItem = document.getElementById('addForm').value;
  const prodPcs = document.getElementById('addPcs').value;
  const catItem = document.getElementById('catForm').value;

  document.getElementById('addForm').value = '';

  if (prodItem.length > 1 && prodPcs > 0) {
    document.getElementById('myList').innerHTML = '';
    const product = new Product(prodItem, prodPcs, catItem);
    productList.push(product);
    printItem();
  } else {
    alert('Niepoprawne dane');
  }
};

window.delItem = function (index) {
  productList.splice(index, 1);
  console.log(`del ${index}`);
  document.getElementById('myList').innerHTML = '';
  printItem();
};

window.editItem = function (index) {};

countItem = function () {};