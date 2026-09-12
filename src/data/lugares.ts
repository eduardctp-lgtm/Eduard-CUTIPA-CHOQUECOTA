import { LugarTuristico } from '../types';
import sanPedroNocturna from '../assets/images/iglesia_san_pedro_juli_nocturna_1788713698984.jpg';
import sanPedroImagenWebp from '../assets/images/regenerated_image_1788712374103.jpg';
import sanPedroImagenAnterior from '../assets/images/regenerated_image_1788710637689.jpg';
import temploRojoJuli from '../assets/images/templo_rojo_juli_1788710834838.jpg';
import asuncionTemploJuli from '../assets/images/asuncion_templo_juli_1788711406753.jpg';
import santaCruzJerusalenJuli from '../assets/images/santa_cruz_jerusalen_juli_1788712511209.jpg';
import cerroSanBartolomePanoramica from '../assets/images/cerro_san_bartolome_panoramica_1788712826556.jpg';
import playaMuelleLagoTiticaca from '../assets/images/playa_muelle_lago_titicaca_juli_1788713221715.jpg';
import chullpasHuaquinaJuli from '../assets/images/chullpas_huaquina_juli_1788713403313.jpg';
import muelleTuristicoJuliAereo from '../assets/images/muelle_turistico_juli_aereo_1788713563179.jpg';
import sanJuanRender3D from '../assets/images/san_juan_juli_render_3d_1788713914497.jpg';
import sanPedro3DRender from '../assets/images/san_pedro_3d_render_1788709858353.jpg';
import asuncionRender3D from '../assets/images/asuncion_render_3d_1788715700726.jpg';

