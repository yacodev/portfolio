![Telemetria aplicada al monitoreo](/images/blog/blog_water_opt.png)

### Sistema de telemetria aplicada al monitoreo de la cantidad de solucion madre en sistemas de abastecimiento rural de agua

#### Introducción
El acceso al agua clorada es algo que damos por sentado en grandes ciudades y capitales de provincia, sin embargo, en el ámbito rural el escenario es completamente diferente. Si bien a nivel nacional el 74.4% de la población rural tiene acceso al agua, menos del 3% consume agua clorada (ENAPRES, 2018). La situación en la región Cusco es similar, contando con una cobertura de 93.3%, pero sólo el 11% accede al agua clorada. Y esto a pesar de que en la región tenemos alrededor de 5000 sistemas de abastecimiento de agua gestionados mediante las Juntas Administradoras de Servicios de Saneamiento (JASS), casi la mitad de estos sistemas de abastecimiento de agua cuentan con un sistema de cloración (DATASS, 2018).

El método predominante para la cloración de sistemas de abastecimiento de agua a nivel rural es el denominado sistema de goteo, el cual consiste en el vertido de cloro en altas concentraciones almacenado en un tanque de plástico (solución madre) hacia el reservorio principal. 

La problemática en el consumo de agua clorada se puede resumir en que las JASS tienen diversas dificultades como: la falta de mantenimiento de los sistemas de cloración, la inoportuna dotación de cloro y la inoportuna recarga de los tanques de solución madre. De las dificultades mencionadas las dos últimas podrían resolverse si somos capaces de medir de forma continua y remota la cantidad de solución madre. Por lo que nos planteamos la siguiente interrogante: ¿Cómo medir de forma continua y remota la cantidad de solución madre en reservorios rurales? 

Adicionalmente, debemos considerar que a nivel regional no se cuenta con medios de verificación remotos que permitan medir la cantidad de solución madre.

En tal sentido, el objetivo de la presente investigación fue la medición continua y remota de la cantidad de solución madre en reservorios rurales.



#### Materiales y métodos
La presente proyecto comprende la implementación de un sistema de medición remota de la cantidad de solución madre en reservorios rurales, en adelante denominado “Sistema de telemetría aplicada al monitoreo de la cantidad de solución madre en reservorios rurales”. Para el diseño se consideró el entorno y las condiciones de los sistemas de abastecimiento de agua en zonas rurales de la región Cusco como el tipo el tipo de sistema de cloración empleado y la inexistencia de energía eléctrica.

En cuanto al metodología seguida, el proyecto se realizó en tres fases, la primera es la fase teórica en la cual se recopilo información referente al tema en bases de datos como: Scopus, Web of Science y Google Academic. 

En la segunda fase se procedió a realizar entrevistas a los agentes involucrados y relacionados con la cloración del agua en ámbitos rurales: integrantes de las JASS, a los responsables de las Áreas Técnicas Municipales (ATM), al encargado del Fondo al Estimulo del Desempeño (FED) de la Dirección Regional de Vivienda Construcción y Saneamiento (DRVCS) del Gobierno Regional del Cusco y finalmente al responsable del Centro de Atención al Ciudadano del Ministerio de Vivienda Construcción y Saneamiento, con el objetivo de recabar información respecto al funcionamiento de las JASS, ATM y los procesos necesarios para dotar de cloro al sistema de cloración.

En la Tercera fase se realizó el diseño del sistema de telemetría el cual esta conformado por dos subsistemas:
•	Subsistema de monitoreo de cantidad de sustancia madre
•	Subsistema informático  

#### Subsistema de monitoreo de cantidad de sustancia madre.
 
 Es el encargado de medir la cantidad de sustancia madre presente en el tanque de cloración y enviar la información a la plataforma informática, utilizando para ello la red celular, para este fin el subsistema de monitoreo está conformado por las siguientes etapas:

  - Etapa de suministro de energía, conformado por un panel solar, controlador y batería; esta etapa se encarga de suministrar energía al subsistema.

  -  Etapa de Comunicación, conformado por un módulo electrónico; etapa encargada de la transmisión de los datos a la plataforma informática utilizando la red celular.

  -  Etapa de adquisición de nivel del tanque, conformado por un sensor ultrasónico; etapa encargada de medir la altura del tanque de solución madre.

  -  Etapa de Procesamiento de datos, conformado por un módulo electrónico, esta etapa se encarga de procesar las señales del sensor ultrasónico y enviar los datos a través de la etapa de comunicación.


#### Subsistema informático. 

Encargado de sistematizar la información de la cantidad de solución madre proveniente del subsistema de monitoreo, permitiendo acceder a datos remota e instantáneamente y así determinar la oportuna recarga del tanque de solución madre, también permite detectar la obstrucción del conducto que lleva la solución madre hacia el reservorio principal. El subsistema informático es encargado también de enviar los mensajes de texto SMS a los responsables de la JASS, ATM u otros según configuración. Este subsistema está instalado en servidores en la nube, por lo que puede accederse a este desde cualquier dispositivo con conexión a internet.


#### Resultados
Subsistema de monitoreo de cantidad de sustancia madre, este subsistema se instaló en el reservorio rural ubicado en el centro poblado de chingo grande del distrito de Saylla.

![Equipo](/images/blog/blog_water_equip.png)
Figura 1 Interior de parte del subsistema de monitoreo de cantidad de sustancia madre

#### Plataforma informática.
Es accesible mediante cualquier dispositivo con conexión a internet.

Permite:
  -  Visualizar en un mapa los reservorios que cuenten con el subsistema de monitoreo continuo y ver el reporte de la cantidad de solución madre del tanque de cloración.
  -  Configurar el envío mensaje de texto a los responsables de la JASS, ATM u otros responsables alertando sobre la cantidad de solución madre presente en el sistema de cloración.
  -  Historial gráfico de la carga y descarga de la solución madre en los sistemas de cloración.

![Plataforma de telemetria](/images/blog/blog_water_plataform.png)
Figura 2 Captura de pantalla de la plataforma informática.



#### Conclusiones
  -  Al poder monitorizar la cantidad de solución madre en los sistemas de cloración, se puede alertar oportunamente a los responsables de las JASS una vez que la solución madre esté cerca de agotarse, permitiendo una recarga oportuna.
