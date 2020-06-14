class MobileManage {
    constructor(name) {
        this.name = name;
        this.mobiles = [];
        this.data = [];
    }

    init(){
        for (let i = 0; i < this.data.length; i++) {
            let mobile = new Mobile(this.data[i].name,this.data[i].price,this.data[i].color,this.data[i].status,this.data[i].category,this.data[i].desc);
            mobile.img = this.data[i].img;
            this.addMobile(mobile);
        }
    }

    addMobile(mobile){
        this.mobiles.push(mobile);
    }

    getHtml(){
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Status</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th colspan ="2" >Action</th>
                        </tr>`;
        for (let i = 0; i < this.mobiles.length; i++) {
            table += "<tr>"+this.mobiles[i].getHtml() + this.getAction(i)+'</tr>';
        }
        table+=`</table>`;
        return table;
    }
    getAction(index){
        let action = `<td><button class="btn btn-warning" onclick="edit(${index})" data-toggle="modal" data-target="#myModal">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getMobileByIndex(index){
        return this.mobiles[index];
    }
    
    deleteMobile(index){
        this.mobiles.splice(index,1);
    }
    
}    