# SagAPP

**Contenido:**

 - [Introducción](#Introducción)
 - [Investigación](#Investigación)
 - [Sketches](#Sketches)
 - [Planning](#Planificación)
 - [Prototipo de Alta fidelidad](#Prototipo)
 -  [Desarrollo de Proyecto](#Desarrollo)
 - [Oportunidades de mejora](#Mejoras)
 - [Fuentes](#Fuentes)
 


## Introducción
Bienvenidos a SagApp, una aplicación para divertirte buscando las películas de tu saga favorita, aquí puedes encontrar nuestras sagas recomendadas las cuales al hacerles clic, puedes acceder a todas las películas para que conozcas datos relevantes de cada una, tales como:
* Nombre de la película.
* Género de la película.
* Duración de la película
* Descripción de qué trata la película, etc.
* Además de obtener una guía para facilitar al usuario el ver sagas de películas.



## Investigación


Luego de una lluvia de ideas, en nuestro squad decidimos crear una plataforma donde se pudiera encontrar información de películas de forma clara, fácil y agradable para el usuario, pero aún necesitábamos nuestro valor agregado por lo que se utilizaron recursos como:

 - Entrevistas con usuarios.
 - Encuestas.
 - Observación de usuario.

Para poder optimizar nuestro tiempo lo mejor posible es que las entrevistas se realizaron entre las compañeras de Laboratoria, amigos y familiares. En esta instancia nos  enteramos de que a pesar de existir varias aplicaciones de este tipo, tenían varias desventajas:

 - Información irrelevante.
 - La versión móvil es bastante incómoda.
 - Contiene spoilers en los comentarios.

Luego, para poder dejar un registro es que se realizó esta encuesta : [Dificultades en páginas relacionadas](https://docs.google.com/spreadsheets/d/1UCiLKV5Gn8TuEhnoxh5xwcVDoL7TbRD3sZzD5ntH-HI/edit?usp=sharing)
Esto nos ayudó para verificar cuáles son los datos que necesitan de una página de este tipo. Además de conocer sus principales dificultades al momento de acceder a buscar información  de películas en internet.

Después de plantearlo en el squad, nos dimos cuenta de una problemática común, las sagas de películas: cómo  seguir un órden correcto. Por lo que lanzamos esta nueva encuesta:
[Sagas](https://docs.google.com/spreadsheets/d/15lDpBxjAZKahGRd-v8rHROmGgra_V5YP3IDLARw9dBg/edit?usp=sharing).

Con eso logramos confirmar lo planteado, los usuarios presentan problemas  al momento  de seguir la línea de una saga, por lo que definimos nuestro objetivo de proyecto: Ser una guía para el usuario.

Para poder adentrarnos más en los usuarios, además de decidir que contenido mostrar para este proyecto tomando en consideración el tiempo y la idea de que debemos priorizar es que lanzamos esta encuesta: [Encuesta Dificultad de Sagas](https://docs.google.com/spreadsheets/d/171_ko2Xa3Ko6lk-YSlqA8BwpMCcKLFWIZkfu0Xi9QZQ/edit?usp=sharing). Gracias a esta pudimos conocer por qué los usuarios comúnmente se confunden al momento de seguir una saga,  lo que buscan como solución y la plataforma desde donde accederían.

Como resultado final esperríamos tener una aplicación con las siguientes características:

- Sencilla.
- Amigable.
- Sin sección comentarios.
- Con un trailer de películas.
- Una guía para las sagas.
- Información de reparto,
- Puntuación.


## Sketches

Con la finalidad de testear nuestras ideas es que decidimos crear sketches donde  pudieramos mostrar a nuestros usuarios e iterar constantemente.

![Scketch-interfaz](https://raw.githubusercontent.com/FranciscaMora/Hackaton-Final-CC/master/Img/readme%20img/WhatsApp%20Image%202019-01-25%20at%2008.46.32.jpeg)

Además de crear un diagrama de  flujo para poder organizar las funciones de interfaz.
![Diagrama-de-flujo](https://raw.githubusercontent.com/FranciscaMora/Hackaton-Final-CC/master/Img/readme%20img/WhatsApp%20Image%202019-01-25%20at%2008.46.31%282%29.jpeg)


Resultando en  un prototipo de baja fidelidad:
![proto-baja-fidelidad](https://raw.githubusercontent.com/FranciscaMora/Hackaton-Final-CC/master/Img/readme%20img/WhatsApp%20Image%202019-01-25%20at%2008.46.31.jpeg)


## Planificación

Una vez definido nuestro objetivo, habiendo recopilado información con los usuarios e iterando sobre prototipos es que comenzamos a planificarnos en 2 métodos:

- Pizarra:
![Planificacion en pizarra](https://raw.githubusercontent.com/FranciscaMora/Hackaton-Final-CC/master/Img/readme%20img/WhatsApp%20Image%202019-01-25%20at%2008.46.34.jpeg) 

- [Trello](https://trello.com/b/18X9PQYh/hackaton)


## Prototipo de alta fidelidad

Al haber hecho nuestro trabajo previo ya especificado previamente es que llegamos a nuestro prototipo final ideal:

[Link a prototipo de alta fidelidad en figma](https://www.figma.com/proto/Koklh2Z39TU1YcJt0IB0RzSn/Untitled?scaling=scale-down).


## Desarrollo del proyecto

¿Cómo repartimos las tareas?
Alicia:
Encargada de extraer la información de la API de las películas que queríamos poner, además de incluir modificaciones a la estructura de las cartas en las cuales mostramos las películas.
Además de un modal con un carrusel adentro, el cual muestra la información de cómo se utiliza nuestra aplicación.
Redacción de algunas de las definiciones de terminado.
Finalmente, hice la presentación a mitad de la hackaton, para el jurado, quien nos felicitó por la aplicación planeada.


Verónica:
Encargada de crear funciones que permitieran manipular la información extraída de la API, para mostrarla en la aplicación, además de realizar el ordenado de la misma.
Además, encargada de finalizar los detalles para hacer la aplicación responsive.
Redacción de algunas de las definiciones de terminado.
Finalmente, agregó la barra de búsqueda la cual permite filtrar información según los nombres de las películas.

Francisca:
Encargada de investigación, entrevistas, crear historias de usuario, planificación, prototipo de baja fidelidad, prototipo de alta fidelidad, reacción, testeos de usabilidad y análisis de datos de usuario. 
Además de complementar en pequeñas tareas de código.


## Mejoras

Una vez realizados los testeos de usuario pudimos concluir en las siguentes mejoras para una nueva versión de esta interfaz:

- Botón enter en buscador debe buscar y no recargar  página.
- Agregar un log in y que el usuario pueda crear una cuenta para poder dejar un registro de las películas vistas y así facilitar la experiencia.
- Redefinir colores de pantalla principal.


## Fuentes

Para poder realizar este proyecto investigamos y nos inspiramos de varias páginas web. Algunas de ellas son:

- [Netflix](https://www.netflix.com)
- [Rotten Tomatoes](https://www.rottentomatoes.com/)
- [Imdb](https://www.imdb.com/)



















