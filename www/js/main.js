   $(document).ready(function() {
       $.ajax({
           url: "menu.html",
           success: function(result) {
               $("#page").prepend(result);

               $("#menu").mmenu({
                   "header": {
                       "title": "Menu-Mis Datos",
                       "add": true,
                       "update": true
                   }
               });
           }
       });

       FastClick.attach(document.body);
   });