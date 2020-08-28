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
           console.log(result)
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
          console.log(users[i])
          
              if(users[i].status!='Deleted'){
                document.getElementById('section').style.display = 'grid'
                
                auxUsers =  `<div id="user-${i}" class="card"">
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
                </div>` + auxUsers }else if(i+1 == users.length && auxUsers == ''){

                  document.getElementById('section').style.display = 'flex'
                  auxUsers =  `<div class="notification is-warning is-light">
                  Nenhum cliente cadastrado!
                </div>`
            }
            
          }
    
    
    }
    
      printUsers(users.length)
      
    
      section.innerHTML =  auxUsers;

    })}