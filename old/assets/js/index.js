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

navigator.serviceWorker.register('/sw.min.js')
.then(function(registration) {

  registration.addEventListener('updatefound', () => {
    // se encontro una nueva version de SW y se actualizo
    console.log("Se actualizo el SW a la nueva version.");

    // Un trabajador de servicio salvaje ha aparecido en reg.installing!
    const newWorker = registration.installing;

    newWorker.state;
    // "installing" - el evento de instalación se ha activado, pero aún no se ha completado
    // "installed"  - instalacion completada
    // "activating" - el evento de activación se ha disparado, pero aún no se ha completado
    // "activated"  - completamente activo
    // "redundant"  - descartado. Se produjo un error en la instalación o se reemplazó por una versión más reciente.

    newWorker.addEventListener('statechange', () => {
      // newWorker.state ha cambiado
      console.log("El evento statechange ha cambiado");
    });
  });
  console.log(registration);
  // El registro funcionó
  console.log('Registration succeeded.');
})
.catch(function(error) {
  // el registro falló
  console.log('Registration failed with ' + error);
});
