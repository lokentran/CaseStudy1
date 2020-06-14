const MOBILE = "mobile";
let store = new MobileManage("Tung Store");
store.data = loadData();
console.log(store.data);
store.init();
display(store.getHtml());
console.log(store.mobiles);
let currentMobile = 0;

function display(table) {
    document.getElementById('mobile-manage').innerHTML = table;
    saveData();
}
function addMobile() {
    let name = document.getElementById("mobile-name").value;
    let price = document.getElementById("mobile-price").value;
    let color = document.getElementById("mobile-color").value;
    let status = document.getElementById("mobile-status").value;
    let category = document.getElementById("mobile-category").value;
    let desc = document.getElementById("mobile-desc").value;
    let img = document.getElementById("mobile-img").value;
    let mobile = new Mobile(name,price,color,status,category,desc);
    mobile.img = img;
    store.addMobile(mobile);
    display(store.getHtml());
    document.getElementById('form-add').reset();
}

function saveData() {
    localStorage.setItem(MOBILE, JSON.stringify(store.mobiles));
}

function loadData() {
    return localStorage.hasOwnProperty(MOBILE)? JSON.parse(localStorage.getItem(MOBILE)): [];
}

function edit(index) {
    let mobile = store.getMobileByIndex(index);
    document.getElementById('edit-name').value = mobile.name;
    document.getElementById('edit-price').value = mobile.price;
    document.getElementById('edit-color').value = mobile.color;
    document.getElementById('edit-status').value = mobile.status;
    document.getElementById('edit-category').value = mobile.category;
    document.getElementById('edit-desc').value = mobile.desc;
    document.getElementById('edit-img').value = mobile.img;
    currentMobile = index;
}

function editMobile() {
    let name = document.getElementById("edit-name").value;
    let price = document.getElementById("edit-price").value;
    let color = document.getElementById("edit-color").value;
    let status = document.getElementById("edit-status").value;
    let category = document.getElementById("edit-category").value;
    let desc = document.getElementById("edit-desc").value;
    let img = document.getElementById("edit-img").value;
    store.mobiles[currentMobile].edit(name,price,color,status,category,desc);
    store.mobiles[currentMobile].img = img;
    display(store.getHtml());
    document.getElementById('form-edit').reset();
} 

function del(index) {
    let confirmDel = confirm("Are you sure?");
    if(confirmDel) {
        store.deleteMobile(index);
        display(store.getHtml());
    }

}