export const LUGARES_JULI: LugarTuristico[] = [
  {
    id: 'iglesia-san-pedro',
    numero: 1,
    nombre: 'IGLESIA DE SAN PEDRO',
    nombreCorto: 'San Pedro',
    subtitulo: 'Templo Matriz y joya de alabastro del siglo XVI',
    categoria: 'templo',
    imagenPrincipal: sanPedroNocturna,
    galeria: [
      {
        id: 'sp-1',
        url: sanPedroNocturna,
        titulo: 'Fachada Iluminada y Campanario de San Pedro al Atardecer',
        descripcion: 'Frontispicio de sillería iluminado, escalinata central de piedra, portal con vista al retablo dorado y torre campanario con cúpula y reloj.'
      },
      {
        id: 'sp-1a',
        url: sanPedroImagenWebp,
        titulo: 'Templo Colonial y Atrio Histórico',
        descripcion: 'Panorámica monumental al atardecer sobre el altiplano de Juli y vista hacia el lago.'
      },
      {
        id: 'sp-1b',
        url: temploRojoJuli,
        titulo: 'Templo de Piedra y Cantería Colonial',
        descripcion: 'Atardecer sobre la arquitectura virreinal y explanada de Juli.'
      },
      {
        id: 'sp-1c',
        url: sanPedroImagenAnterior,
        titulo: 'Fachada Monumental de San Pedro',
        descripcion: 'Frontispicio de piedra blanca y alabastro tallado en estilo renacentista y plateresco.'
      },
      {
        id: 'sp-2',
        url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Nave Central y Altar Mayor',
        descripcion: 'Planta de cruz latina con imponentes retablos revestidos en pan de oro y tallados barrocos.'
      },
      {
        id: 'sp-3',
        url: 'https://images.unsplash.com/photo-1590053335552-300c0f4df576?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Pila Bautismal y Arte Virreinal',
        descripcion: 'Pila monolítica tallada en piedra berroqueña y lienzos pictóricos de la escuela cusqueña.'
      },
      {
        id: 'sp-4',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Torre del Campanario y Atrio',
        descripcion: 'Vista exterior de la torre del campanario orientada hacia la Plaza Mayor de Juli.'
      }
    ],
    descripcion: 'La Iglesia de San Pedro Apóstol (también conocida históricamente como San Pedro Mártir) es el templo matriz de Juli. Destaca por su imponente estructura de sillería de piedra blanca y alabastro, con una majestuosa planta en cruz latina. Su portada plateresca, sus campanas de bronce del siglo XVI y sus ricos retablos la convierten en un símbolo indiscutible de la evangelización en el altiplano andino.',
    historia: 'Iniciada su construcción por la Orden Dominica hacia 1565 y concluida con la llegada de la Compañía de Jesús a finales del siglo XVI, la Iglesia de San Pedro fue el epicentro de la administración pastoral y lingüística en la región del Collao. Aquí se imprimieron los primeros catecismos y vocabularios en lengua aymara a través de la célebre imprenta jesuítica de Juli en 1612.',
    importanciaCultural: 'Representa el punto culminante del mestizaje arquitectónico andino-hispánico. Declarada Patrimonio Cultural de la Nación, San Pedro preserva el legado de canteros aymaras que plasmaron símbolos locales en portadas cristianas, consolidando el título de Juli como la "Pequeña Roma de América".',
    datosImportantes: {
      ubicacion: 'Frente a la Plaza Mayor de Juli (Jr. Puno s/n)',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Patrimonio Histórico y Religioso (Templo Colonial)',
      altitud: '3,888 m.s.n.m.',
      epocaConstruccion: 'Siglo XVI (circa 1565 - 1590)',
      estadoConservacion: 'Restaurado y en activo uso litúrgico',
      acceso: 'Peatonal y vehicular desde la Plaza de Armas',
      tarifaIngreso: 'Ingreso libre (contribución voluntaria para mantenimiento)',
      horarioAtencion: 'Lunes a Domingo: 08:30 - 12:30 y 14:30 - 17:30'
    },
    coordenadas: {
      lat: -16.21639,
      lng: -69.45861
    },
    video: {
      url: 'https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s',
      titulo: 'Video Documental: Iglesia de San Pedro de Juli',
      duracion: 'Reportaje oficial',
      thumbnail: 'https://img.youtube.com/vi/-sgZ-43HbE8/hqdefault.jpg',
      descripcion: 'Recorrido audiovisual sobre la arquitectura virreinal, arte sacro y la portada de alabastro de San Pedro en Juli.'
    },
    modelo3D: {
      tipoGeometria: 'templo_san_pedro',
      titulo: 'Exploración 3D: Iglesia San Pedro de Juli',
      descripcion: 'Visualización tridimensional y arquitectónica de la Iglesia San Pedro de Juli: nave central barroca andina, campanario de piedra, reloj histórico y atrio.',
      colorPredominante: '#e2e8f0',
      imagenRender3D: sanPedro3DRender,
      dimensionesArquitectonicas: {
        largo: '29.50 m',
        ancho: '14.50 m',
        altura: '9.50 m (Nave central)',
        area: '430 m² aprox.'
      },
      detallesArquitectonicos: [
        'Largo: 29.50 m | Ancho: 14.50 m | Altura nave: 9.50 m (Área: 430 m²)',
        'Torre campanario de cantería con reloj histórico y arquería',
        'Portada monumental plateresca con arco de medio punto y doble puerta verde',
        'Construcción en el siglo XVII (1600 - 1630) sobre basamentos andinos',
        'Techos de teja andina a dos aguas, atrio empedrado y jardineras'
      ],
      puntosClaveInfografia: [
        'Dedicada a San Pedro, apóstol y primer Papa de la Iglesia Católica.',
        'Su arquitectura combina el estilo barroco andino y elementos locales.',
        'Su torre campanario y reloj son símbolos del pueblo de Juli.',
        'En su interior se conservan retablos y pinturas coloniales muy valiosas.',
        'Es el centro de las festividades patronales de San Pedro, cada 29 de junio.',
        'Es un patrimonio vivo que representa la fe e identidad de los juliños.'
      ]
    },
    recomendaciones: {
      patrimonio: [
        'No tocar los retablos dorados ni los frescos coloniales.',
        'Evitar el uso de flash en el interior para proteger los pigmentos virreinales.',
        'Caminar con cuidado sobre las losas de piedra originales.'
      ],
      costumbresLocales: [
        'Mantener el respeto y silencio durante los servicios religiosos comunitarios.',
        'Saludar cordialmente a los mayordomos y feligreses locales.'
      ],
      seguridad: [
        'Mantenerse en los circuitos señalizados de la nave y el atrio.',
        'Aclimatar el cuerpo a la altura antes de subir gradas empinadas.'
      ],
      medioAmbiente: [
        'No dejar residuos en el atrio ni en los alrededores de la Plaza Mayor.',
        'Depositar botellas y envoltorios en los tachos ecológicos habilitados.'
      ],
      espaciosReligiosos: [
        'Ingresar con vestimenta adecuada y despojarse de sombreros al entrar a la nave.',
        'Poner los teléfonos móviles en modo silencioso o vibrador.'
      ]
    },
    tags: ['Templo', 'Arquitectura Renacentista', 'Alabastro', 'Plaza Mayor', 'Jesuita', 'Dominico'],
    audioGuiaTexto: 'Bienvenido a la Iglesia de San Pedro, templo matriz de la ciudad de Juli. Construida en el siglo XVI con piedra berroqueña y alabastro blanco del altiplano, esta edificación refleja el fervor religioso y la destreza de los talladores aymaras. Admire su portada plateresca y sus dorados retablos que atestiguan el esplendor de Juli como centro cultural del virreinato.'
  },
  {
    id: 'templo-san-juan-letran',
    numero: 2,
    nombre: 'TEMPLO DE SAN JUAN DE LETRÁN',
    nombreCorto: 'San Juan de Letrán',
    subtitulo: 'Barroco mestizo y artesonado mudéjar en arenisca rojiza',
    categoria: 'templo',
    imagenPrincipal: temploRojoJuli,
    galeria: [
      {
        id: 'sjl-1',
        url: temploRojoJuli,
        titulo: 'Templo de San Juan de Letrán al Atardecer',
        descripcion: 'Fachada y muros en tonalidad rojiza con torre campanario y portada tallada bajo el cielo del altiplano.'
      },
      {
        id: 'sjl-1b',
        url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Portada de Piedra de San Juan de Letrán',
        descripcion: 'Tallado en arenisca rojiza y dorada con figuras de soles, querubines y flores andinas de cantuta.'
      },
      {
        id: 'sjl-2',
        url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Pinturas de Bernardo Bitti',
        descripcion: 'Colección pictórica manierista atribuida al renombrado sacerdote jesuita e iconógrafo Bernardo Bitti.'
      },
      {
        id: 'sjl-3',
        url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Techo Mudéjar y Artesonado',
        descripcion: 'Artesonado de vigas de madera policromadas y cuero repujado con diseños geométricos y florales.'
      },
      {
        id: 'sjl-4',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Perspectiva del Atrio y Muralla Perimetral',
        descripcion: 'Amplio atrio delimitado por arcos triunfales y muros de cantería tallada.'
      }
    ],
    descripcion: 'El Templo de San Juan de Letrán es una de las obras cumbres del barroco mestizo en América. Destaca por su cálida tonalidad en arenisca rojiza y dorada, y por su exuberante portada donde las formas renacentistas europeas se funden armoniosamente con símbolos andinos: flores de cantuta, pumas, mazorcas de maíz y representaciones del sol inti.',
    historia: 'Levantado entre finales del siglo XVI y las primeras décadas del siglo XVII bajo la dirección de la orden jesuita, San Juan de Letrán fue concebido para la catequización de la nobleza aymara local. El pintor jesuita italiano Bernardo Bitti residió en Juli e influyó directamente en la decoración pictórica de este templo.',
    importanciaCultural: 'Es reconocido internacionalmente por albergar uno de los techos artesonados mudéjares más exquisitos del Perú, complementado con cuero repujado dorado y lienzos de la escuela italiana y cusqueña. Es una prueba viva del diálogo artístico entre Europa y los Andes.',
    datosImportantes: {
      ubicacion: 'Barrio San Juan, Jr. Bolognesi con Jr. Asunción, Juli',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Monumento Histórico y Artístico (Templo Virreinal)',
      altitud: '3,892 m.s.n.m.',
      epocaConstruccion: 'Siglos XVI y XVII (1570 - 1602)',
      estadoConservacion: 'Restaurado por el Ministerio de Cultura',
      acceso: 'A pie a 3 cuadras de la Plaza Mayor',
      tarifaIngreso: 'Boleto cultural integrado o tarifa reducida para estudiantes',
      horarioAtencion: 'Martes a Domingo: 09:00 - 13:00 y 14:00 - 17:00'
    },
    coordenadas: {
      lat: -16.21361,
      lng: -69.45722
    },
    video: {
      url: 'https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s',
      titulo: 'Video Documental: Templos de Juli - San Juan de Letrán',
      duracion: 'Reportaje oficial',
      thumbnail: 'https://img.youtube.com/vi/-sgZ-43HbE8/hqdefault.jpg',
      descripcion: 'Recorrido audiovisual sobre la arquitectura virreinal, arte sacro y patrimonio colonial de los templos de Juli.'
    },
    modelo3D: {
      tipoGeometria: 'templo_san_juan',
      titulo: 'Modelo 3D e Infografía Arquitectónica: Iglesia San Juan de Juli',
      descripcion: 'Visualización tridimensional y métricas arquitectónicas de la histórica Iglesia San Juan de Juli, templo colonial del siglo XVII.',
      colorPredominante: '#b91c1c',
      imagenRender3D: sanJuanRender3D,
      dimensionesArquitectonicas: {
        largo: '29.50 m',
        ancho: '14.50 m',
        altura: '9.50 m (Nave central)',
        area: '430 m² aprox.'
      },
      detallesArquitectonicos: [
        'Largo: 29.50 m | Ancho: 14.50 m | Altura nave: 9.50 m (Área: 430 m²)',
        'Torre campanario de cantería y muros de adobe y piedra con acabado almagre rojo',
        'Portada barroca andina de piedra tallada y arquerías virreinales',
        'Construida en el siglo XVII (circa 1600 - 1630) sobre basamento andino'
      ]
    },
    recomendaciones: {
      patrimonio: [
        'No apoyarse en las molduras de arenisca rojiza, material delicado y poroso.',
        'No introducir alimentos ni bebidas azucaradas al recinto.'
      ],
      costumbresLocales: [
        'Respetar las indicaciones de los custodios del patrimonio.',
        'Apreciar con calma la iconografía andina presente en las tallas.'
      ],
      seguridad: [
        'Prestar atención a los desniveles en el piso de madera y piedra.',
        'Llevar calzado con suela de goma antideslizante.'
      ],
      medioAmbiente: [
        'No arrojar basura en las plazuelas y callejones aledaños.',
        'Contribuir al orden y limpieza del entorno monumental.'
      ],
      espaciosReligiosos: [
        'Conservar una actitud de reverencia hacia las imágenes sacras históricas.',
        'Acatar la prohibición de grabaciones comerciales sin autorización expresa.'
      ]
    },
    tags: ['Barroco Mestizo', 'Bernardo Bitti', 'Arenisca Rojiza', 'Artesonado Mudéjar', 'Aymara'],
    audioGuiaTexto: 'Nos encontramos ante el Templo de San Juan de Letrán, una joya del barroco mestizo. Fíjese en la tonalidad cálida de su arenisca y en la portada donde manos indígenas tallaron pumas, flores de cantuta y mazorcas junto a motivos europeos. En el interior, el artesonado mudéjar y los lienzos de Bernardo Bitti componen un museo vivo inigualable.'
  },
  {
    id: 'templo-museo-asuncion',
    numero: 3,
    nombre: 'TEMPLO MUSEO NUESTRA SEÑORA DE LA ASUNCIÓN',
    nombreCorto: 'Nuestra Señora de la Asunción',
    subtitulo: 'Templo Museo con vista privilegiada al Lago Titicaca',
    categoria: 'templo',
    imagenPrincipal: asuncionTemploJuli,
    galeria: [
      {
        id: 'as-1',
        url: asuncionTemploJuli,
        titulo: 'Arco Triunfal y Templo de la Asunción',
        descripcion: 'Imponente arco ceremonial de piedra tallada, torre campanario exenta y fachada colonial encalada sobre el atrio elevado.'
      },
      {
        id: 'as-1b',
        url: 'https://images.unsplash.com/photo-1548625361-12502525e7ab?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Vista Panorámica del Templo de la Asunción',
        descripcion: 'Erigido sobre una colina con una impresionante vista a las aguas azules del Lago Titicaca.'
      },
      {
        id: 'as-2',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Atrio Monumental con Arcos de Piedra',
        descripcion: 'Plataforma ceremonial con arcos triunfales y cruz atrial esculpida en granito andino.'
      },
      {
        id: 'as-3',
        url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Pinacoteca y Museo de Arte Sacro',
        descripcion: 'Salas que exhiben orfebrería litúrgica de plata, tallas madereras policromadas y lienzos virreinales.'
      },
      {
        id: 'as-4',
        url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Escultura de la Virgen de la Asunción',
        descripcion: 'Imagen patronal con finas vestiduras bordadas en hilo de oro por devotos de Juli.'
      }
    ],
    descripcion: 'El Templo de Nuestra Señora de la Asunción se alza sobre una colina que domina la bahía de Juli. Su enorme atrio abierto delimitado por muros de sillería y arcos de piedra ofrece una de las postales más emblemáticas del altiplano. Actualmente funciona como un prestigioso Templo-Museo de Arte Virreinal, exhibiendo tesoros de orfebrería, esculturas policromadas y una de las pinacotecas virreinales más completas del sur peruano.',
    historia: 'Construido inicialmente entre 1568 y 1620 por la orden dominica y enriquecido luego por los jesuitas, fue dedicado a la Virgen de la Asunción, patrona de la localidad. Su ubicación estratégica en lo alto de una terraza prehispánica integró el culto andino a las montañas (apus) con la nueva fe católica.',
    importanciaCultural: 'El museo alberga valiosas piezas de orfebrería de plata extraída de las minas virreinales de Puno y Charcas, así como pinturas de Diego de la Puente y la escuela cuzqueña. Cada 15 de agosto, es el epicentro de las festividades patronales más devotas y coloridas de Juli.',
    datosImportantes: {
      ubicacion: 'Colina de la Asunción, Barrio La Asunción, Juli',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Templo Museo de Arte Sacro y Mirador Cultural',
      altitud: '3,905 m.s.n.m.',
      epocaConstruccion: 'Siglos XVI - XVII (1568 - 1620)',
      estadoConservacion: 'Excelente, museo administrado por el Ministerio de Cultura',
      acceso: 'Subida peatonal empedrada o vía vehicular asfaltada',
      tarifaIngreso: 'Boleto general S/ 5.00, estudiantes S/ 2.00 (Tarifas referenciales)',
      horarioAtencion: 'Martes a Domingo: 09:00 - 13:00 y 14:00 - 17:30'
    },
    coordenadas: {
      lat: -16.21056,
      lng: -69.45639
    },
    video: {
      url: 'https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s',
      titulo: 'Video Documental: Templos de Juli - Nuestra Señora de la Asunción',
      duracion: 'Reportaje oficial',
      thumbnail: 'https://img.youtube.com/vi/-sgZ-43HbE8/hqdefault.jpg',
      descripcion: 'Recorrido audiovisual sobre la arquitectura virreinal, arte sacro, arco triunfal y patrimonio cultural de Juli.'
    },
    modelo3D: {
      tipoGeometria: 'templo_asuncion',
      titulo: 'Modelo 3D e Infografía: Templo Museo Nuestra Señora de la Asunción',
      descripcion: 'Visualización tridimensional, arco triunfal monumental con leones de piedra y métricas arquitectónicas oficiales del Templo Museo Nuestra Señora de la Asunción.',
      colorPredominante: '#d97706',
      imagenRender3D: asuncionRender3D,
      dimensionesArquitectonicas: {
        largo: '36.00 m',
        ancho: '18.50 m',
        altura: '10.50 m (Nave central)',
        area: '666 m²'
      },
      detallesArquitectonicos: [
        'Arco de triunfo monumental de piedra labrada',
        'Torre espadaña campanario con arcos de medio punto y campanas',
        'Esculturas de leones de piedra junto a la fuente ceremonial',
        'Letrero colonial azul y oro "Templo Museo Nuestra Señora de la Asunción"',
        'Portada renacentista andina y muros coloniales encalados'
      ]
    },
    recomendaciones: {
      patrimonio: [
        'Prohibido el uso de trípodes y flashes fotográficos dentro de las salas de pinacoteca.',
        'Mantener una distancia prudente de las vitrinas de orfebrería de plata colonial.'
      ],
      costumbresLocales: [
        'Apreciar con devoción las costumbres de las cofradías durante la fiesta de la Asunción.',
        'Comprar artesanías locales a las tejedoras ubicadas cerca al atrio.'
      ],
      seguridad: [
        'Caminar con cuidado en las terrazas exteriores y escalinatas de piedra.',
        'Protegerse de la radiación solar con gorra y bloqueador solar.'
      ],
      medioAmbiente: [
        'Respetar las áreas verdes y jardines de la colina monumental.',
        'Llevar cantimplora reutilizable para reducir plásticos de un solo uso.'
      ],
      espaciosReligiosos: [
        'Guardar silencio en la capilla principal y salas de devoción.',
        'No ingresar con mochilas voluminosas a las salas estrechas del museo.'
      ]
    },
    tags: ['Templo Museo', 'Pinacoteca', 'Mirador', 'Virgen de la Asunción', 'Orfebrería', 'Lago Titicaca'],
    audioGuiaTexto: 'Contemple la majestuosidad de Nuestra Señora de la Asunción. Situado en una terraza natural que mira fijamente hacia las aguas sagradas del Titicaca, este templo fue transformado en museo para custodiar tesoros invaluables de plata colonial, esculturas de madera de cedro y pinturas de los más grandes maestros del virreinato peruano.'
  },
  {
    id: 'templo-santa-cruz-jerusalen',
    numero: 4,
    nombre: 'TEMPLO SANTA CRUZ DE JERUSALÉN',
    nombreCorto: 'Santa Cruz de Jerusalén',
    subtitulo: 'Monumento a cielo abierto y portada barroca esculpida',
    categoria: 'templo',
    imagenPrincipal: santaCruzJerusalenJuli,
    galeria: [
      {
        id: 'scj-1',
        url: santaCruzJerusalenJuli,
        titulo: 'Templo Santa Cruz de Jerusalén y Atrio Arqueológico',
        descripcion: 'Fachada barroco mestiza con espadaña de tres vanos, portada esculpida en piedra rojiza y muro perimétrico con arco colonial.'
      },
      {
        id: 'scj-2',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Nave Central a Cielo Abierto',
        descripcion: 'Columnas y arcos de cantería pura que se conservan de pie desafiando el paso de los siglos.'
      },
      {
        id: 'scj-3',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Criptas y Catacumbas Coloniales',
        descripcion: 'Estructuras subterráneas de enterramiento utilizadas por misioneros y autoridades virreinales.'
      },
      {
        id: 'scj-4',
        url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Relieves de Soles y Sirenas',
        descripcion: 'Motivos mitológicos andinos grabados en capiteles y basamentos de piedra labrada.'
      }
    ],
    descripcion: 'El Templo Santa Cruz de Jerusalén es uno de los monumentos más sobrecogedores y poéticos del patrimonio peruano. Su estructura a cielo abierto, enmarcada por muros masivos de piedra y una fachada barroca finamente cincelada, cautiva a todo visitante. A través de sus arcos de piedra se proyecta el cielo azul y el paisaje lacustre.',
    historia: 'Edificado a finales del siglo XVI bajo la dirección jesuítica, Santa Cruz fue concebido como el más suntuoso y espacioso de los templos de Juli. Sin embargo, en 1912 un rayo impactó durante una tormenta altiplánica, provocando el desplome de su techumbre. Lejos de perder su valor, sus ruinas monumentales se consolidaron como un espacio de profunda contemplación histórica.',
    importanciaCultural: 'Presenta en su portada figuras antropomorfas y zoomorfas de una maestría insuperable: sirenas tañendo charangos, querubines con rasgos aymaras, racimos de uva y flores autóctonas. Las criptas subterráneas reflejan las prácticas funerarias de la época virreinal.',
    datosImportantes: {
      ubicacion: 'Barrio Santa Cruz, Jr. Ilave con Jr. Juli s/n',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Monumento Histórico y Arqueológico a Cielo Abierto',
      altitud: '3,885 m.s.n.m.',
      epocaConstruccion: 'Siglos XVI - XVII (1580 - 1607)',
      estadoConservacion: 'Ruinas consolidadas y puestas en valor',
      acceso: 'A pie a 4 cuadras del centro de Juli',
      tarifaIngreso: 'Ingreso libre (circuito turístico peatonal)',
      horarioAtencion: 'Acceso diurno: 08:00 - 18:00'
    },
    coordenadas: {
      lat: -16.21889,
      lng: -69.45444
    },
    video: {
      url: 'https://www.youtube.com/watch?v=-sgZ-43HbE8&t=42s',
      titulo: 'Video Documental: Templos de Juli - Santa Cruz de Jerusalén',
      duracion: 'Reportaje oficial',
      thumbnail: 'https://img.youtube.com/vi/-sgZ-43HbE8/hqdefault.jpg',
      descripcion: 'Recorrido audiovisual sobre la arquitectura virreinal, arte sacro y patrimonio colonial de los templos de Juli.'
    },
    modelo3D: {
      tipoGeometria: 'templo_santa_cruz',
      titulo: 'Modelo 3D: Arcos y Portada Abierta de Santa Cruz',
      descripcion: 'Visualización tridimensional de la volumetría de ruinas monumentales, criptas basales y arquería sin techumbre.',
      colorPredominante: '#e07a5f',
      detallesArquitectonicos: ['Arcos de medio punto', 'Relieves de sirenas y soles', 'Muros de sillería de piedra', 'Criptas subterráneas']
    },
    recomendaciones: {
      patrimonio: [
        'No escalar los muros ni apoyarse en los arcos de piedra inestables.',
        'No rayar ni realizar graffitis en las centenarias piedras labradas.',
        'Caminar únicamente por los senderos y pasarelas delimitadas.'
      ],
      costumbresLocales: [
        'Respetar el ambiente místico y de recogimiento del monumento.',
        'Valorar la memoria histórica y los relatos orales de los lugareños sobre la tormenta de 1912.'
      ],
      seguridad: [
        'Cuidar el paso cerca de las zonas de excavación y accesos a criptas.',
        'Usar calzado cómodo con buen agarre para superficies empedradas.'
      ],
      medioAmbiente: [
        'No dejar residuos ni botellas entre las piedras del monumento.',
        'Cuidar la vegetación silvestre que convive con las ruinas históricas.'
      ],
      espaciosReligiosos: [
        'Tratar con solemnidad este sitio que albergó sepulcros y sacramentos virreinales.',
        'Mantener una conducta respetuosa en todo el perímetro.'
      ]
    },
    tags: ['Ruinas Monumentales', 'Cielo Abierto', 'Sirenas Barrocas', 'Criptas', 'Historia Viva'],
    audioGuiaTexto: 'Sienta la brisa andina en el Templo de Santa Cruz de Jerusalén. Aunque la techumbre cayó tras una histórica tormenta a inicios del siglo veinte, sus muros de sillería y sus arcos de medio punto se yerguen orgullosos hacia el cielo. Admire en su frontis las singulares sirenas tocando instrumentos andinos, testimonio eterno del genio de los escultores aymaras.'
  },
  {
    id: 'cerro-san-bartolome',
    numero: 5,
    nombre: 'CERRO SAN BARTOLOMÉ',
    nombreCorto: 'Cerro San Bartolomé',
    subtitulo: 'Apu tutelar sagrado y el mirador panorámico de Juli',
    categoria: 'mirador',
    imagenPrincipal: cerroSanBartolomePanoramica,
    galeria: [
      {
        id: 'csb-1',
        url: cerroSanBartolomePanoramica,
        titulo: 'Mirador Panorámico y Cruz Sagrada',
        descripcion: 'Vista espectacular desde las escalinatas y terraza de piedra del cerro hacia los campos dorados y las aguas azules del Lago Titicaca.'
      },
      {
        id: 'csb-2',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Vista 360° de la Bahía y Cordillera',
        descripcion: 'Panorámica inigualable de la ciudad de Juli, las islas del Titicaca y los nevados de la Cordillera Real.'
      },
      {
        id: 'csb-3',
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Sendero de Ascenso y Flora Altoandina',
        descripcion: 'Camino de trekking entre ichu dorado, flores de cantuta y queñuales nativos.'
      },
      {
        id: 'csb-4',
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Atardecer Dorado sobre el Titicaca',
        descripcion: 'Espectáculo crepuscular de luces cálidas reflejadas sobre el espejo de agua más alto del mundo.'
      }
    ],
    descripcion: 'El Cerro San Bartolomé (conocido también en la tradición ancestral como Apu Pucara) es la montaña tutelar que resguarda a la ciudad de Juli. Elevándose por encima de los 4,000 metros de altitud, constituye el mirador natural por excelencia de la provincia de Chucuito, ofreciendo una vista panorámica de 360 grados que abarca toda la bahía de Juli, las penínsulas circundantes y, en días despejados, la Cordillera Real de los Andes bolivianos.',
    historia: 'Desde épocas preincaicas (culturas Pukara, Tiahuanaco y Lupaca), el cerro fue venerado como un Apu o deidad protectora. Con la evangelización colonial, se instauró la devoción al apóstol San Bartolomé en su cumbre, originando una de las peregrinaciones más multitudinarias y tradicionales de la provincia cada 24 de agosto.',
    importanciaCultural: 'Es el epicentro del sincretismo cultural andino. En su cima conviven los pagos a la Pachamama (Madre Tierra) y a los Apus con la veneración a las cruces cristianas. Ofrece a los visitantes la oportunidad de practicar senderismo ecológico, fotografía de naturaleza y observación de aves altoandinas.',
    datosImportantes: {
      ubicacion: 'Sector sur-oeste de la ciudad de Juli',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Mirador Natural, Geositio y Sitio de Peregrinación',
      altitud: '4,050 m.s.n.m.',
      epocaConstruccion: 'Sitio ceremonial milenario continuo',
      estadoConservacion: 'Entorno natural protegido y sendero señalizado',
      acceso: 'Ascenso a pie (45 a 60 minutos de caminata) o acceso vehicular parcial',
      tarifaIngreso: 'Acceso libre',
      horarioAtencion: 'Recomendado de 06:00 a 17:30 (horas de luz natural)'
    },
    coordenadas: {
      lat: -16.22500,
      lng: -69.46250
    },
    video: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      titulo: 'Ascenso y Mirador 360° del Cerro San Bartolomé',
      duracion: '3:50 min',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      descripcion: 'Ascenso al mirador del Apu tutelar y vista panorámica del Lago Sagrado.'
    },
    modelo3D: {
      tipoGeometria: 'cerro_san_bartolome',
      titulo: 'Modelo 3D: Topografía y Cumbre del Apu San Bartolomé',
      descripcion: 'Visualización tridimensional del relieve montañoso, sendero serpenteante y cumbre con la capilla del mirador.',
      colorPredominante: '#059669',
      detallesArquitectonicos: ['Cima cónica', 'Sendero de herradura', 'Capilla de cumbre', 'Mirador 360 grados']
    },
    recomendaciones: {
      patrimonio: [
        'Respetar las apachetas (montículos de piedras ceremoniales) colocados por peregrinos.',
        'No alterar las cruces devocionales ni las estructuras de la capilla en la cima.'
      ],
      costumbresLocales: [
        'Comprender y respetar los rituales de challa y pago a la tierra que realizan los comuneros.',
        'Pedir permiso al Apu en silencio antes de iniciar el ascenso.'
      ],
      seguridad: [
        'Iniciar el ascenso a ritmo pausado para prevenir el mal de altura (soroche).',
        'Llevar agua para hidratarse, abrigo cortaviento y zapatillas para trekking.',
        'Descender antes de que anochezca para evitar caídas en el sendero de piedras.'
      ],
      medioAmbiente: [
        'Regla de oro: Todo lo que sube con usted, debe bajar con usted (cero basura).',
        'No encender fogatas ni arrojar colillas de cigarrillos en los pastizales de ichu.'
      ],
      espaciosReligiosos: [
        'Guardar silencio en la capilla de cumbre y santuarios de la cruz.',
        'Mantener el orden durante las fiestas patronales de agosto.'
      ]
    },
    tags: ['Apu Tutelar', 'Mirador 360°', 'Trekking', 'Peregrinación', 'Fotografía', 'Pachamama'],
    audioGuiaTexto: 'Sube al Apu San Bartolomé, el protector ancestral de Juli. A más de cuatro mil metros de altitud, tus ojos contemplarán la inmensidad del Titicaca y las cumbres nevadas de los Andes. Respira el aire puro del altiplano y siente la energía sagrada de esta montaña donde desde hace siglos los habitantes de Juli renuevan su fe y su comunión con la naturaleza.'
  },
  {
    id: 'lago-titicaca-juli',
    numero: 6,
    nombre: 'LAGO TITICACA',
    nombreCorto: 'Lago Titicaca',
    subtitulo: 'El lago navegable más alto del mundo y sus riberas en Juli',
    categoria: 'naturaleza',
    imagenPrincipal: playaMuelleLagoTiticaca,
    galeria: [
      {
        id: 'lt-1',
        url: playaMuelleLagoTiticaca,
        titulo: 'Playa y Muelle Turístico de Juli en el Lago Titicaca',
        descripcion: 'Animada ribera del lago con botes a pedal, carpas de campistas y muelle con arco de piedra sobre las aguas sagradas.'
      },
      {
        id: 'lt-2',
        url: muelleTuristicoJuliAereo,
        titulo: 'Complejo Turístico y Muelle de Juli',
        descripcion: 'Panorámica aérea de la costanera, plaza radial con mosaicos, edificio con cúpula turquesa y el muelle internándose en el lago.'
      },
      {
        id: 'lt-3',
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Totoral y Aves Silvestres Endémicas',
        descripcion: 'Hábitat del zambullidor del Titicaca, parihuanas (flamencos andinos), gaviotas y patos silvestres.'
      },
      {
        id: 'lt-4',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Puesta de Sol sobre las Aguas Sagradas',
        descripcion: 'Colores púrpuras, dorados y anaranjados iluminando la cuna mítica de Manco Cápac y Mama Ocllo.'
      }
    ],
    descripcion: 'El Lago Titicaca, a 3,812 metros sobre el nivel del mar, es el lago navegable más alto del planeta y cuna mitológica de las civilizaciones andinas. En el litoral de Juli, el lago despliega una de sus facetas más apacibles y cautivadoras: extensas playas de arena blanca como Yacango, totorales biológicos rebosantes de avifauna y caletas donde es posible navegar en balsas tradicionales de totora.',
    historia: 'Para las culturas tiahuanacota, lupaca e inca, el Titicaca fue el origen de la creación (el Pacarina sagrado), de cuyas aguas emergió el dios Viracocha y los fundadores del Tahuantinsuyo. Juli creció como un puerto natural y enclave agrícola beneficiado por el microclima lacustre que mitiga las heladas de la puna.',
    importanciaCultural: 'El lago no solo sustenta la pesca artesanal de trucha, pejerrey y especies nativas como el carachi e ispi, sino que es un ecosistema de valor universal. Sus totorales sirven para la artesanía, alimento del ganado y techado tradicional, constituyendo un patrimonio biocultural vivo.',
    datosImportantes: {
      ubicacion: 'Litoral este y bahías costeras del distrito de Juli',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Ecosistema Lacustre, Patrimonio Natural y Sitio Ramsar',
      altitud: '3,812 m.s.n.m.',
      epocaConstruccion: 'Origen geológico terciario (Pleistoceno)',
      estadoConservacion: 'Protegido por convenios ambientales y Reserva Nacional',
      acceso: 'Fácil acceso vehicular y peatonal a las playas y orillas',
      tarifaIngreso: 'Acceso libre a playas públicas (paseos en bote con costo local)',
      horarioAtencion: 'Abierto todos los días de 07:00 a 18:00 para actividades recreativas'
    },
    coordenadas: {
      lat: -16.20833,
      lng: -69.45000
    },
    video: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      titulo: 'Navegando las Aguas Místicas del Titicaca en Juli',
      duracion: '4:20 min',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      descripcion: 'Paseo en lancha y balsa de totora por la bahía y totorales de Juli.'
    },
    modelo3D: {
      tipoGeometria: 'lago_titicaca',
      titulo: 'Modelo 3D: Balsa Tradicional de Totora y Ondas Lacustres',
      descripcion: 'Visualización tridimensional de la emblemática embarcación de totora andina con proa decorada y superficie de agua.',
      colorPredominante: '#0284c7',
      detallesArquitectonicos: ['Balsa de totora estilizada', 'Proa curvada', 'Remo tradicional', 'Ondas concéntricas del lago']
    },
    recomendaciones: {
      patrimonio: [
        'Reconocer el valor ancestral de las técnicas de tejido de totora que practican los artesanos.',
        'Apoyar el turismo vivencial y los servicios de lancheros organizados de Juli.'
      ],
      costumbresLocales: [
        'Respetar las zonas de pesca artesanal y faenas lacustres de las comunidades ribereñas.',
        'Pedir autorización respetuosa antes de fotografiar a pescadores en sus labores cotidianas.'
      ],
      seguridad: [
        'Utilizar siempre chaleco salvavidas al realizar paseos en bote o balsa de totora.',
        'Recordar que las aguas son muy frías (entre 10°C y 12°C); nadar solo en zonas playeras seguras.',
        'Cuidarse del sol con sombrero de ala ancha y lentes con protección UV.'
      ],
      medioAmbiente: [
        'Estrictamente prohibido arrojar plásticos, latas o bolsas a las aguas o playas.',
        'No perturbar la anidación del pato zambullidor ni de las parihuanas en los totorales.'
      ],
      espaciosReligiosos: [
        'Tratar con veneración este lago considerado sagrado por los pueblos originarios de los Andes.'
      ]
    },
    tags: ['Lago Titicaca', 'Balsa de Totora', 'Naturaleza', 'Playa Yacango', 'Aviturismo', 'Lago Sagrado'],
    audioGuiaTexto: 'Ante ustedes se expande el Lago Titicaca, el corazón líquido de la cosmovisión andina. Sus aguas zafiro atesoran los mitos de origen de los incas y brindan sustento a las comunidades de Juli. Respira el aire fresco, escucha el rumor de la totora y déjate maravillar por la inmensidad del lago navegable más alto de la Tierra.'
  },
  {
    id: 'chullpas-huaquina',
    numero: 7,
    nombre: 'CHULLPAS DE HUAQUINA',
    nombreCorto: 'Chullpas de Huaquina',
    subtitulo: 'Monumentos funerarios lícitos del Reino Lupaca e Inca',
    categoria: 'arqueologia',
    imagenPrincipal: chullpasHuaquinaJuli,
    galeria: [
      {
        id: 'ch-1',
        url: chullpasHuaquinaJuli,
        titulo: 'Chullpa Cilíndrica Prehispánica en Huaquina',
        descripcion: 'Antigua torre funeraria circular de piedra labrada con vano inferior, ubicada entre el bosque de eucaliptos y senderos de Huaquina.'
      },
      {
        id: 'ch-2',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Paisaje Arqueológico de Huaquina',
        descripcion: 'Conjunto de chullpas cuadrangulares y circulares sobre colinas con andenerías agrícolas.'
      },
      {
        id: 'ch-3',
        url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Detalle de la Hornacina y Vanos de Acceso',
        descripcion: 'Entrada trapezoidal baja diseñada para permitir ofrendas rituales a los ancestros venerados.'
      },
      {
        id: 'ch-4',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Vista hacia el Lago Titicaca desde las Chullpas',
        descripcion: 'Ubicación privilegiada de los entierros de los curacas mirando hacia el horizonte lacustre.'
      }
    ],
    descripcion: 'Las Chullpas de Huaquina son torres funerarias pétreas erigidas en honor a los jerarcas, curacas y sacerdotes de las etnias originarias. Construidas con bloques de piedra volcánica tallada de unión precisa, estas estructuras cilíndricas y cuadrangulares son testimonios directos de la tecnología arquitectónica prehispánica y del culto ancestral a los mallquis (antepasados momificados).',
    historia: 'Correspondientes al periodo Intermedio Tardío (Reino Lupaca de filiación aymara) y ampliadas durante la dominación incaica (siglos XIII al XV d.C.), las chullpas reflejan una profunda fe en la inmortalidad del alma. Los cuerpos eran depositados en posición fetal con ricos ajuares de cerámica, textiles finos y ofrendas de maíz y coca.',
    importanciaCultural: 'El sitio arqueológico de Huaquina evidencia el alto grado de dominio de la litoescultura y la ingeniería funeraria en la cuenca del Titicaca. Es una parada obligatoria para estudiantes y viajeros interesados en desentrañar la historia prehispánica previa a la llegada hispana.',
    datosImportantes: {
      ubicacion: 'Comunidad de Huaquina, a 3 km al sur-este de Juli',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Sitio Arqueológico y Complejo Funerario Prehispánico',
      altitud: '3,895 m.s.n.m.',
      epocaConstruccion: 'Periodo Intermedio Tardío e Inca (circa 1200 - 1532 d.C.)',
      estadoConservacion: 'Monumentos arqueológicos en proceso continuo de investigación y preservación',
      acceso: 'Vía afirmada desde Juli (10 minutos en auto o 35 minutos de caminata)',
      tarifaIngreso: 'Acceso libre (visita con respeto al sitio arqueológico)',
      horarioAtencion: 'Visitas recomendadas de 08:00 a 17:00'
    },
    coordenadas: {
      lat: -16.23000,
      lng: -69.44500
    },
    video: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      titulo: 'Misterios de las Chullpas de Huaquina en Juli',
      duracion: '3:30 min',
      thumbnail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80',
      descripcion: 'Documental sobre la ingeniería funeraria de los reinos aymaras y el culto a los ancestros.'
    },
    modelo3D: {
      tipoGeometria: 'chullpas_huaquina',
      titulo: 'Modelo 3D: Chullpa Cilíndrica Lupaca',
      descripcion: 'Reconstrucción tridimensional de la torre funeraria de cantería con base ensanchada, cúpula falsa y vano trapezoidal.',
      colorPredominante: '#78716c',
      detallesArquitectonicos: ['Cantería de piedra pulida', 'Estructura cilíndrica', 'Vano trapezoidal oriental', 'Cámara funeraria interna']
    },
    recomendaciones: {
      patrimonio: [
        'Estrictamente prohibido subirse a las chullpas o apoyarse en los dinteles de piedra.',
        'No recoger piedras, fragmentos cerámicos ni perturbar el suelo arqueológico.',
        'Respetar las delimitaciones de protección del Instituto Nacional de Cultura.'
      ],
      costumbresLocales: [
        'Respetar a los pobladores de la comunidad campesina de Huaquina.',
        'Comprar productos agrícolas y lácteos locales para apoyar la economía de la comunidad.'
      ],
      seguridad: [
        'Caminar con precaución por senderos rurales con desniveles.',
        'Llevar calzado deportivo con tracción y protección solar adecuada.'
      ],
      medioAmbiente: [
        'No abandonar envases plásticos ni papeles en el campo.',
        'No dañar los cultivos agrícolas ni las terrazas andinas vecinas.'
      ],
      espaciosReligiosos: [
        'Tratar el sitio como lo que es: un sagrado campo mortuorio de los antepasados andinos.'
      ]
    },
    tags: ['Arqueología', 'Reino Lupaca', 'Chullpas', 'Inca', 'Cultura Aymara', 'Patrimonio'],
    audioGuiaTexto: 'Observen las silenciosas Chullpas de Huaquina. En estas torres de cantería descansaban los gobernantes del Reino Lupaca, orientados hacia el oriente para recibir los primeros rayos del dios Sol. Cada piedra pulida fue tallada con paciencia milenaria, uniendo la tierra con el cielo en un homenaje eterno a la memoria de sus ancestros.'
  },
  {
    id: 'muelle-fiscal-juli',
    numero: 8,
    nombre: 'MUELLE FISCAL DE JULI',
    nombreCorto: 'Muelle Fiscal',
    subtitulo: 'Historia de la navegación a vapor en el Lago Titicaca',
    categoria: 'patrimonio',
    imagenPrincipal: muelleTuristicoJuliAereo,
    galeria: [
      {
        id: 'mf-1',
        url: muelleTuristicoJuliAereo,
        titulo: 'Complejo Turístico, Faro Mirador y Muelle de Juli',
        descripcion: 'Vista aérea del malecón con su plaza circular de mosaicos, edificio con cúpula turquesa, faro y el extenso muelle que se adentra en el Lago Titicaca.'
      },
      {
        id: 'mf-2',
        url: playaMuelleLagoTiticaca,
        titulo: 'Playa Ribereña y Embarcadero Recreativo',
        descripcion: 'Animada ribera del lago con botes a pedal, carpas de campistas y muelle con arco de piedra sobre las aguas sagradas.'
      },
      {
        id: 'mf-3',
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Embarcaciones Turísticas y Paseos Lacustres',
        descripcion: 'Punto de zarpe de lanchas hacia las playas cercanas, islas y criaderos de trucha.'
      },
      {
        id: 'mf-4',
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
        titulo: 'Caminata Crepuscular en el Malecón',
        descripcion: 'Espacio ideal para la contemplación del atardecer y la brisa fresca del Titicaca.'
      }
    ],
    descripcion: 'El Muelle Fiscal de Juli es un monumento a la memoria fluvial y comercial del altiplano peruano. Construido en la era de la navegación a vapor sobre el Lago Titicaca, este muelle de piedra y hierro sirvió como punto neurálgico para el embarque y desembarque de pasajeros, lana de alpaca, minerales y mercaderías que conectaban Puno con Bolivia.',
    historia: 'Hacia finales del siglo XIX e inicios del siglo XX, barcos de vapor históricos como el Yavarí, el Yapura y el Coya surcaban las aguas del lago más alto del mundo y recalaban en el muelle de Juli. El puerto fiscal consolidó la posición de Juli como eje aduanero y de transporte en la cuenca sur del lago.',
    importanciaCultural: 'Hoy en día, el Muelle Fiscal ha sido puesto en valor como un espacio cívico, turístico y recreativo. Es el mirador preferido de familias y viajeros para admirar el horizonte lacustre, degustar la gastronomía típica (trucha frita y kankacho) y abordar lanchas de paseo ecológico.',
    datosImportantes: {
      ubicacion: 'Extremo norte de la ribera urbana de Juli (Av. Costanera s/n)',
      distrito: 'Juli',
      provincia: 'Chucuito',
      region: 'Puno - Perú',
      tipoAtractivo: 'Patrimonio Histórico Portuario y Malecón Turístico',
      altitud: '3,814 m.s.n.m.',
      epocaConstruccion: 'Finales del siglo XIX (circa 1880 - 1910)',
      estadoConservacion: 'Restaurado con pasarelas peatonales e iluminación',
      acceso: 'Vehicular y peatonal desde la Plaza Mayor (5 minutos en mototaxi o 12 minutos a pie)',
      tarifaIngreso: 'Acceso peatonal libre',
      horarioAtencion: 'Abierto las 24 horas (horario turístico recomendado: 07:00 - 19:00)'
    },
    coordenadas: {
      lat: -16.20722,
      lng: -69.45528
    },
    video: {
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      titulo: 'El Muelle Fiscal de Juli y la Navegación en el Titicaca',
      duracion: '3:15 min',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      descripcion: 'Historia del puerto de Juli, los vapores del siglo XIX y el turismo actual.'
    },
    modelo3D: {
      tipoGeometria: 'muelle_fiscal',
      titulo: 'Modelo 3D: Muelle y Embarcadero Lacustre',
      descripcion: 'Visualización tridimensional del muelle penetrando en el agua, con pilotes de piedra, baranda de seguridad y baliza luminosa.',
      colorPredominante: '#0369a1',
      detallesArquitectonicos: ['Pasarela de piedra y madera', 'Pilotes reforzados', 'Farol portuario', 'Amarres de barcos']
    },
    recomendaciones: {
      patrimonio: [
        'Cuidar las estructuras históricas del muelle y no deteriorar las barandas protectoras.',
        'Conocer la historia de la navegación a vapor en los paneles informativos del malecón.'
      ],
      costumbresLocales: [
        'Apoyar a los guías y lancheros locales debidamente acreditados por la municipalidad.',
        'Disfrutar de la gastronomía de trucha en los restaurantes tradicionales aledaños.'
      ],
      seguridad: [
        'No correr en las orillas del muelle ni saltar al agua por el riesgo de hipotermia.',
        'Supervisar atentamente a los niños en los bordes sin baranda.',
        'Llevar abrigo cortaviento durante la tarde por el descenso de temperatura.'
      ],
      medioAmbiente: [
        'No arrojar desperdicios de comida ni empaques plásticos al agua del lago.',
        'Mantener limpios los paseos y bancas de descanso del malecón.'
      ],
      espaciosReligiosos: [
        'Respetar el entorno de paz y convivencia ciudadana que caracteriza la bahía de Juli.'
      ]
    },
    tags: ['Muelle Histórico', 'Malecón', 'Vapores del Titicaca', 'Paseos en Lancha', 'Puesta de Sol'],
    audioGuiaTexto: 'Camine sobre las maderas y piedras del Muelle Fiscal de Juli. Aquí donde hoy reposan tranquilas las barcas de pesca, en el siglo diecinueve atracaban los colosales vapores traídos pieza por pieza a lomo de mula a través de los Andes. Es la puerta abierta de Juli hacia el infinito horizonte azul del Lago Titicaca.'
  }
];
