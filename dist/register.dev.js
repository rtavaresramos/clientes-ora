"use strict";

var section = document.getElementById("section"); // action : https://docs.google.com/forms/u/3/d/e/1FAIpQLSf0G-s6VZM0EYGI8-z9JXzpHADuApGkUKQo0ThcvFfr2-_W0w/formResponse -->
// <div jsname="o6bZLc"><input type="hidden" name="entry.1058859935" value="">
//   <input type="hidden" name="entry.1822079083" value="">
//   <input type="hidden" name="entry.1906297420" value="">
//   <input type="hidden" name="entry.2015685881" value="">
// </div> 
//  Iniciando com a requisição ao carregar a página:

function handleForm() {
  setTimeout(function () {
    window.location = '/';
  }, 750);
}

function closeModal() {
  setTimeout(function () {
    document.getElementById('edit-modal').style.display = 'none';
  }, 750);
}

function handleDeleteUser(e) {
  // Usable variables:
  var result;
  var paramsQty = 6; // Objects:

  function usersDb(date, name, email, situation, status, editUrl) {
    this.date = date, this.name = name, this.email = email, this.situation = situation, this.status = status, this.editUrl = editUrl;
  }

  fetch("https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json").then(function (res) {
    return res.json();
  }).then(function (jsonRes) {
    result = jsonRes.feed.entry.map(function (row) {
      return row.content["$t"];
    }); // Variables which depends from the response:

    var users = [];
    var objSize = Object.keys(result).length;
    objSize = objSize / paramsQty; // Including the api response into the object:

    for (i = 0; i < objSize; i++) {
      count = i * paramsQty;
      users[i] = new usersDb(result[count], result[count + 1], result[count + 2], result[count + 3], result[count + 4], result[count + 5]);
    }

    document.getElementById('edit-modal').style.display = 'flex';
    document.getElementById('edit-modal').style.opacity = 0;
    var newURL = "".concat(users[e].editUrl.substring(0, 29), "/u/0/").concat(users[e].editUrl.substring(30, 91), "formResponse").concat(users[e].editUrl.substring(99));
    document.getElementById('edit-modal').innerHTML = "<iframe name=\"hidden_iframe\" id=\"hidden_iframe\" style=\"display:none;\"      \n  onload=\"if(submitted) {window.location='./#user-".concat(e, "'}\"></iframe> \n    <form name='shouldDeletForms' id=\"formId\" onsubmit=\"handleForm()\" \n    action=\"").concat(newURL, "\"\n    target=\"hidden_iframe\"\n    method=\"POST\"\n    id=\"mG61Hd\">\n    \n    <div class=\"field\">\n        <label class=\"label\">Email</label>\n        <div class=\"control has-icons-left has-icons-right\">\n        <input class=\"input\" type=\"email\" placeholder=\"Exemplo: joaonasc@email.com\" name=\"entry.2015685881\" value=\"Deleted\" required>\n        <span class=\"icon is-small is-left\">\n            <i class=\"fas fa-envelope\"></i>\n        </span>\n        <span class=\"icon is-small is-right\">\n            <i class=\"fas fa-exclamation-triangle\"></i>\n        </span>\n        </div>\n    </div>\n\n    <div class=\"field is-grouped\">\n        <div class=\"control\">\n        <button type=\"submit\" class=\"button is-link\">Salvar</button>\n        </div>\n        <div class=\"control\">\n        <button class=\"button is-link is-light\" onclick=\"closeModal(e)\" >Cancelar</button>\n        </div>\n    </div>\n  </form>");
    document.shouldDeletForms.submit();
    handleForm();
  });
}

