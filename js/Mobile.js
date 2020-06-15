class Mobile {
    constructor(img,name, price, color, status, category, desc) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.status = status;
        this.desc = desc;
        this.category = category;
        this.img = 'mobile_icon.png';
    }
    edit(img,name, price, color, status, category, desc){
        this.name = name;
        this.price = price;
        this.color = color;
        this.status = status;
        this.category = category;
        this.desc = desc;
        this.img = img;
    }
    getHtml(){
        let html = `<td><img src="${this.img}"></td>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.color}</td>
                    <td>${this.status}</td>
                    <td>${this.category}</td>
                    <td>${this.desc}</td>`;
        return html;
    }
}