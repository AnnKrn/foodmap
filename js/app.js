// traer elementos de html (input), botón. Variables globales
var retaurants = [];

var $inputSearch = $('#search');

var $inputButton = $('#search_btn');

var $searchForm = $('#search_form');

function loadPage() {
    //traer elementos de html. Eventos
    $inputSearch.keyup(filterCoincidence);
    //revisar porque no funciona habilidar y deshabilitar boton
    // $inputSearch.keyup(oneCharacter);
  }

// funciones se desencadenan
function filterCoincidence () {
    //obtener el valor del texto ingresado por el usuario
    //JS vanilla
    var inputSearchValue = $inputSearch.val().toLowerCase();
    console.log(inputSearchValue)
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
    } //else, sino es correcta la coincidencia pide un nuevo valor. Mantienes el listado de restaurantes sin modificar
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

        var $divCardResult = $("<div />", {
            "class": "card text-white"
        });

        var $anchorResult = $("<a />", {
            "class": "card-link card-text"
        });

        var $anchorResultAlong = $("<a />", {
            "class": "card-link card-text"
        });

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
        console.log($imgResult)
    // saignando valores
        $titleContentResult.text(restaurant.name);

    // acomodarlos (padres e hijos)
        $anchorResult.append($imgResult);

        $divContentResult.append($titleContentResult);
        $divContentResult.append($anchorResultAlong);

        $divCardResult.append($anchorResult);
        // console.log($divCardResult)
        $divCardResult.append($divContentResult);

        $colResults.append($divCardResult);

        $rowResults.append($colResults);

    // agregar al padre
    $foodResults.append($rowResults);
}

// function oneCharacter (e) {
//     e.preventDefault
//     if ($inputSearch.val().trim().length > 1 ) {
//         // prop() permite manejar el valor booleano sin quitar el atributo.
//         $inputButton.prop("disable", false)
//         console.log('hola')
//     } 
//     else {
//         $inputButton.prop("disable", true)
//     };
// };

$(document).ready(loadPage);