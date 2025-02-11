const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatCurrency(value){
  const newValue = value.toLocaleString('pt-br',{
    style : 'currency',
    currency: 'BRL',
  })

  return newValue
}
function showAll(productArray) { 
    let myLi = ''  
    productArray.forEach((product) => {
          myLi += `
               <li>
                 <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> ${formatCurrency (product.price)}</p>
              </li>   
            `
        })

        list.innerHTML = myLi              
    }

function mapAllItens() {
   const newprices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9
   }))

   showAll (newprices)  

}

function sumAllItens(){
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
               <li>                 
                <p class="item-price">O valor total dos itens é ${formatCurrency (totalValue)}</p>                
                </li>   
            `

}

function filterAllItens (){
  const filterJustVegan = menuOptions.filter ((product) => product.vegan)

  showAll (filterJustVegan)
}


buttonShowAll.addEventListener('click', ()=> showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens )
buttonFilterAll.addEventListener('click', filterAllItens)