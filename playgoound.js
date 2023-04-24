// Prototipo de clase Banda
class Banda {
    constructor({
        nombre = "",
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }

    agregarIntegrantes(integranteNuevo) {

        var hayIntegrantes = this.integrantes.length > 0; 
        var hayBaterista = false;

        // Validamos si hay integrantes en la banda
        if (hayIntegrantes) {

            if (integranteNuevo.instrumento == "Bateria") {

                // Recorremos el arreglo de la banda a ver si ya cuentan con un integrante que toque la bateria
                this.integrantes.forEach(integrante => {
                    if (integrante.instrumento == "Bateria") {
                        hayBaterista = true;
                    }
                });
    
                // Si no haybaterista, lo agregamos
                if (hayBaterista === false) {
                    this.integrantes.push(integranteNuevo);
                } else {
                // Si si hay baterista, lanzamos mensaje de que ya hay 
                    console.log("Lo sentimos, no pudimos insertar a: " + integranteNuevo.nombre + ", la banda ya cuenta con un baterista");
                }
                return;
            }

            this.integrantes.push(integranteNuevo);

        } else {
            this.integrantes.push(integranteNuevo);
        }

    }

};

// Prototipo de clase Integrante
class Integrante {
    constructor({
        nombre,
        instrumento,
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

// Creando Instancias de Clases
const gunsAndRoses = new Banda({
    nombre: "Guns N' Roses",
    generos: ["Hard rock", "Heavy metal", "Punk rock"],
});

const stevenAdler = new Integrante({
    nombre: "Steven Adler",
    instrumento: "Bateria",
});

const frankFerrer = new Integrante({
    nombre: "Frank Ferrer",
    instrumento: "Bateria",
});

const slash = new Integrante({
    nombre: "Slash",
    instrumento: "Guitarra",
}); 


// Agregando Integrantes a la Banda
gunsAndRoses.agregarIntegrantes(stevenAdler);
gunsAndRoses.agregarIntegrantes(slash);
gunsAndRoses.agregarIntegrantes(frankFerrer);

gunsAndRoses;


