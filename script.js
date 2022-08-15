// BANCO DE DADOS - ADIÇÃO NO CARRINHO DE COMPRAS
const banco = [
    {
        prod: 'prod1',
        img:'IMG/img1.png',
        titulo:'Lightweight Jacket',
        price:'100,00',  
        remItem: 'produto1',
    },
    {   
        prod: 'prod2',
        img:'IMG/img2.png',
        titulo:'Black Hat',
        price:'100,00',
        remItem: 'produto2',
    },
    {
        prod: 'prod3',
        img:'IMG/img3.png',
        titulo:'Mask',
        price:'40,00',
        remItem: 'produto3',
    },
    {
        prod: 'prod4',
        img:'IMG/img4.png',
        titulo:'T-Shirt',
        price:'100.00',
        remItem: 'produto4',
    },
    {
        prod: 'prod5',
        img:'IMG/img5.png',
        titulo:'Short-Sleeve T-Shirt',
        price:'100.00',
        remItem: 'produto5',
    },
    {
        prod: 'prod6',
        img:'IMG/img6.png',
        titulo:'Champion Packable Jacket',
        price:'100.00',
        remItem: 'produto6',
    }
];

const banco1 = [
    {
        img: "IMG/img1.png",
        type: "Camisetas",
        name: "Lightweight Jacket",
        parag: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante... ",
        price: "R$ 100.00",
        button: "prod1",
    },
    {
        img: "IMG/img2.png",
        type: "Acessórios",
        name: "Black Hat",
        parag: "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
        price: "R$ 100.00",
        button: "prod2",
    },
    {
        img: "IMG/img3.png",
        type: "Acessórios",
        name: "Mask",
        parag: "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
        price: "R$ 40.00",
        button: "prod3",
    },
    {
        img: "IMG/img4.png",
        type: "Camisetas",
        name: "T-Shirt",
        parag: "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
        price: "R$ 100.00",
        button: "prod4",        
    },
    {
        img: "IMG/img5.png",
        type: "Camisetas",
        name: "Short-Sleeve T-Shirt",
        parag: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
        price: "R$ 100.00",
        button: "prod5", 
    },
    {
        img: "IMG/img6.png",
        type: "Camisetas",
        name: "Champion Packable Jacket",
        parag: "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
        price: "R$ 100.00",
        button: "prod6", 
    }
]


// FUNÇÃO HOVER - LISTA NAV

let currentClick = document.getElementById('listSup');
currentClick.addEventListener('click', clickedNav);
let classTypeCamisetas = document.getElementsByClassName('camisetas');
let containerSec = document.getElementById('containerSec')

function clickedNav(event){
    let clickedList = document.querySelectorAll('li');
    const clicked = event.target;
    if(clicked.id != 'listSup'){
        clickedList.forEach((item)=> {
            item.classList.remove('current-set');
        })
        clicked.classList.add('current-set')
    }
}

// FUNÇÃO INCLUSÃO DOS PRODUTOS NA TELA

function showProduct(img, type, name, parag, price, button){

    const container = document.getElementById('containerSec')
    
    for(let i = 0; i < 1; i++){
        let productShow = document.createElement('div');
        productShow.setAttribute('class','containerProd');
        productShow.innerHTML = `<div class="imagemProd">
        <img src=${img}>
    </div>
    <div class="prodDesc">
        <div class="caixaTexto2">
            <small class="tipoProd">${type}</small>
        </div>
        <h2>${name}</h2>
        <p class ="TextoCaixaProd">${parag}</p>
        <small class ="precoProd">${price}</small>
        <div class="caixaBotao">
            <button id=${button} class="adicionaCarrinho">Adicionar ao Carrinho</button>
        </div>
    </div>`
    document.getElementById('containerSec').appendChild(productShow);
    }
}

function showProductScreen(){
    banco1.forEach((item) => {
        showProduct(item.img, item.type, item.name, item.parag, item.price, item.button);   
    });
}
showProductScreen()

// FUNÇÃO QUE MONTA A INFORMAÇÃO QUE ENTRA NO CARRINHO DE COMPRAS
function atualizeItemCar(event){
    let clicked = event.target
    
    banco.forEach(function (item) {
        if(clicked.id == item.prod){
            addBuyCar(item.img, item.titulo,item.price, item.remItem);
        };
    });

}

