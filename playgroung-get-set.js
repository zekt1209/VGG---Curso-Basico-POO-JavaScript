class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      // Tu código aquí 👈
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      // Tu código aquí 👈
      if (typeof (nuevoNombrecito) === 'string') {

        let nuevoNombreUpper = nuevoNombrecito[0].toUpperCase() + nuevoNombrecito.substring(1);
        this._name = nuevoNombreUpper;
      } else {
        console.error("No se puede cambiar el nombre porque tu tipo de dato no es un string");
      }
    }
  }

  const programacionWeb = new Course({
    name: 'programacion web'
  });

programacionWeb.name = 'progra web';