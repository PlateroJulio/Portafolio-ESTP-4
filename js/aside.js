const aside =()=> {
  return  `
  <aside>
                <img src="img/user/utec_logo.png" class="mt-8">
                <div class="text-white text-center mx-auto mt-8">
                    <h1 class="text-2xl">Alumno</h1>
                    <div class="mt-4">
                        <img class="w-16 mx-auto rounded-full" src="img/user/133864244_1762139377282817_6258023692062631340_n.jpg">
                        <h3>Aviles Platero Julio Vladimir</h3>
                        <h2 class="mt-2">25-0842-2017</h2>
                    </div>
                    <div class="mt-8">
                        <!-- Acording menu -->

                        <!-- Capitulo 1-->
                       <div class="mb-2 mt-2">
                           <button id="capitulo1"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                   onclick="mostrar_capitulo1()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 1
                           </button>
                           <div style="display: none;" id="content-capitulo1"> 
                               <div id="cap1-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                   <img class="w-8 mr-4" src="img/user/check.png"><a id="cap1-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                               </div>
                           </div>
                       </div>
                       <!-- Capitulo 2-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo2"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo2()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                                Capitulo 2
                            </button>
                            <div style="display: none;" id="content-capitulo2"> 
                                <div id="cap2-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap2-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 3-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo3"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo3()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                                Capitulo 3
                            </button>
                            <div style="display: none;" id="content-capitulo3"> 
                                <div id="cap3-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap3-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                                <div id="cap3-ej2" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap3-ej2" class="text-white text-lg" href="#"> Ejercicio 2</a>
                                </div>
                                <div id="cap3-ej3" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap3-ej3" class="text-white text-lg" href="#"> Ejercicio 3</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 4-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo4"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo4()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                                Capitulo 4
                            </button>
                            <div style="display: none;" id="content-capitulo4"> 
                                <div id="cap4-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap4-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                                <div id="cap4-ej2" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap4-ej2" id="cap4-ej1" class="text-white text-lg" href="#"> Ejercicio 2</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 5-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo5"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo5()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                                Capitulo 5
                            </button>
                            <div style="display: none;" id="content-capitulo5"> 
                                <div id="cap5-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap5-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                                <div id="cap5-ej2" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap5-ej2" id="cap4-ej1" class="text-white text-lg" href="#"> Ejercicio 2</a>
                                </div>
                                <div id="cap5-ej3" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap5-ej3" id="cap4-ej1" class="text-white text-lg" href="#"> Ejercicio 3</a>
                                </div>
                                <div id="cap5-ej4" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap5-ej4" id="cap4-ej1" class="text-white text-lg" href="#"> Ejercicio 4</a>
                                </div>
                            </div>
                        </div>
                         <!-- Capitulo 6-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo6"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo6()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 6
                            </button>
                            <div style="display: none;" id="content-capitulo6"> 
                                <div id="cap6-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap6-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 7-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo7"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo7()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 7
                            </button>
                            <div style="display: none;" id="content-capitulo7"> 
                                <div id="cap7-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap7-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 8-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo8"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo8()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 8
                            </button>
                            <div style="display: none;" id="content-capitulo8"> 
                                <div id="cap8-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap8-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 9-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo9"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo9()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 9
                            </button>
                            <div style="display: none;" id="content-capitulo9"> 
                                <div id="cap9-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap9-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 10-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo10"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo10()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 10
                            </button>
                            <div style="display: none;" id="content-capitulo10"> 
                                <div id="cap10-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap10-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                        <!-- Capitulo 11-->
                       <div class="mb-2 mt-2">
                            <button id="capitulo11"  class="flex w-48 mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                                    onclick="mostrar_capitulo11()"><img class="w-8 mr-4" src="img/user/ListCapitulo.png">
                               Capitulo 11
                            </button>
                            <div style="display: none;" id="content-capitulo11"> 
                                <div id="cap11-ej1" class="w-32 bg-gray-700 mx-auto flex mt-2 mb-2 cursor-auto rounded-md">
                                    <img class="w-8 mr-4" src="img/user/check.png"><a id="cap11-ej1" class="text-white text-lg" href="#"> Ejercicio 1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
  `;
}