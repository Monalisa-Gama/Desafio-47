
const convertObjectToArray = (obj) => {
    const arrayValue = []; // crio um novo array
    // transformo meu objeto em array e para cada campo desse array..
    Object.keys(obj).forEach(key => {
      // adiciono a chave e o valor do objeto no novo array
        arrayValue.push({ key, value: obj[key]});
    })
    return arrayValue; // retorno meu array contendo minha lista de objetos contendo chave: valor
  }

function removeArrow(){
  var arr = document.querySelectorAll('.fa-solid');
  console.log(arr);
  
  arr.forEach((element) => {
  element.classList.remove('fa-solid');
  element.classList.remove('fa-arrow-up');
  element.classList.remove('fa-arrow-down');
  });
  
  for(i = 0; i < arr.length; i++){
    //arr[i].classList.remove('fa-arrow-up');
    //arr[i].classList.remove('fa-arrow-down');
  }
}

function sort(column,arr,ord){
  removeArrow();
  if(ord == 'asc' || ord == 0){
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++){
      if(arr[i].value.children[column].textContent > arr[j].value.children[column].textContent){
        var aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
      }
    }
  }}else{
    for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr.length; j++){
      if(arr[i].value.children[column].textContent < arr[j].value.children[column].textContent){
        var aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
      }
    }
  }
  }
  return arr;
}

var arrows = document.querySelector('#mytable thead th i');
var tableRows = document.querySelectorAll('#myTable tbody tr');
var arrControl = [0,0,0,0,0,0];


const input = document.getElementById('filtro');

        input.addEventListener('input', () => {
        const search = input.value.toLowerCase();
        convertObjectToArray(tableRows).forEach(el => {
            const matches = el.value.textContent.toLowerCase().includes(search);
            if (!matches){
              el.value.style.display = 'none';
            }else{
              el.value.style.display = '';
            }
            //el.value.style.display = matches ? 'block' : 'none';
        });
        });

  
function sortTable(col){
    col = col.id;
    
    var arrTrs = convertObjectToArray(tableRows);
    console.log(arrTrs);
/*
    function compare(a,b) {
      if(col == 0 || col == 4 || col == 5){
        return a - b;
      }else{
        if (a.value.children[col].textContent < b.value.children[col].textContent){
           return -1;
       }else if (a.value.children[col].textContent > b.value.children[col].textContent){
          return 1;
        }else{
          return 0;
        }
      }
      }
      
    arrTrs.sort(compare);
    */
    
    if(arrControl[col] == 0 || arrControl[col] == 'desc'){
      arrControl = [0,0,0,0,0,0];
      arrControl[col] = 'asc';
      arrTrs = sort(col,arrTrs,arrControl[col]);
      document.getElementById(`${col}`).insertAdjacentHTML("beforeend",`<i class="fa-solid fa-arrow-up"></i>`);
    }else if(arrControl[col] == 'asc'){
      arrControl = [0,0,0,0,0,0];
      arrControl[col] = 'desc';
      arrTrs = sort(col,arrTrs,arrControl[col]);
      document.getElementById(`${col}`).insertAdjacentHTML("beforeend",`<i class="fa-solid fa-arrow-down"></i>`);
      
    }
    
    console.log(arrTrs);
    
    document.querySelector('#myTable tbody').innerHTML = "";
    
    for(i = 0; i < arrTrs.length; i++){
        document.querySelector('#myTable tbody').insertAdjacentHTML("beforeend",`${arrTrs[i].value.outerHTML}`);
    }
    
}

var myTable = document.getElementById('myTable');
