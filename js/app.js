// traer elementos de html (input), botón. Variables globales
var retaurants = [];

var $inputSearch = $('#search');

var $inputButton = $('#search_btn');

function loadPage() {
    //traer elementos de html. Eventos
    $inputSearch.keyup(filterCoincidence);
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
            console.log(restaurant.type.toLowerCase().indexOf(inputSearchValue) >= 0);
        })
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

        var $anchorResult = $("<a href="#" />", {
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
        $imgResult.attr("src", restaurant.picture)
    // saignando valores
        $titleContentResult.text(restaurant.name);

    // acomodarlos (padres e hijos)
        $anchorResult.append($imgResult);

        $divContentResul.append($titleContentResult);
        $divContentResul.append($anchorResult);

        $divCardResult.append($anchorResult);
        $divCardResult.append($divContentResul);

        $colResults.append($divCardResult);

        $rowResults.append($colResults);

    // agregar al padre
    $foodResults.append($rowResults);

}

$(document).ready(loadPage);