 const view =(vista)=> {

    views = [
        {
            'id': 'cap1-ej1',
            'content' : `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 1 - Ejercicio 1</h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 1/MaquinaRefresco.zip" target="_blank" download="MaquinaRefresco.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8">Responde las siguientes preguntas:</p>
                                    <b class="ml-16">¿Por qué es tan importante dedicar tiempo a los requisitos de sus usuarios?</b>
                                        <p class="ml-24">Obtener todos lo requisitos de el usuario, es sinonimo de sistema adaptable a la nesesidad del usuario.
                                            si el sistema satisface todas las nesesidades del cliente, este ha sido bien desarrollado.</p>
                                    <b class="ml-16">¿Cuál es la diferencia entre los requisitos de diseño y un algoritmo?</b>
                                        <p class="ml-24">El diseño es como se vera la informacion pintada para los usuarios que datos nesesitara, mientras que el algoritmo es se guarda
                                            y como obtiene dicha informacion tambien varia segun el lenguaje que quiere aplicar el cliente en su sistema.</p> 
                                    <b class="ml-16">¿Cuál es la diferencia entre un método y una propiedad?</b>
                                        <p class="ml-24">- Metodo: es una es una acción.</p>
                                        <p class="ml-24">- Propiedad: es una característica del objeto.</p>
                                    <b class="ml-16">¿Qué es un error?</b>
                                        <p class="ml-24">Puede ser una acción, un concepto o una cosa que no se realizó de manera correcta.</p>
                                    <b class="ml-16">¿Qué es el estado?</b>
                                        <p class="ml-24">En la programacion se puede toma 2 formas, en desarrollo o produccion.</p>
                                    <br>
                                    <b class="ml-16">Escriba un algoritmo sobre cómo funciona una máquina de refrescos desde el momento en que se inserta una moneda hasta
                                        se dispensa refresco.</b><br>   
                                    <b class="ml-16">Suponga que el precio de un refresco es de 80 centavos.</b>
                                    
                                        <p class="ml-24">El sistema cuenta con un scanner que registra los tipos de bebidas.
                                            Ejemplifiquemoslo:</p>
                                            <p class="ml-32">1- debemos comparar una bebida de 80 centavos, y en la maquina tenemos 4 opciones, las primeras dos valen 80 centavos
                                                ambas y las ultmias dos cuetan 90 centavos.</p>
                                            <p class="ml-32">2- ahora debemos elegir una bebida, de acuerdo a nuestro presupuesto de  80 centavos, si elegieramos una de 90cv,
                                                nos diria que no tenemos suficiente dinero, que depositemos mas, pero si seleccionaramos una de 80cv pasaria lo siguiente. </p>
                                            <p class="ml-32">3- este paso seria en un proceso interno, ya que la maquina verificaria el id de dicho refresco al presionar el boton
                                                y este iria a buscar en que fila columna esta ubicado activando el mecanismo para hacer caer el refresco. </p>
                                            <p class="ml-32"> 4- una vez caido el refresco, el sistema se reinicia su funcion y esta lista para otra compra. </p>  
                                    <br> 
                                    <b class="ml-16">Escriba los requisitos de diseño para una aplicación que ejecutará la máquina de refrescos</b>
                                        <p class="ml-24"> <b>monto</b>  = dinero ingresado en la maquina para poder comprar.</p>
                                        <p class="ml-24"> <b>bebidas</b>  = tipos de bebidas en la maquina.</p>
                                        <p class="ml-24"> <b>precio de bebida</b> = precio para saber si puede compara o no la bebida segun el monto ingresado.</p>
                                        <p class="ml-24"> <b>cambio</b>  = si el monto es mayor al precio de la bebida, retorno el vuelto equivalente.</p></p>                                          
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 1/1.png">
                            </div>
                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap2-ej1',
            'content': `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 2 - Ejercicio 1</h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 2/Exersise 1.zip" target="_blank" download="Exersise 1.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8">El Ejercicio consta de solo añadir una cadena y luego imprimirla.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 2/1.png">
                            </div>
                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap3-ej1',
            'content' : `
            <aside>
                            <div class="mx-auto">
                                <div class="text-center bg-gray-200">                   
                                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 3 - Ejercicio 1</h1>
                                    <!--  btn donwload -->
                                    <div class="flex">
                                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                            href="data/Capitulo 3/Exersise 1/Exersise 1.zip" target="_blank" download="Exersise 1.zip">
                                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                                    </div>
                                    <br>
                                    <!-- descripcion -->
                                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                        <div class="text-left">
                                            <p class="ml-8">El Ejercicio consta de solo multiplicar dos numeros enteros almacenarlos en una variable y mostrarlo en la consola. </p>                                                                             
                                        </div>
                                    </div>
                                    <!-- Imagenes -->
                                    <div class="container mx-auto">
                                        <img class="mx-auto" src="data/Capitulo 3/Exersise 1/1.png">
                                    </div>
                                </div>
                            </div>
                        </aside>
                        `
        },
        {
          'id': 'cap3-ej2',
          'content' : `
            <aside>
                      <div class="mx-auto">
                          <div class="text-center bg-gray-200">                   
                              <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 3 - Ejercicio 2</h1>
                              <!--  btn donwload -->
                              <div class="flex">
                                  <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                      href="data/Capitulo 3/Exersise 2/Exersise 2.zip" target="_blank" download="Exersise 2.zip">
                                      <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                              </div>
                              <br>
                              <!-- descripcion -->
                              <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                  <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                  <div class="text-left">
                                      <p class="ml-8">Escriba código dentro de un patio de recreo de Swift que cuadre un flotador. Muestre el flotador resultante. </p>                                                                             
                                  </div>
                              </div>
                              <!-- Imagenes -->
                              <div class="container mx-auto">
                                  <img class="mx-auto" src="data/Capitulo 3/Exersise 2/1.png">
                              </div>
                          </div>
                      </div>
              </aside>
          `
        },
        {
          'id': 'cap3-ej3',
          'content' : `
              <aside>
                        <div class="mx-auto">
                            <div class="text-center bg-gray-200">                   
                                <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 3 - Ejercicio 3</h1>
                                <!--  btn donwload -->
                                <div class="flex">
                                    <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                        href="data/Capitulo 3/Exersise 3/Exersise 3.zip" target="_blank" download="Exersise 3.zip">
                                        <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                                </div>
                                <br>
                                <!-- descripcion -->
                                <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                    <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                    <div class="text-left">
                                        <p class="ml-8">Escriba código dentro de un patio de recreo Swift que resta dos flotadores, con el resultado almacenado
                                            como un número entero. Tenga en cuenta que no se produce redondeo. </p>                                                                             
                                    </div>
                                </div>
                                <!-- Imagenes -->
                                <div class="container mx-auto">
                                    <img class="mx-auto" src="data/Capitulo 3/Exersise 3/1.png">
                                </div>
                            </div>
                        </div>
                </aside>
          `
        },
        {
          'id': 'cap4-ej1',
          'content' : `
              <aside>
                        <div class="mx-auto">
                            <div class="text-center bg-gray-200">                   
                                <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 4 - Ejercicio 1</h1>
                                <!--  btn donwload -->
                                <div class="flex">
                                    <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                        href="data/Capitulo 4/Exersise 1/Exersise1.zip" target="_blank" download="Exersise1.zip">
                                        <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                                </div>
                                <br>
                                <!-- descripcion -->
                                <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                    <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                    <div class="text-left">
                                        <p class="ml-8">Extienda la aplicación del generador de números aleatorios para imprimir en la consola cuántas veces el usuario
                                            adivinado antes de adivinar el número aleatorio correcto. </p>                                                                             
                                    </div>
                                </div>
                                <!-- Imagenes -->
                                <div class="container mx-auto">
                                    <img class="mx-auto" src="data/Capitulo 4/Exersise 1/1.png">
                                    <br>
                                    <img class="mx-auto" src="data/Capitulo 4/Exersise 1/2.png">
                                </div>
                            </div>
                        </div>
                </aside>
          `
        },
        {
          'id': 'cap4-ej2',
          'content' : `
              <aside>
                        <div class="mx-auto">
                            <div class="text-center bg-gray-200">                   
                                <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 4 - Ejercicio 1</h1>
                                <!--  btn donwload -->
                                <div class="flex">
                                    <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                        href="data/Capitulo 4/Exersise 2/Exersise2.zip" target="_blank" download="Exersise2.zip">
                                        <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                                </div>
                                <br>
                                <!-- descripcion -->
                                <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                    <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                    <div class="text-left">
                                        <p class="ml-8">Extienda la aplicación del generador de números aleatorios para imprimir en la consola cuántas veces el usuario
                                            jugó la aplicación. Imprima este valor en la consola cuando el usuario salga de la aplicación. </p>                                                                             
                                    </div>
                                </div>
                                <!-- Imagenes -->
                                <div class="container mx-auto">
                                    <img class="mx-auto" src="data/Capitulo 4/Exersise 2/1.png">
                                    <br>
                                    <img class="mx-auto" src="data/Capitulo 4/Exersise 2/2.png">
                                </div>
                                <br>
                            </div>
                        </div>
                </aside>
          `
        },
        {
            'id': 'cap5-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 5 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 5/BookStore.zip" target="_blank" download="BookStore.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8"> Intente crear los archivos de clase para el resto de las clases que asignó. </p>                                                                             
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 5/1.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 5/2.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 5/3.png">
                    </div>
                    <br>
                </div>
            </div>
            </aside> 
            `
        },
        {
            'id': 'cap5-ej2',
            'content': `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 5 - Ejercicio 2</h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 5/BookStore.zip" target="_blank" download="BookStore.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8">Planifique una clase de autor. Elija el tipo de información que necesitaría almacenar sobre
                                        un autor.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 5/4.png">
                            </div>
                            <br>
                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap5-ej3',
            'content': `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 5 - Ejercicio 3</h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 5/BookStore.zip" target="_blank" download="BookStore.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8">Para los atrevidos y avanzados: Intente crear una superclase llamada PrintedMaterial Map con las
                                        propiedades que una clase podría tener.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 5/5.png">
                            </div>
                            <br>
                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap5-ej4',
            'content': `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 5 - Ejercicio 4</h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 5/BookStore.zip" target="_blank" download="BookStore.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8">Para los atrevidos y avanzados: Crear clases para los otros tipos de materiales impresos que
                                         una tienda podría tener.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 5/6.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 5/7.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 5/8.png">
                            </div>
                            <br>
                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap6-ej1',
            'content': `
            <aside>
                    <div class="mx-auto">
                        <div class="text-center bg-gray-200">                   
                            <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 6 - Ejercicio </h1>
                            <!--  btn donwload -->
                            <div class="flex">
                                <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                                    href="data/Capitulo 6/Ejercicio 1.zip" target="_blank" download="Ejercicio 1.zip">
                                    <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                            </div>
                            <br>
                            <!-- descripcion -->
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                                <div class="text-left">
                                    <p class="ml-8"> <b> Preguntas: </b></p>
                                    <p class="ml-8"><b>1-</b> Cambie el tamaño del objeto Label en la interfaz para que sea más pequeño en ancho. ¿Cómo lo hace? 
                                        afecta su mensaje de texto? lo que ocurre es que no se muestrara todo el texto, sino solo una parte. </p>
                                    <p class="ml-8"> <b>2-</b> Elimine la conexión de salida de referencia de la etiqueta y vuelva a ejecutar el proyecto. ¿Qué sucede?
                                        simplemente no funcionaran las acciones, ya que no esta conectado el codigo controlador con la vista.</p>
                                    <br>
                                    <p class="ml-8"> Borre el texto predeterminado de "Etiqueta" en el programa y vuelva a ejecutar el ejemplo.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 6/1.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 6/2.png">
                            </div>
                            <br>
                            <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                                    <p class="ml-8"> Si crees que tienes el control de esto, agrega un nuevo botón y etiqueta alObjeto ViewController 
                                        y a la interfaz. Cambie la etiqueta para que no muestre su nombre para mostrar otra cosa.</p>                                                                             
                                </div>
                            </div>
                            <!-- Imagenes -->
                            <div class="container mx-auto">
                                <img class="mx-auto" src="data/Capitulo 6/3.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 6/4.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 6/5.png">
                                <br>
                                <img class="mx-auto" src="data/Capitulo 6/6.png">
                            </div>
                            <br> 

                        </div>
                    </div>
            </aside>
            `
        },
        {
            'id': 'cap7-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 7 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 7/EjercicioCap7.zip" target="_blank" download="EjercicioCap7.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8">- Cambie el botón actual y agregue un nuevo botón. Etiquete los botones FM y AM. </p>
                            <p class="ml-8">- Si
                                el usuario hace clic en el botón FM, muestra una estación de FM. Si el usuario hace clic en el botón AM,
                                mostrar una emisora ​​AM. (Sugerencia: deberá agregar un segundo objeto RadioStation al
                                ViewController.swift archivo.) </p>
                            <p class="ml-8">- Limpie un poco la interfaz asegurándose de que el usuario no vea el texto "Etiqueta"
                                cuando se inicia la aplicación de iPhone </p>                                                                        
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 7/1.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 7/2.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 7/3.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 7/4.png">
                    </div>
                    <br>

                </div>
            </div>
            </aside>
            `
        },
        {
            'id': 'cap8-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 8 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 8/BookStore.zip" target="_blank" download="BookStore.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8">- Mejore la clase Libro para que pueda almacenar otro atributo, por ejemplo, un precio o un género.</p>
                            <p class="ml-8">- Modifique DetailViewController para que se muestren los nuevos campos. Recuerda
                                conectar un control de interfaz a una propiedad.</p> 
                            <p class="ml-8">- Cambie el objeto BookStore para que se llame a un método independiente para inicializar la lista de
                                Libro de objetos (en lugar de ponerlo todo en el método init).</p> 
                            <p class="ml-8">- Hay otro atributo en UITableViewCell llamado detailTextLabel. Intentar
                                hacer uso de él estableciendo su propiedad de texto en algo.</p>          
                            <p class="ml-8">- Usando Xcode para modificar la interfaz, juegue cambiando el color de fondo del
                                DetailViewController en el archivo del guión gráfico.</p>  
                            <p class="ml-8">- <b> Para un desafío más difícil: </b> </p>  
                            <p class="ml-8">- Ordene los libros en el objeto Librería para que aparezcan en orden ascendente en la
                                MasterDetailView.</p>                                                               
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 8/1.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 8/2.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 8/3.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 8/4.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 8/5.png">
                    </div>
                    <br>

                </div>
            </div>
            </aside>
            `
        },
        {
            'id': 'cap9-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 9 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 9/BisiestoYear.zip" target="_blank" download="BisiestoYear.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8">- Escriba una aplicación Swift que determine si los siguientes años son bisiestos:
                                1800, 1801, 1899, 1900, 2000, 2001, 2003 y 2010.</p>
                            <p class="ml-8">- La salida debe escribirse en el
                                consola en el siguiente formato: El año 2000 es un año bisiesto o El año
                                2001 no es un año bisiesto.</p>>                       
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 9/1.png">
                        <br>
                    </div>
                    <br>

                </div>
            </div>
            </aside>
            `
        },
        {
            'id': 'cap10-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 10 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 10/RandomNumber.zip" target="_blank" download="RandomNumber.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8">- Amplíe la aplicación del generador de números aleatorios para mostrar una fecha y hora en un objeto Label
                                cuando se inicia la aplicación.</p>    
                            <p class="ml-8">- Después de mostrar una etiqueta de fecha y hora, agregue un botón para actualizar la etiqueta de datos y hora con
                                el nuevo tiempo.</p>                 
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 10/1.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 10/2.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 10/3.jpg">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 10/4.jpg">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 10/5.jpg">
                        <br>
                    </div>
                    <br>

                </div>
            </div>
            </aside>
            `
        },
        {
            'id': 'cap11-ej1',
            'content': `
            <aside>
            <div class="mx-auto">
                <div class="text-center bg-gray-200">                   
                    <h1 class="bg-gray-800 text-white ml-16 mr-16 text-3xl mt-8 mb-4 font-bold py-2 rounded-md">Capitulo 11 - Ejercicio 1</h1>
                    <!--  btn donwload -->
                    <div class="flex">
                        <a class="flex mx-auto px-8 bg-green-300 py-2 text-center text-justify text-white shadow-xs rounded-md"
                            href="data/Capitulo 11/BookStoreCap11.zip" target="_blank" download="BookStoreCap11.zip">
                            <img class="mr-4" src="img/user/icon.png" width="32px"><b>Descargar</b></a>
                    </div>
                    <br>
                    <!-- descripcion -->
                    <div class="bg-white mr-16 ml-16 mb-8 py-4 rounded-md">
                        <h3 class="text-xl"><b>Descripcion del Ejercicio:</b></h3>
                        <div class="text-left">
                            <p class="ml-8"> Agregue una nueva vista a la aplicación para permitir que el usuario ingrese el nombre de un libro. </p>       
                            <p class="ml-8">- Proporcione una forma de eliminar un libro de la lista. </p> 
                            <p class="ml-8">- Cree un objeto Autor y agréguelo a un objeto Libro. </p>        
                        </div>
                    </div>
                    <!-- Imagenes -->
                    <div class="container mx-auto">
                        <img class="mx-auto" src="data/Capitulo 11/1.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/2.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/3.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/4.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/5.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/6.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/7.png">
                        <br>
                        <img class="mx-auto" src="data/Capitulo 11/8.png">
                        <br>
                    </div>
                    <br>

                </div>
            </div>
            </aside>
            `
        }
    
    ];

    let Retornarvista = ``;

    views.forEach(view => {
        if(view.id == vista){
            Retornarvista = view.content;
        }
    });

    return Retornarvista;
}