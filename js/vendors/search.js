// traer elementos de html (input), botón. Variables globales
// var retaurants = [];

var $inputSearch = $('#search');

var $inputButton = $('#search_btn');

var $searchForm = $('#search_form');

function loadPage() {
    //traer elementos de html. Eventos    
    $inputSearch.keyup(filterCoincidence);
    //revisar porque no funciona habilidar y deshabilitar boton
    // $inputSearch.keyup(oneCharacter);
    // llama modal de html
    // $(".photo-restaurant").click(showModal);
    // $('.rest-info').click(showModal);
    // llama modal creado dinamicamente
    $(document).on("click", ".photo-restaurant", showModal);
    // Cerrar modal y mostrar toda la data
    // $("#rest-info").on("hidden.bs.modal", paintSearchResult);
  }

// funciones se desencadenan
function filterCoincidence () {
    //obtener el valor del texto ingresado por el usuario
    //JS vanilla
    var inputSearchValue = $inputSearch.val().toLowerCase();
    // console.log(inputSearchValue)
    //comparar el data si el valor del inut obtenido se encuentra en data, sino pedir otro valor
    //trim quita espacios en blanco de un string
    if ($inputSearch.val().trim().length > 0) {
        // filtrar restaurantes por "type". comprar con key en data
        var filterRestaurantType = restaurants.filter(function(restaurant) {
            // console.log(restaurant)
            // console.log(restaurant.type.toLowerCase().indexOf(inputSearchValue) >= 0);
            return restaurant.type.toLowerCase().indexOf(inputSearchValue) >= 0;
        });
        //prueba .detach(), sino funciona regresar a .empty()
        $("#food_results").empty();
        //forEach
        filterRestaurantType.forEach(function (restaurant) {
            paintSearchResult(restaurant);
        });
        //si es correcta conincidencia pinta los resultados
    };
}  

function paintSearchResult (restaurant) {
    var $foodResults = $("#food_results");
    // crear elementos en DOM
        var $rowResults = $("<div />",{ 
            "class":"row"
        });

        var $colResults = $("<div />", {
            "class":"col-12"
        });
        // Al crear dinamicamente no respeta los data y no se llama al modal, why?
        var $divCardResult = $("<div />", {
            "class": "btn card text-white photo-restaurant"
        });

        $divCardResult.attr('data-toggle', "modal");
        $divCardResult.attr('data-target', "#rest-info");
        $divCardResult.attr('data-list', restaurant.list);

        // var $anchorResult = $("<a />", {
        //     "class": "card-link card-text"
        // });

        var $anchorResultAlong = $("<a />", {
            "class": "card-link card-text"
        });
        
        $anchorResultAlong.attr('data-toggle', "modal");
        $anchorResultAlong.attr('data-target', "#rest-info");
        $anchorResultAlong.attr('data-list', restaurant.list);
        
        console.log($anchorResultAlong)
        var $imgResult = $("<img />", {
            "class": "card-img costume-size"
        });

        var $divContentResult = $("<div />", {
            "class": "card-img-overlay"
        });

        var $titleContentResult = $("<h5 />", {
            "class": "card-title"
        });
    // agregarles atributos
        $imgResult.attr("src", restaurant.picture /*"assets/images/ñam5.jpg"*/)
        // console.log($imgResult)
    // saignando valores
        $titleContentResult.text(restaurant.name);

    // acomodarlos (padres e hijos)
        // $anchorResult.append($imgResult);

        $divContentResult.append($titleContentResult);
        $divContentResult.append($anchorResultAlong);

        // $divCardResult.append($anchorResult);
        // console.log($divCardResult)
        $divCardResult.append($imgResult);        
        $divCardResult.append($divContentResult);

        $colResults.append($divCardResult);

        $rowResults.append($colResults);

    // agregar al padre
    $foodResults.append($rowResults);
};

// function oneCharacter (e) {
//     e.preventDefault
//     if ($(this).val().trim().length > 1 ) {
//         // prop() permite manejar el valor booleano sin quitar el atributo.
//         $inputButton.prop("disable", false)
//         console.log('hola')
//     } 
//     else {
//         $inputButton.prop("disable", true)
//     };
// };

// $('.rest-info').modal('hidde');

function showModal () {
    // valor del elemento seleccionada
   var $contentModalTitle = $(this).data("list");
   console.log($contentModalTitle);
//    console.log(restaurants[$contentModalTitle].name);
   //Etiquetas del modal
   var $restName = $("#rest-name");
   var $restDescription = $("#rest-description");
   var $restLocation = $("#rest-location");
   var $restPrice = $("#rest-price");
   
//    var $iguales = {}

    $restName.text(restaurants[$contentModalTitle].name);
    console.log($restName)
    $restDescription.text(restaurants[$contentModalTitle].description);
    $restLocation.text(restaurants[$contentModalTitle].location);
    $restPrice.text(restaurants[$contentModalTitle].price);

    // console.log('')
    
    
   // Obtener valor de data. Intente hacerlo los for pero el objeto que guarda el es el primero, no el que cumple la condicion
//    Any ideas?
    // for (var i = 0; i > restaurants.length; i++) {
    //      if (restaurants[i].name === $contentModalTitle) {
    //         var $iguales = restaurants[i].name;
    //          //    $restName.text(restaurants[i].name);
    //         }
    //     };  
        // console.log(restaurants[i].name);
        // console.log($iguales);
    // console.log(prueba)
    
    // console.log(restaurant[$contentModalTitle])
};

$(document).ready(loadPage);