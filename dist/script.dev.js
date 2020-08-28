"use strict";

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
    });
    console.log(result); // Variables which depends from the response:

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
        console.log(users[i]);

        if (users[i].status != 'Deleted') {
          auxUsers = "<div id=\"user-".concat(i, "\" class=\"card\"\">\n                <header class=\"card-header\">\n                <div class=\"media-content\">\n                  <p class=\"title is-4\">").concat(users[i].name, "</p>\n                  <p class=\"subtitle is-6\">").concat(users[i].email, "</p>\n                </div>\n                  <span class=\"mt-2\">#").concat(i, "</span>\n                  <a href=\"#\" class=\"card-header-icon\" aria-label=\"more options\">\n                    <span class=\"icon\">\n                      <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n                    </span>\n                  </a>\n                </header>\n                <div class=\"card-content\">\n                  <div class=\"content\">\n                 \n                    ").concat(users[i].situation, "\n                  </div>\n                </div>\n                </div>") + auxUsers;
        } else if (i + 1 == users.length && auxUsers == '') {
          auxUsers = "<div class=\"notification is-warning is-light\">\n                  Nenhum cliente cadastrado!\n                </div>";
        }
      }
    }

    printUsers(users.length);
    section.innerHTML = auxUsers;
  });
}