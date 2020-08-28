var section = document.getElementById("section")


// action : https://docs.google.com/forms/u/3/d/e/1FAIpQLSf0G-s6VZM0EYGI8-z9JXzpHADuApGkUKQo0ThcvFfr2-_W0w/formResponse -->

// <div jsname="o6bZLc"><input type="hidden" name="entry.1058859935" value="">
//   <input type="hidden" name="entry.1822079083" value="">
//   <input type="hidden" name="entry.1906297420" value="">
//   <input type="hidden" name="entry.2015685881" value="">
// </div> 



//  Iniciando com a requisição ao carregar a página:
function handleForm(){
  setTimeout(() => {
    window.location='/'
  }, 750);
}
function closeModal(){
  setTimeout(() => {
    document.getElementById('edit-modal').style.display = 'none'
  }, 750);
}
function handleDeleteUser(e){
// Usable variables:
  
let result;
 var paramsQty = 6

// Objects:

function usersDb(
  date, name,  email, situation, status, editUrl)
    {
    this.date = date,
    this.name = name,
    this.email = email,
    this.situation = situation,
    this.status = status,
    this.editUrl = editUrl
  }
  
  
      fetch(
          "https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json"
        )
          .then(function(res){ 
            return res.json()})
          .then(function(jsonRes){
            result = jsonRes.feed.entry.map((row)=> row.content["$t"])  
         
  // Variables which depends from the response:
  var users = []
  var objSize = Object
  .keys(result)
  .length
  
  
  objSize = objSize/paramsQty
  
  
 
  
  
  
  // Including the api response into the object:
  for(i=0 ; i < objSize ; i++){
      count = i*paramsQty
     users[i] = new usersDb(
        result[count],
        result[count+1],
        result[count+2],
        result[count+3],
        result[count+4],
        result[count+5],
     )}
  

  document.getElementById('edit-modal').style.display = 'flex'
  document.getElementById('edit-modal').style.opacity = 0


  let newURL = `${users[e].editUrl.substring(0,29)}/u/0/${users[e].editUrl.substring(30,91)}formResponse${users[e].editUrl.substring(99)}`
  
  
  document.getElementById('edit-modal').innerHTML = `<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"      
  onload="if(submitted) {window.location='./#user-${e}'}"></iframe> 
    <form name='shouldDeletForms' id="formId" onsubmit="handleForm()" 
    action="${ newURL }"
    target="hidden_iframe"
    method="POST"
    id="mG61Hd">
    
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Exemplo: joaonasc@email.com" name="entry.2015685881" value="Deleted" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
        <button type="submit" class="button is-link">Salvar</button>
        </div>
        <div class="control">
        <button class="button is-link is-light" onclick="closeModal(e)" >Cancelar</button>
        </div>
    </div>
  </form>`

document.shouldDeletForms.submit()
handleForm()

})}
function handleEditForms(e){
// Usable variables:
  
let result;
 var paramsQty = 6

// Objects:

function usersDb(
  date, name,  email, situation, status, editUrl)
    {
    this.date = date,
    this.name = name,
    this.email = email,
    this.situation = situation,
    this.status = status,
    this.editUrl = editUrl
  }
      fetch(
          "https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json"
        )
          .then(function(res){ 
            return res.json()})
          .then(function(jsonRes){
            result = jsonRes.feed.entry.map((row)=> row.content["$t"])  
         
  // Variables which depends from the response:
  var users = []
  var objSize = Object
  .keys(result)
  .length
  
  
  objSize = objSize/paramsQty
  
  
 
  
  
  
  // Including the api response into the object:
  for(i=0 ; i < objSize ; i++){
    count = i*paramsQty
   users[i] = new usersDb(
      result[count],
      result[count+1],
      result[count+2],
      result[count+3],
      result[count+4],
      result[count+5],
   )}
  
setTimeout(() => {
  
  document.getElementById('edit-modal').style.display = 'flex'

}, 750);


  let newURL = `${users[e].editUrl.substring(0,29)}/u/0/${users[e].editUrl.substring(30,91)}formResponse${users[e].editUrl.substring(99)}`
  
  
  document.getElementById('edit-modal').innerHTML = `<div class="column is-three-fifths is-offset-one-fifth" >
  <iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted) {window.location='./#user-${e}'}" style="display:none;"      
 ></iframe> 
    <form onsubmit="handleForm()" 
    action="${ newURL }"
    target="hidden_iframe"
    method="POST"
    id="mG61Hd">
    <div class="field">
                <label class="label">Nome</label>
                <div class="control">
                <input class="input" type="text" placeholder="Exemplo: José Nascimento" name="entry.1058859935" value=""${users[e].name} required>
                </div>
            </div>
            
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Exemplo: 'https://site/imagem.png'" name="entry.1822079083" value=""${users[e].email}required>
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </div>
            
            <div class="field">
                <label class="label">Explique o caso do cliente</label>
                <div class="control has-icons-left has-icons-right">
                <input class="textarea" type="text" placeholder="Exemplo: João Nascimento foi negativado indevidamente ..." 
                name="entry.1906297420" value=""${users[e].situation} required>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                </div>
            </div>

    <div class="field is-grouped">
        <div class="control">
        <button type="submit" class="button is-link">Salvar</button>
        </div>
        <div class="control">
        <button  type="button" class="button is-link is-light" onclick="closeModal()" >Cancelar</button>
        </div>
    </div>
  </form>
</div>
  `

})}

function loadDb(){
// Usable variables:
  
  let result;
   var paramsQty = 6
  var auxUsers = []
// Objects:

function usersDb(
  date, name,  email, situation, status, editUrl)
    {
    this.date = date,
    this.name = name,
    this.email = email,
    this.situation = situation,
    this.status = status,
    this.editUrl = editUrl
  }

fetch(
        "https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json"
      )
        .then(function(res){ 
          return res.json()})
        .then(function(jsonRes){
          result = jsonRes.feed.entry.map((row)=> row.content["$t"])  
       
// Variables which depends from the response:
var users = []
var objSize = Object
.keys(result)
.length


objSize = objSize/paramsQty






// Including the api response into the object:
for(i=0 ; i < objSize ; i++){
  count = i*paramsQty
 users[i] = new usersDb(
    result[count],
    result[count+1],
    result[count+2],
    result[count+3],
    result[count+4],
    result[count+5],
 )}


// Function which print users' users on the screen:

function printUsers(qty){
  // Function which handle the edit forms url


    while (   
      document
      .getElementById('section')
      .firstChild) {
      document
      .getElementById('section').
      removeChild(
      document
      .getElementById('section')
      .firstChild);
    }
    for(i=1 ; i < qty ; i++){

      
          if(users[i].status!='Deleted'){
            
            auxUsers = `<div id="user-${i}" class="card">
            <header class="card-header">
            <div class="media-content">
              <p class="title is-4">${users[i].name}</p>
              <p class="subtitle is-6">${users[i].email}</p>
            </div>
              <span class="mt-2">#${i}</span>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
              ${users[i].situation}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#user-${i}" class="card-footer-item" 
              onclick="handleEditForms(${i})" >Editar</a>
              <a href="#user-${i}" 
              onclick="handleDeleteUser(${i})" class="card-footer-item">Deletar</a>
            </footer>
            </div>` + auxUsers }
      
    }


}

  printUsers(users.length)
  

  section.innerHTML =  auxUsers;

})}
