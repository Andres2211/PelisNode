angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '1-"Intensamente"',
    description: 'SINOPSIS: Hacerse mayor puede ser un camino lleno de obstáculos. También para Riley, que debe dejar su vida en el Medio Oeste cuando su padre consigue un nuevo trabajo en San Francisco. Como todos nosotros, Riley es guiada por sus emociones: Alegría, Miedo, Ira, Asco y Tristeza. Las emociones viven en Cuarteles Generales, el centro de control dentro de la cabeza de Riley, desde donde la ayudan y aconsejan a lo largo de su día a día. Riley y sus emociones intentan adaptarse a su nueva vida en San Francisco, pero el caos se instala en los Cuarteles Generales. Aunque Alegría, la emoción principal y más importante de Riley, intenta mantener una actitud positiva, las emociones chocan a la hora de decidir cómo actuar en una nueva ciudad, un nuevo hogar y una nueva escuela. Genero:Animación,Fantástico,Comedia. Reparto: Animation. Año: 2015',
    face: 'img/1inten.jpg'
  }, {
    id: 1,
    name: '2-"Mad Max:Fury Road"',
    description: 'SINOPSIS: Perseguido por su turbulento pasado, Mad Max cree que la mejor forma de sobrevivir es ir solo por el mundo. Sin embargo, se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe, a quien han arrebatado algo irreemplazable. Enfurecido, el Señor de la Guerra moviliza a todas sus bandas y persigue implacablemente a los rebeldes en la Guerra de la Carretera de altas revoluciones. Reparto: Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne, Zoë Kravitz, Angus Sampson, Rosie Huntington-Whiteley, Riley Keough, Nathan Jones, Abbey Lee, Josh Helman, Courtney Eaton Genero: Ciencia ficción,Acción. Año: 2015',
    face: 'img/2mad.jpg'
  }, {
    id: 2,
    name: '3-"Misión Rescate"',
    description: 'Marte: Operación Rescate (2015) Titulo Original The Martian SINOPSIS: La pelicula seguira al Mark Watney, un astronauto que durante una misión tripulada a Marte, es dado por muerto tras una feroz tormenta y es abandonado por su tripulación. Pero Watney ha sobrevivido y se encuentra atrapado y solo en el planeta hostil. Con suministros escasos, deberá recurrir a su ingenio y a su instinto de supervivencia para encontrar la manera de comunicar a la Tierra que él está vivo. Género Ciencia Ficcion. Año: 2015',
    face: 'img/3miss.jpg'
  }, {
    id: 3,
    name: '4-"Straight Outta Compton"',
    description: 'Straight Outta Compton (2015) Titulo Original Straight Outta Compton SINOPSIS: En los 80, el barrio de Compton, era uno de los lugares más peligrosos de Estados Unidos. Un grupo de jóvenes movieron sus experiencias vitales en una música brutalmente rebelandose contra la autoridad. La pelicula cuenta cómo estos chicos revolucionaron la música y la cultura popular para siempre, en el momento en que contaron al mundo la verdad de vivir en el ghetto. Género Drama,Musica. Año: 2015',
    face: 'img/4stra.jpg'
  }, {
    id: 4,
    name: '5-"Sicario:Tierra de Nadie"',
    description: 'SINOPSIS: En la zona fronteriza que se extiende entre Estados Unidos y México, una joven e idealista agente del FBI es reclutada por un oficial de una fuerza de élite del Gobierno para ayudar en la creciente guerra contra el narcotráfico. Liderados por un asesor enigmático y de turbio pasado, el equipo se embarca en un viaje clandestino que obliga a la mujer a cuestionarse todo en lo que cree con el fin de sobrevivir. Género Acción,Crimen,Drama. Año 2015',
    face: 'img/5sic.jpg'
  }, {
    id: 5,
    name: '6-"Yo,él y Raquel"',
    description: 'Yo, él y Raquel (2015) Titulo Original Me & Earl & the Dying Girl SINOPSIS La pelicula sigue a Greg, un joven que está cursando el último año del instituto y lo hace de una manea sin que nadie lo note. Mientras secretamente hace extrañas películas con Earl, su único amigo. Pero todo comenzará a cambiar cuando su madre le obliga a hacerse amigo de una compañera de clase con leucemia. Género Drama,Comedia. Año 2015',
    face: 'img/6yoel.jpg' 
  }, {
    id: 6,
    name: '7-"Ex-Machina"',
    description: 'SINOPSIS: Un programador multimillonario selecciona a Caleb, un joven empleado de su empresa, para que pase una semana en un lugar remoto con el objetivo de que participe en un test en el que estará involucrada su última creación: un robot-mujer en el que inteligencia artificial lo es todo. Género: Ciencia ficción,Thriller,Drama,Robots,Thriller psicológico. Año: 2015 ',
    face: 'img/7exm.jpg' 
  }, {
    id: 7,
    name: '8-"AntMan: El hombre Hormiga"',
    description: 'SINOPSIS: Esta pelicula es una adaptación del cómic de MARVEL y nos contará la historia de Hank Pym, un científico que a raíz de unos experimentos ve modificado su tamaño hasta el de un insecto. Posteriormente desarrollará un casco que le permitirá comunicarse con las hormigas. Género: Ciencia Ficción. Año: 2015',
    face: 'img/8AntMan.jpg'
  }, {
    id: 8,
    name: '9-"Kingsman: Servicio Secreto"',
    description: 'SINOPSIS: Película no recomendada a menores de 16 años. El director Matthew Vaughn("Kick-Ass: Listo para machacar", "X-Men: Primera Generación") adapta el nuevo cómic del guionista escocés Mark Millar.Dentro del estilo característico de la adaptación de una historia gráfica, Kingsman: Servicio secreto cuenta la historia de un delincuente adolescente que se mueve por los barrios bajos de Londres y que pronto verá que su vida da un giro de 180 grados gracias a la ayuda de un misterioso hombre. De criminal pasa, casi inexplicablemente, a encontrarse en la lista de los espías más importantes del páis: protegiendo en secreto las calles que antes usaba únicamente en su beneficio propio. El filme cuenta con un reparto de lujo entre los que se encuentran Colin Firth, Samuel L. Jackson, Michael Caine y Mark Strong. Género: Acción,Espionaje. Año: 2015',
    face: 'img/9king.jpg'
  }, {
    id: 9,
    name: '10-"Los Vengadores La Era de Ultron"',
    description: 'SINOPSIS: La era de Ultrón. Ésta nueva entrega de “los vengadores” es una secuela de la anterior producción dirigida por Joss Whedon. En esta ocasion se hará más hincapié en cada uno de los miembros del grupo,tambien prometen más acción que nunca, y habrá nuevas incorporaciones que harán de la saga un muy buena secuela.Género: Ciencia Ficción. Año: 2015',
    face: 'img/10LosV.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