// FUNÇÃO ADICIONACARRINHO DE COMPRAS
let cleanbox1 = document.getElementById('empty-car');
let statusCar = document.getElementById('status-car');
let cleanbox2 = document.getElementById('empty-text-car');
let buyCarBox = document.getElementsByClassName('carrinhoCompras');


let btnAddBuyCar0 = document.getElementById('prod1');
let btnAddBuyCar1 = document.getElementById('prod2');
let btnAddBuyCar2 = document.getElementById('prod3');
let btnAddBuyCar3 = document.getElementById('prod4');
let btnAddBuyCar4 = document.getElementById('prod5');
let btnAddBuyCar5 = document.getElementById('prod6');

btnAddBuyCar0.addEventListener('click', atualizeItemCar);
btnAddBuyCar1.addEventListener('click', atualizeItemCar);
btnAddBuyCar2.addEventListener('click', atualizeItemCar);
btnAddBuyCar3.addEventListener('click', atualizeItemCar);
btnAddBuyCar4.addEventListener('click', atualizeItemCar);
btnAddBuyCar5.addEventListener('click', atualizeItemCar);

function addBuyCar(img, titulo, price, remItem){
    cleanbox1.style.display = 'none';
    cleanbox2.style.display = 'none';
    statusCar.style.display = 'block';
    let productInclusion = document.createElement('div');
    productInclusion.innerHTML = `
    <div class="box-product-buy">
        <div>
            <img class="img-box-buy" src=${img}>
        </div>
        <div >
            <h2 class="h2-box-buy">${titulo}</h2>
            <div class="internal-Box">
                <div class="int-buy-box">
                    <small class="cifrao">R$</small>
                    <small class="price-box-buy">${price}</small>
                </div>    
                <button id=${remItem} class="remove-btn-buy">Remover Produto</button>
            </div>    
        </div>
    </div>`
    document.querySelector('div.carrinhoStatus').appendChild(productInclusion);
    buyBoxValue()
}

// FUNÇÃO QUE EXCLUI OS ITENS DO CARRINHO DE COMPRA
const buyCarApresent = document.getElementById('carBuyRepresentation');
buyCarApresent.addEventListener('click', removeItens);

function removeItens(event){
    let clicked = event.target

    if(clicked.classList.contains('remove-btn-buy')){
        let boxProductBuy = clicked.closest('.box-product-buy');
        boxProductBuy.remove()
        buyBoxValue()
    }
    
}

// FUNÇÃO QUE ADICIONA NA TELA O BOX DO VALOR FINAL DA COMPRA

function buyBoxValue(){
    
    const boxValueApr = document.getElementById('boxValueFinal');
    boxValueApr.style.display = 'flex';

    let price = document.getElementsByClassName('price-box-buy');
    let cont = price.length;
    let soma = 0;
    let soma1 = 0;
    for(let i =0; i < price.length; i++){
        soma = parseInt(price[i].innerText)
        soma1 += soma
    }
    let result = "R$" + " " + soma1
    let qtdItens = document.getElementById('qtdItens');
    qtdItens.innerText = cont;
    let priceItens = document.getElementById('priceItens');
    priceItens.innerText = result

}

//FUNÇÃO DE PESQUISA 

let searchBar = document.querySelector('input');
let btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', searchItem);

function searchItem(event){
    event.preventDefault();
    
    let itemSearch = searchBar.value;
    console.log(itemSearch)
    let nameProduct = document.querySelectorAll('h2');
    let textProduct = document.querySelectorAll('p');
    

    let pattern = new RegExp(`${itemSearch}`, "gi");

    for(let i = 0; i < nameProduct.length; i++){
        nameProduct[i].innerHTML = nameProduct[i].textContent.replace(pattern, (match) => `<mark>${match}</mark>`);
    };

    for(let i = 0; i < textProduct.length; i++){
        textProduct[i].innerHTML = textProduct[i].textContent.replace(pattern, (match) => `<mark>${match}</mark>`);
    };
}