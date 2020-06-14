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


}    