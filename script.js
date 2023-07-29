
const myJson= 'https://jsonplaceholder.typicode.com/users';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => loadFacts(data));
   

    const factList=document.querySelector('.factList');
    function loadFacts(par){
      for(let i=0;i<par.length;++i){
        console.log( par[i]);
        factList.innerHTML+=`
            <div class="factItem">
            <div class="factDesription" id="fact1"> Fact ${par[i].id}</div>
          </div>`
      }
      console.log(par)
      
    }
    loadFacts(par);

    