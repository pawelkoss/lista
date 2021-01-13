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
  document.getElementById('myList').innerHTML = '';
  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    const el = document.createElement('li');

    el.classList.add('list-group-item');
    el.classList.add('list-group-item-primary');
    el.innerHTML = `
      <div id="listItem${i}">
        <div class="d-flex">
            <div class="me-auto me-2">${product.prod} <span class="badge bg-primary">${product.pcs} szt</span> <div class="small">${product.cat}</div></div>
            <div class="me-2"><a href="#" onclick="showEdit(${i});return false;"><i class="fas fa-edit fa-sm" ></i></a></div>
            <div><a href="#" onclick="delItem(${i});return false;"><i class="fas fa-trash fa-sm"></i></a></div>
        </div>
      </div>
        <div id="listEdit${i}" class="form-control-sm" style="display:none">
        <input type="text" id="name${i}" value="${product.prod}"> szt:<input type="text" id="pcs${i}" size=2 value="${product.pcs}"><i class="fas fa-save fa-lg m-2" onclick="editItem(${i})"></i>
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

window.editItem = function (index) {

  productList[index].prod = document.querySelector(`#name${index}`).value;
  productList[index].pcs = document.querySelector(`#pcs${index}`).value;
  printItem();
  
};

window.showEdit = function (index) {
  document.querySelector(`#listItem${index}`).style.display = "none";
  document.querySelector(`#listEdit${index}`).style.display = "block";
  }

countItem = function () {};
