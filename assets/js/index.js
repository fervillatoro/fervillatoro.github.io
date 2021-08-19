/**
* @object villa: Objeto global
*/
let villa = {
  /**
  * @method views: lo que el usuario ve.
  */
  views: {
    change: function ( requestedView )
    {
      // ocultar el menu
      // document.querySelector(".outer-menu input[type=checkbox]").checked = false;

      // obtener todas las vistas
      let views = document.querySelectorAll("[data-view]");
      for ( let view of views )
      {
        // ocultar todas las vistas excepto la que fue solicitada
        view.dataset.view == requestedView ? void(0) : view.style.display = "none";
      }
      // mostrar la vista solicitada
      requestedView = document.querySelector( `[data-view=${requestedView}]` );
      // requestedView.style.display = "block";
      requestedView.style.cssText = "animation: changeViewAnimation 500ms";
    }
  }
};
