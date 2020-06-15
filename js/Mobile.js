class Mobile {
    constructor(img, name, price, color, status, category, desc) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.status = status;
        this.desc = desc;
        this.category = category;
        this.img = img;
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
    getHtmlViewUser(){
        let html = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${this.img}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">${this.price} Đ</p>
                            <a href="#" class="btn btn-primary">Chi tiết</a>
                        </div>
                    </div>
                   `;
        return html;
    }
}