function handleEditForms(e) {
  // Usable variables:
  var result;
  var paramsQty = 6; // Objects:

  function usersDb(date, name, email, situation, status, editUrl) {
    this.date = date, this.name = name, this.email = email, this.situation = situation, this.status = status, this.editUrl = editUrl;
  }

  fetch("https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json").then(function (res) {
    return res.json();
  }).then(function (jsonRes) {
    result = jsonRes.feed.entry.map(function (row) {
      return row.content["$t"];
    }); // Variables which depends from the response:

    var users = [];
    var objSize = Object.keys(result).length;
    objSize = objSize / paramsQty; // Including the api response into the object:

    for (i = 0; i < objSize; i++) {
      count = i * paramsQty;
      users[i] = new usersDb(result[count], result[count + 1], result[count + 2], result[count + 3], result[count + 4], result[count + 5]);
    }

    setTimeout(function () {
      document.getElementById('edit-modal').style.display = 'flex';
    }, 750);
    var newURL = "".concat(users[e].editUrl.substring(0, 29), "/u/0/").concat(users[e].editUrl.substring(30, 91), "formResponse").concat(users[e].editUrl.substring(99));
    document.getElementById('edit-modal').innerHTML = "<div class=\"column is-three-fifths is-offset-one-fifth\" >\n  <iframe name=\"hidden_iframe\" id=\"hidden_iframe\" onload=\"if(submitted) {window.location='./#user-".concat(e, "'}\" style=\"display:none;\"      \n ></iframe> \n    <form onsubmit=\"handleForm()\" \n    action=\"").concat(newURL, "\"\n    target=\"hidden_iframe\"\n    method=\"POST\"\n    id=\"mG61Hd\">\n    <div class=\"field\">\n                <label class=\"label\">Nome</label>\n                <div class=\"control\">\n                <input class=\"input\" type=\"text\" placeholder=\"Exemplo: Jos\xE9 Nascimento\" name=\"entry.1058859935\" value=\"\"").concat(users[e].name, " required>\n                </div>\n            </div>\n            \n            <div class=\"field\">\n                <label class=\"label\">Email</label>\n                <div class=\"control has-icons-left has-icons-right\">\n                <input class=\"input\" type=\"text\" placeholder=\"Exemplo: 'https://site/imagem.png'\" name=\"entry.1822079083\" value=\"\"").concat(users[e].email, "required>\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-user\"></i>\n                </span>\n            </div>\n            \n            <div class=\"field\">\n                <label class=\"label\">Explique o caso do cliente</label>\n                <div class=\"control has-icons-left has-icons-right\">\n                <input class=\"textarea\" type=\"text\" placeholder=\"Exemplo: Jo\xE3o Nascimento foi negativado indevidamente ...\" \n                name=\"entry.1906297420\" value=\"\"").concat(users[e].situation, " required>\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-envelope\"></i>\n                </span>\n                </div>\n            </div>\n\n    <div class=\"field is-grouped\">\n        <div class=\"control\">\n        <button type=\"submit\" class=\"button is-link\">Salvar</button>\n        </div>\n        <div class=\"control\">\n        <button  type=\"button\" class=\"button is-link is-light\" onclick=\"closeModal()\" >Cancelar</button>\n        </div>\n    </div>\n  </form>\n</div>\n  ");
  });
}

function loadDb() {
  // Usable variables:
  var result;
  var paramsQty = 6;
  var auxUsers = []; // Objects:

  function usersDb(date, name, email, situation, status, editUrl) {
    this.date = date, this.name = name, this.email = email, this.situation = situation, this.status = status, this.editUrl = editUrl;
  }

  fetch("https://spreadsheets.google.com/feeds/cells/1wAVNPdiePaAJjgyo3BL2KlbQiKV5kIXqFXskS1Cq--0/1/public/full?alt=json").then(function (res) {
    return res.json();
  }).then(function (jsonRes) {
    result = jsonRes.feed.entry.map(function (row) {
      return row.content["$t"];
    }); // Variables which depends from the response:

    var users = [];
    var objSize = Object.keys(result).length;
    objSize = objSize / paramsQty; // Including the api response into the object:

    for (i = 0; i < objSize; i++) {
      count = i * paramsQty;
      users[i] = new usersDb(result[count], result[count + 1], result[count + 2], result[count + 3], result[count + 4], result[count + 5]);
    } // Function which print users' users on the screen:


    function printUsers(qty) {
      // Function which handle the edit forms url
      while (document.getElementById('section').firstChild) {
        document.getElementById('section').removeChild(document.getElementById('section').firstChild);
      }

      for (i = 1; i < qty; i++) {
        if (users[i].status != 'Deleted') {
          auxUsers = "<div id=\"user-".concat(i, "\" class=\"card\">\n            <header class=\"card-header\">\n            <div class=\"media-content\">\n              <p class=\"title is-4\">").concat(users[i].name, "</p>\n              <p class=\"subtitle is-6\">").concat(users[i].email, "</p>\n            </div>\n              <span class=\"mt-2\">#").concat(i, "</span>\n              <a href=\"#\" class=\"card-header-icon\" aria-label=\"more options\">\n                <span class=\"icon\">\n                  <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n                </span>\n              </a>\n            </header>\n            <div class=\"card-content\">\n              <div class=\"content\">\n              ").concat(users[i].situation, "\n              </div>\n            </div>\n            <footer class=\"card-footer\">\n              <a href=\"#user-").concat(i, "\" class=\"card-footer-item\" \n              onclick=\"handleEditForms(").concat(i, ")\" >Editar</a>\n              <a href=\"#user-").concat(i, "\" \n              onclick=\"handleDeleteUser(").concat(i, ")\" class=\"card-footer-item\">Deletar</a>\n            </footer>\n            </div>") + auxUsers;
        } else if (i + 1 == users.length && auxUsers == '') {
          document.getElementById('section').style.display = 'flex';
          document.getElementById('section').style.justifyContent = 'center';
          auxUsers = "<div class=\"notification is-warning is-light\">\n              Nenhum cliente cadastrado!\n            </div>";
        }
      }
    }

    printUsers(users.length);
    section.innerHTML = auxUsers;
  });
}