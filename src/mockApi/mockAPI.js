const data = [{
    "id": 1,
    "title": "Jersey",
    "stock": 3,
    "price": "$6.50",
    "description": "Jersey fina de puntos",
    "image": "https://www.zeeman.com/media/catalog/product/2/0/2003870451420_Front.jpg?quality=90&fit=bounds&height=340&width=270&canvas=270:340",
    "category": "Games"
  }, {
    "id": 2,
    "title": "Vestido",
    "stock": 15,
    "price": "$0.38",
    "description": "Vestido de rayas",
    "image": "https://www.zeeman.com/media/catalog/product/2/0/2003820408559_Front.jpg?quality=90&fit=bounds&height=340&width=270&canvas=270:340",
    "category": "Automotive"
  }, {
    "id": 3,
    "title": "Item 3",
    "stock": 11,
    "price": "$8.34",
    "description": "sit amet cursus id turpis",
    "image": "http://dummyimage.com/226x100.png/cc0000/ffffff",
    "category": "Garden"
  }, {
    "id": 4,
    "title": "Item 1",
    "stock": 15,
    "price": "$7.02",
    "description": "diam cras pellentesque volutpat dui maecenas",
    "image": "http://dummyimage.com/195x100.png/ff4444/ffffff",
    "category": "Games"
  }, {
    "id": 5,
    "title": "Item 2",
    "stock": 13,
    "price": "$6.68",
    "description": "cum sociis natoque penatibus et magnis dis",
    "image": "http://dummyimage.com/106x100.png/ff4444/ffffff",
    "category": "Automotive"
  }, {
    "id": 6,
    "title": "Item 3",
    "stock": 8,
    "price": "$2.23",
    "description": "posuere nonummy integer non velit donec diam neque vestibulum",
    "image": "http://dummyimage.com/236x100.png/cc0000/ffffff",
    "category": "Clothing"
  }, {
    "id": 7,
    "title": "Item 1",
    "stock": 4,
    "price": "$4.18",
    "description": "molestie nibh in lectus pellentesque at nulla",
    "image": "http://dummyimage.com/138x100.png/cc0000/ffffff",
    "category": "Tools"
  }, {
    "id": 8,
    "title": "Item 2",
    "stock": 2,
    "price": "$8.73",
    "description": "eget vulputate ut ultrices vel",
    "image": "http://dummyimage.com/164x100.png/cc0000/ffffff",
    "category": "Shoes"
  }, {
    "id": 9,
    "title": "Item 3",
    "stock": 7,
    "price": "$6.46",
    "description": "quisque ut erat curabitur gravida nisi at",
    "image": "http://dummyimage.com/120x100.png/dddddd/000000",
    "category": "Home"
  }, {
    "id": 10,
    "title": "Item 1",
    "stock": 2,
    "price": "$4.75",
    "description": "in faucibus orci luctus et ultrices posuere cubilia",
    "image": "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    "category": "Outdoors"
  }, {
    "id": 11,
    "title": "Item 2",
    "stock": 6,
    "price": "$8.29",
    "description": "convallis duis consequat dui nec nisi volutpat eleifend",
    "image": "http://dummyimage.com/243x100.png/cc0000/ffffff",
    "category": "Industrial"
  }, {
    "id": 12,
    "title": "Item 3",
    "stock": 13,
    "price": "$3.41",
    "description": "id turpis integer aliquet massa",
    "image": "http://dummyimage.com/120x100.png/ff4444/ffffff",
    "category": "Books"
  }, {
    "id": 13,
    "title": "Item 1",
    "stock": 15,
    "price": "$8.29",
    "description": "mattis egestas metus aenean fermentum donec ut mauris eget",
    "image": "http://dummyimage.com/113x100.png/dddddd/000000",
    "category": "Books"
  }, {
    "id": 14,
    "title": "Item 2",
    "stock": 5,
    "price": "$1.97",
    "description": "lacus morbi sem mauris laoreet",
    "image": "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
    "category": "Electronics"
  }, {
    "id": 15,
    "title": "Item 3",
    "stock": 14,
    "price": "$2.01",
    "description": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor",
    "image": "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
    "category": "Clothing"
  }]
  

  export function getData(){
    return new Promise ( (resolve,reject)=>{
            setTimeout(()=> resolve(data),1500);
        }
    )
  }

  export function getSingleData(idParams){
    return new Promise ( (resolve,reject)=>{
        let result = data.find((item) => {
            return item.id === Number(idParams);
          });
            setTimeout(()=> resolve(result),1500);
        }
    )
  }