const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closebtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => nav.classList.add('active'));
}
if (closebtn) {
    closebtn.addEventListener('click', () => nav.classList.remove('active'));
}
//product details object
const product_data = [
    {
        name: "Cartoon Astronaut T-Shirts",
        category: "T-Shirts",
        price: "74",
        img: "img/products/f1.jpg"
    },
    {
        name: "Cartoon Astronaut T-Shirts",
        category: "T-Shirts",
        price: "74",
        img: "img/products/f2.jpg"
    },
    {
        name: "Cartoon Astronaut T-Shirts",
        category: "T-Shirts",
        price: "74",
        img: "img/products/f3.jpg"
    },
    {
        name: "Cartoon Astronaut T-Shirts",
        category: "T-Shirts",
        price: "74",
        img: "img/products/f4.jpg"
    },
    {
        name: "Cartoon Astronaut T-Shirts",
        category: "T-Shirts",
        price: "74",
        img: "img/products/f5.jpg"
    },
    {
        name: "Silk color Shirt",
        category: "Shirts",
        price: "80",
        img: "img/products/f6.jpg"
    },
    {
        name: "flowery Pants",
        category: "Pants",
        price: "50",
        img: "img/products/f7.jpg"
    },
    {
        name: "mens Pants",
        category: "Pants",
        price: "90",
        img: "img/products/n6.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "75",
        img: "img/products/n3.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "75",
        img: "img/products/n1.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "84",
        img: "img/products/n2.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "75",
        img: "img/products/n3.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "84",
        img: "img/products/n4.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "75",
        img: "img/products/n5.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "84",
        img: "img/products/n7.jpg"
    },
    {
        name: "Mens Shirts",
        category: "Shirts",
        price: "75",
        img: "img/products/n8.jpg"
    },


];

// fillter in shop page
const filterbtn = document.getElementById('filterbtn');
const filterform = document.getElementById('filterform');
const closefilter = document.getElementById('closefilter');

const nameinput = document.getElementById('nameinput');
const category = document.getElementById('category');
const minprice = document.getElementById('minprice');
const maxprice = document.getElementById('maxprice');

if (filterbtn) {
    filterbtn.addEventListener('click', () => {
        filterform.classList.add('show');
        filterform.classList.remove('hide');
    });
}
if (closefilter) {
    closefilter.addEventListener('click', () => {
        filterform.classList.remove('show')
        filterform.classList.add('hide');
    });
}

function resetvalue() {
    nameinput.value = "";
    category.value = "";
    minprice.value = "";
    maxprice.value = "";
    displayproduct(product_data);
}
const procontainer = document.getElementById('productbox');

function displayproduct(objarr) {
    procontainer.innerHTML = "";
    const star = [];
    console.log(objarr.length);
    if (objarr.length < 1) {
        let probox = document.createElement('div');
        probox.classList.add('probox');
        procontainer.appendChild(probox);
    } else {
        console.log('elemets are there: ');
        objarr.forEach(element => {

            console.log('obj created: ');
            let pro = document.createElement('div');
            pro.classList.add('pro');
            pro.setAttribute('onclick', 'window.location.href="singlepro.html";');
            let img = document.createElement('img');
            img.src = element.img;
            let des = document.createElement('div');
            des.classList.add('des');
            let span = document.createElement('span');
            span.append('adidas');
            let name = document.createElement('h5');
            name.append(element.name);
            let stars = document.createElement('div');
            stars.classList.add('star');
            for (let i = 0; i < 5; i++) {
                star[i] = document.createElement('i');
                star[i].classList.add('fa-sharp');
                star[i].classList.add('fa-solid');
                star[i].classList.add('fa-star');
            }
            let price = document.createElement('h4');
            price.append('$ ' + element.price);
            let a = document.createElement('a');
            a.href = '#';
            a.classList.add('cart');
            let cartlogo = document.createElement('i');
            cartlogo.classList.add('fa');
            cartlogo.classList.add('fa-light');
            cartlogo.classList.add('fa-cart-shopping');

            procontainer.appendChild(pro);
            pro.appendChild(img);
            pro.appendChild(des);
            des.appendChild(span);
            des.appendChild(name);
            des.appendChild(stars);
            for (let i = 0; i < 5; i++) {
                stars.appendChild(star[i]);
            }
            des.appendChild(price);
            pro.appendChild(a);
            a.appendChild(cartlogo);
        });
    }
}

function filterdata() {
    let newlist = [...product_data];  // making new copy
    event.preventDefault();


    if (nameinput.value !== '' && nameinput.value !== null) {
        newlist = newlist.filter(product => { return product.name.toLowerCase().includes(nameinput.value.toLowerCase()) });
        displayproduct(newlist);
    }
    if (category.value !== '') {
        newlist = newlist.filter(product => { return product.category.toLowerCase() == category.value.toLowerCase() });
        displayproduct(newlist);
    }
    if (minprice.value !== '') {
        newlist = newlist.filter(product => { return product.price >= minprice.value });
        displayproduct(newlist);
    }
    if (maxprice.value !== '') {
        newlist = newlist.filter(product => { return product.price <= maxprice.value });
        displayproduct(newlist);
    }

    displayproduct(newlist);
}
displayproduct(product_data);