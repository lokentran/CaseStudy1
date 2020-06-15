const MOBILE = 'mobile';
let mobiles= loadData(); 

function saveData() {
    localStorage.setItem(MOBILE, JSON.stringify(store.mobiles));
}

function loadData() {
    return localStorage.hasOwnProperty(MOBILE)? JSON.parse(localStorage.getItem(MOBILE)): [];
}