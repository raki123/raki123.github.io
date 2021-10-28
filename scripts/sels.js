
var sels = document.getElementsByClassName("selecter");
var i;

for (i = 0; i < sels.length; i++) {
  sels[i].addEventListener("click", function() {
    if (this.parentNode.classList.contains("selected")) {
      // remove selection and show all
      this.parentNode.classList.toggle("selected");
      var tables = document.getElementsByTagName("table");
      for (t = 0; t < tables.length; t++) {
        var rows = tables[t].getElementsByTagName("tr");
        var even = false;
        for (j = 0; j < rows.length; j++) {
          rows[j].style.display = "";
          if(even) {
            rows[j].style.backgroundColor = "#ccc";
          } else {
            rows[j].style.backgroundColor = "#f1f1f1";
          }
          even = !even;
        }
      }
    } else {
      // limit to current
      var cur = document.getElementsByClassName("selected");
      if (cur.length > 0) {
        cur[0].classList.toggle("selected");
      }
      this.parentNode.classList.toggle("selected");
      var field = this.getAttribute("data-field");
      var tables = document.getElementsByTagName("table");
      for (t = 0; t < tables.length; t++) {
        var rows = tables[t].getElementsByTagName("tr");
        var even = false;
        for (j = 0; j < rows.length; j++) {
          var fields = rows[j].getAttribute("data-fields").split(",");
          if(!fields.includes(field)) {
            rows[j].style.display = "none";
          } else {
            rows[j].style.display = "";
            if(even) {
              rows[j].style.backgroundColor = "#ccc";
            } else {
              rows[j].style.backgroundColor = "#f1f1f1";
            }
            even = !even;
          }
        }
      }
    }
  });
} 