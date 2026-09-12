import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Modelo3DConfig } from '../types';
import sanPedro3DRenderFallback from '../assets/images/san_pedro_3d_render_1788709858353.jpg';
import { 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  RefreshCw, 
  Box, 
  Layers, 
  Eye, 
  Upload, 
  Sparkles,
  Maximize2,
  Image as ImageIcon,
  Ruler,
  Calendar,
  Info,
  CheckCircle2,
  X,
  Compass,
  MapPin
} from 'lucide-react';

interface HotspotPunto {
  id: number;
  titulo: string;
  categoria: string;
  posicion: { x: number; y: number }; // porcentajes
  resumen: string;
  detalles: string[];
}

const HOTSPOTS_SAN_PEDRO: HotspotPunto[] = [
  {
    id: 1,
    titulo: 'Datos Generales',
    categoria: 'Patrimonio Cultural',
    posicion: { x: 20, y: 22 },
    resumen: 'Plaza de Armas de Juli, Chucuito - Puno',
    detalles: [
      'Nombre: Iglesia San Pedro de Juli',
      'Ubicación: Plaza de Armas de Juli, distrito de Juli, provincia de Chucuito, región Puno.',
      'Categoría: Patrimonio Cultural de la Nación.'
    ]
  },
  {
    id: 2,
    titulo: 'Dimensiones Arquitectónicas',
    categoria: 'Métricas Oficiales',
    posicion: { x: 42, y: 16 },
    resumen: 'Largo: 29.50 m • Ancho: 14.50 m • Altura: 9.50 m',
    detalles: [
      'Largo: 29.50 m',
      'Ancho: 14.50 m',
      'Altura de la nave central: 9.50 m',
      'Área aproximada: 430 m²'
    ]
  },
  {
    id: 3,
    titulo: 'Fecha de Creación',
    categoria: 'Historia Virreinal',
    posicion: { x: 76, y: 20 },
    resumen: 'Siglo XVII (circa 1600 - 1630)',
    detalles: [
      'Construida en el siglo XVII, aproximadamente entre 1600 y 1630 durante la época virreinal española.',
      'Edificada sobre estructuras ceremoniales preexistentes de origen andino.'
    ]
  },
  {
    id: 4,
    titulo: 'Torre Campanario y Reloj Histórico',
    categoria: 'Barroco Andino',
    posicion: { x: 74, y: 44 },
    resumen: 'Torre de cantería con reloj histórico y arquería',
    detalles: [
      'Uno de los templos coloniales más antiguos del altiplano peruano.',
      'Destaca por su torre campanario de piedra, su reloj histórico, sus campanas virreinales y su valor identitario para Juli.'
    ]
  },
  {
    id: 5,
    titulo: 'Historia y Materiales',
    categoria: 'Arquitectura & Fe',
    posicion: { x: 22, y: 68 },
    resumen: 'Cantería de piedra, cal, adobe y retablos dorados',
    detalles: [
      'Edificada por órdenes religiosas con la maestría de canteros y artesanos aymaras de Juli.',
      'Empleo de materiales de la zona: piedra berroqueña, cal viva y adobe.',
      'Conserva valiosos retablos tallados, lienzos cusqueños y pilas de alabastro.'
    ]
  },
  {
    id: 6,
    titulo: '6 Cosas Que Debes Saber',
    categoria: 'Identidad Juliña',
    posicion: { x: 80, y: 72 },
    resumen: 'Claves esenciales y festividad patronal',
    detalles: [
      '1. Dedicada a San Pedro, apóstol y primer Papa de la Iglesia Católica.',
      '2. Su arquitectura combina el estilo barroco andino y elementos locales.',
      '3. Su torre campanario y reloj son símbolos del pueblo de Juli.',
      '4. En su interior se conservan retablos y pinturas coloniales muy valiosas.',
      '5. Es el centro de las festividades patronales de San Pedro, cada 29 de junio.',
      '6. Es un patrimonio vivo que representa la fe e identidad de los juliños.'
    ]
  }
];

const HOTSPOTS_SAN_JUAN: HotspotPunto[] = [
  {
    id: 1,
    titulo: '1. Datos Generales',
    categoria: 'Patrimonio Cultural',
    posicion: { x: 22, y: 16 },
    resumen: 'Plaza de Armas de Juli, Chucuito - Puno',
    detalles: [
      'Nombre: Iglesia San Juan de Juli',
      'Ubicación: Plaza de Armas de Juli, distrito de Juli, provincia de Chucuito, región Puno.',
      'Categoría: Patrimonio Cultural de la Nación.'
    ]
  },
  {
    id: 2,
    titulo: '2. Dimensiones',
    categoria: 'Métricas Oficiales',
    posicion: { x: 50, y: 12 },
    resumen: 'Largo: 29.50 m • Ancho: 14.50 m • Altura: 9.50 m',
    detalles: [
      'Largo: 29.50 m',
      'Ancho: 14.50 m',
      'Altura de la nave central: 9.50 m',
      'Área aproximada: 430 m²'
    ]
  },
  {
    id: 3,
    titulo: '3. Fecha de Creación',
    categoria: 'Historia Virreinal',
    posicion: { x: 80, y: 16 },
    resumen: 'Siglo XVII (circa 1600 - 1630)',
    detalles: [
      'Fue construida en el siglo XVII, aproximadamente entre 1600 y 1630, durante la época colonial española.',
      'Edificada sobre estructuras preexistentes de origen andino.'
    ]
  },
  {
    id: 4,
    titulo: '4. Importancia',
    categoria: 'Barroco Andino & Fe',
    posicion: { x: 82, y: 44 },
    resumen: 'Templo colonial antiguo y torre campanario de piedra',
    detalles: [
      'Es uno de los templos coloniales más antiguos del altiplano peruano.',
      'Destaca por su arquitectura barroca andina, su torre campanario de piedra, su reloj histórico y su valor religioso y cultural fundamental en la identidad y fe del pueblo de Juli.'
    ]
  },
  {
    id: 5,
    titulo: '5. Historia del Lugar',
    categoria: 'Construcción y Evangelización',
    posicion: { x: 22, y: 70 },
    resumen: 'Piedra, cal, adobe y maestros artesanos de Juli',
    detalles: [
      'La iglesia fue edificada por órdenes religiosas con el trabajo de los pobladores de Juli, utilizando materiales de la zona como piedra, cal y adobe.',
      'Ha sido testigo de la evangelización, de la vida colonial, de celebraciones religiosas y de la historia del pueblo.',
      'Se conservan valiosas obras de arte religioso y retablos de la época.'
    ]
  },
  {
    id: 6,
    titulo: '6. 6 Cosas Que Debes Saber',
    categoria: 'Identidad y Festividad Patronal',
    posicion: { x: 80, y: 74 },
    resumen: 'San Juan Bautista, 24 de junio y legado',
    detalles: [
      '1. Fue dedicada a San Juan Bautista, patrón del pueblo de Juli.',
      '2. Su arquitectura combina el estilo barroco andino con elementos locales.',
      '3. Su torre campanario es uno de los símbolos del pueblo de Juli.',
      '4. En su interior se conservan retablos y pinturas coloniales muy valiosas.',
      '5. Es el centro de las festividades patronales de San Juan, cada 24 de junio.',
      '6. Es un patrimonio vivo que representa la fe e identidad de los julinos.'
    ]
  }
];

const HOTSPOTS_ASUNCION: HotspotPunto[] = [
  {
    id: 1,
    titulo: '1. Datos Generales',
    categoria: 'Patrimonio Cultural',
    posicion: { x: 18, y: 12 },
    resumen: 'Templo Museo Nuestra Señora de la Asunción',
    detalles: [
      'Nombre: Templo Museo Nuestra Señora de la Asunción',
      'Ubicación: Comunidad de Llachón, distrito de Capachica, provincia de Puno, región Puno.',
      'Categoría: Patrimonio Cultural de la Nación.'
    ]
  },
  {
    id: 2,
    titulo: '2. Dimensiones',
    categoria: 'Métricas Oficiales',
    posicion: { x: 50, y: 14 },
    resumen: 'Largo: 36.00 m • Ancho: 18.50 m • Altura: 10.50 m • Área: 666 m²',
    detalles: [
      'Largo: 36.00 m',
      'Ancho: 18.50 m',
      'Altura de la nave central: 10.50 m',
      'Área aproximada: 666 m²'
    ]
  },
  {
    id: 3,
    titulo: '3. Fecha de Creación',
    categoria: 'Época Virreinal',
    posicion: { x: 84, y: 20 },
    resumen: 'Siglo XVI (circa 1534 - 1570)',
    detalles: [
      'Fue construida en el siglo XVI, aproximadamente entre 1534 y 1570, durante la época colonial española.',
      'Edificada sobre estructuras preexistentes de origen andino.'
    ]
  },
  {
    id: 4,
    titulo: '4. Importancia',
    categoria: 'Renacimiento Andino',
    posicion: { x: 85, y: 41 },
    resumen: 'Arco triunfal, leones de piedra y arte religioso',
    detalles: [
      'Es uno de los templos coloniales más antiguos del altiplano peruano.',
      'Destaca por su arquitectura renacentista andina, su arco triunfal, las esculturas de leones y por albergar piezas de arte religioso de gran valor histórico y cultural.'
    ]
  },
  {
    id: 5,
    titulo: '5. Historia del Lugar',
    categoria: 'Fusión Cultural & Fe',
    posicion: { x: 17, y: 62 },
    resumen: 'Fusión de creencias andinas y cristianismo',
    detalles: [
      'El templo fue levantado por los españoles con la colaboración de los pobladores indígenas, quienes utilizaron técnicas y materiales propios de la región.',
      'Su arco de ingreso y los leones de piedra representan la fusión entre las creencias andinas y el cristianismo.',
      'Ha sido testigo de la evangelización en la zona del lago Titicaca, y con el tiempo, se convirtió en un centro religioso y cultural clave para la comunidad de Llachón.'
    ]
  },
  {
    id: 6,
    titulo: '6. 6 Cosas Que Debes Saber',
    categoria: 'Símbolos y Museo',
    posicion: { x: 80, y: 79 },
    resumen: 'Arco emblemático, leones guardianes y vista al Titicaca',
    detalles: [
      '1. Su arco de ingreso es uno de los más antiguos y emblemáticos de la región.',
      '2. Los leones de piedra simbolizan protección y fortaleza espiritual.',
      '3. En su interior se conservan retablos coloniales y pinturas de la época.',
      '4. Funciona también como museo, exhibiendo piezas litúrgicas antiguas.',
      '5. Está ubicado frente al lago Titicaca, ofreciendo una vista impresionante.',
      '6. Es un importante punto turístico y patrimonio viva de la cultura puneña.'
    ]
  }
];

interface Viewer3DProps {
  config: Modelo3DConfig;
  lugarNombre: string;
}

export const Viewer3D: React.FC<Viewer3DProps> = ({ config, lugarNombre }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);

  // Mode state: 3D Render / Three.js WebGL / Architectural Metrics
  const [visualMode, setVisualMode] = useState<'render3d' | 'threejs' | 'metricas'>(
    config.imagenRender3D ? 'render3d' : 'threejs'
  );
  const [activeHotspot, setActiveHotspot] = useState<HotspotPunto | null>(null);
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [renderZoom, setRenderZoom] = useState<number>(1);
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);

  // Three.js Control states
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [cameraView, setCameraView] = useState<'perspectiva' | 'frontal' | 'lateral' | 'cenital'>('perspectiva');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [customModelLoaded, setCustomModelLoaded] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string>('');

  // Interaction tracking refs
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const touchDistanceRef = useRef<number | null>(null);

  // Generate procedural model based on attraction type
  const buildProceduralModel = (scene: THREE.Scene, type: string, isWire: boolean) => {
    // Clear previous model group
    if (modelGroupRef.current) {
      scene.remove(modelGroupRef.current);
      modelGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    const group = new THREE.Group();

    // Material builder helper
    const getMaterial = (color: number, roughness = 0.65, metalness = 0.15) => {
      return new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
        wireframe: isWire,
        flatShading: true,
      });
    };

    // Ground platform base for all models
    const platformGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.4, 32);
    const platformMat = getMaterial(0x1e293b, 0.9, 0.1);
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.2;
    platform.receiveShadow = true;
    group.add(platform);

    // Grid ring accent
    const ringGeo = new THREE.RingGeometry(3.6, 3.8, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.02;
    group.add(ring);

    switch (type) {
      case 'templo_san_pedro': {
        // Atrio empedrado base
        const atrioGeo = new THREE.BoxGeometry(4.4, 0.1, 4.6);
        const atrioMat = getMaterial(0x64748b, 0.9, 0.05);
        const atrio = new THREE.Mesh(atrioGeo, atrioMat);
        atrio.position.set(0, 0.05, 0.4);
        group.add(atrio);

        // Jardineras laterales en el atrio
        const jardinGeo = new THREE.BoxGeometry(1.1, 0.12, 1.3);
        const jardinMat = getMaterial(0x166534, 0.9);
        const jardin1 = new THREE.Mesh(jardinGeo, jardinMat);
        jardin1.position.set(-1.3, 0.08, 1.8);
        group.add(jardin1);

        const jardin2 = new THREE.Mesh(jardinGeo, jardinMat);
        jardin2.position.set(1.3, 0.08, 1.8);
        group.add(jardin2);

        // Nave central de piedra de cantería (29.50m largo x 14.50m ancho x 9.50m altura)
        const naveGeo = new THREE.BoxGeometry(2.3, 1.9, 3.8);
        const naveMat = getMaterial(0xe2d9cc, 0.85); // piedra colonial
        const nave = new THREE.Mesh(naveGeo, naveMat);
        nave.position.set(-0.2, 1.0, -0.2);
        group.add(nave);

        // Techo a dos aguas de tejas andinas terracota
        const techoGeo = new THREE.ConeGeometry(1.95, 0.95, 4);
        const techoMat = getMaterial(0x9a3412, 0.75);
        const techo = new THREE.Mesh(techoGeo, techoMat);
        techo.rotation.y = Math.PI / 4;
        techo.position.set(-0.2, 2.4, -0.2);
        techo.scale.set(1.25, 1, 2.0);
        group.add(techo);

        // Torre campanario monumental en el flanco DERECHO (San Pedro de Juli)
        const torreBaseGeo = new THREE.BoxGeometry(1.1, 3.2, 1.1);
        const torreMat = getMaterial(0xd8cbbe, 0.8);
        const torre = new THREE.Mesh(torreBaseGeo, torreMat);
        torre.position.set(1.2, 1.6, 1.2);
        group.add(torre);

        // Reloj histórico circular en la fachada frontal de la torre
        const relojGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.06, 24);
        const relojMat = getMaterial(0xffffff, 0.2, 0.3);
        const reloj = new THREE.Mesh(relojGeo, relojMat);
        reloj.rotation.x = Math.PI / 2;
        reloj.position.set(1.2, 2.3, 1.76);
        group.add(reloj);

        // Agujas del reloj histórico
        const agujaGeo = new THREE.BoxGeometry(0.04, 0.16, 0.02);
        const agujaMat = getMaterial(0x0f172a, 0.1);
        const aguja = new THREE.Mesh(agujaGeo, agujaMat);
        aguja.position.set(1.2, 2.3, 1.8);
        group.add(aguja);

        // Cuerpo superior del campanario con arcos
        const belfryGeo = new THREE.BoxGeometry(0.95, 0.9, 0.95);
        const belfry = new THREE.Mesh(belfryGeo, getMaterial(0xcbc0b2, 0.85));
        belfry.position.set(1.2, 3.65, 1.2);
        group.add(belfry);

        // Campana de bronce en el campanario
        const campanaGeo = new THREE.ConeGeometry(0.2, 0.3, 12);
        const campanaMat = getMaterial(0xd97706, 0.3, 0.7);
        const campana = new THREE.Mesh(campanaGeo, campanaMat);
        campana.position.set(1.2, 3.6, 1.2);
        group.add(campana);

        // Remate piramidal de la torre campanario
        const cupulaGeo = new THREE.ConeGeometry(0.7, 0.85, 8);
        const cupulaMat = getMaterial(0x78350f, 0.7);
        const cupula = new THREE.Mesh(cupulaGeo, cupulaMat);
        cupula.position.set(1.2, 4.5, 1.2);
        group.add(cupula);

        // Portada Monumental Plateresca central con arco
        const portadaGeo = new THREE.BoxGeometry(1.2, 1.5, 0.25);
        const portadaMat = getMaterial(0xcfbfae, 0.75);
        const portada = new THREE.Mesh(portadaGeo, portadaMat);
        portada.position.set(-0.2, 0.8, 1.75);
        group.add(portada);

        // Doble puerta verde colonial característica de San Pedro
        const puertaGeo = new THREE.BoxGeometry(0.55, 0.95, 0.08);
        const puertaMat = getMaterial(0x166534, 0.8); // Verde colonial
        const puerta = new THREE.Mesh(puertaGeo, puertaMat);
        puerta.position.set(-0.2, 0.55, 1.88);
        group.add(puerta);

        // Cruz atrial de piedra
        const cruzGeo = new THREE.BoxGeometry(0.06, 0.65, 0.06);
        const cruzMat = getMaterial(0x475569, 0.9);
        const cruz = new THREE.Mesh(cruzGeo, cruzMat);
        cruz.position.set(0, 0.45, 2.2);
        group.add(cruz);

        const cruzBrazoGeo = new THREE.BoxGeometry(0.32, 0.06, 0.06);
        const cruzBrazo = new THREE.Mesh(cruzBrazoGeo, cruzMat);
        cruzBrazo.position.set(0, 0.6, 2.2);
        group.add(cruzBrazo);
        break;
      }

      case 'templo_san_juan': {
        // Templo Rojo de San Juan de Juli - Modelo 3D Arquitectónico Colonial
        // 1. Nave central alargada de adobe y piedra con acabado almagre rojo colonial
        const naveGeo = new THREE.BoxGeometry(2.6, 2.2, 4.8);
        const naveMat = getMaterial(0xb91c1c, 0.9); // Rojo colonial vivo
        const nave = new THREE.Mesh(naveGeo, naveMat);
        nave.position.y = 1.1;
        group.add(nave);

        // Techo a dos aguas de teja andina
        const techoGeo = new THREE.ConeGeometry(2.1, 0.9, 4);
        const techoMat = getMaterial(0x78350f, 0.9);
        const techo = new THREE.Mesh(techoGeo, techoMat);
        techo.rotation.y = Math.PI / 4;
        techo.scale.set(1.1, 1, 1.8);
        techo.position.set(0, 2.65, 0);
        group.add(techo);

        // 2. Torre campanario roja a la izquierda con arcos
        const torreGeo = new THREE.BoxGeometry(1.4, 4.0, 1.4);
        const torreMat = getMaterial(0x991b1b, 0.9);
        const torre = new THREE.Mesh(torreGeo, torreMat);
        torre.position.set(-1.8, 2.0, 1.6);
        group.add(torre);

        // Campanario superior con arquería (vano de campana)
        const campanarioCuerpo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        const campanarioMat = getMaterial(0x7f1d1d, 0.95);
        const campCuerpo = new THREE.Mesh(campanarioCuerpo, campanarioMat);
        campCuerpo.position.set(-1.8, 4.4, 1.6);
        group.add(campCuerpo);

        // Cúpula o remate piramidal de la torre
        const cupulaTorre = new THREE.ConeGeometry(0.75, 0.9, 4);
        const cupulaMat = getMaterial(0x451a03, 0.9);
        const cupula = new THREE.Mesh(cupulaTorre, cupulaMat);
        cupula.rotation.y = Math.PI / 4;
        cupula.position.set(-1.8, 5.4, 1.6);
        group.add(cupula);

        // 3. Portada barroca mestiza de piedra oscura tallada
        const portalGeo = new THREE.BoxGeometry(1.5, 2.5, 0.5);
        const portalMat = getMaterial(0x292524, 0.9); // Piedra oscura tallada
        const portal = new THREE.Mesh(portalGeo, portalMat);
        portal.position.set(0, 1.25, 2.45);
        group.add(portal);

        // Puerta arqueada de madera
        const puertaGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.4, 16, 1, false, 0, Math.PI);
        const puertaMat = getMaterial(0x1c1917, 0.95);
        const puerta = new THREE.Mesh(puertaGeo, puertaMat);
        puerta.rotation.x = -Math.PI / 2;
        puerta.position.set(0, 1.1, 2.71);
        group.add(puerta);

        // Atrio de piedra y escalinatas frontales
        const atrioGeo = new THREE.BoxGeometry(4.4, 0.2, 2.2);
        const atrioMat = getMaterial(0x57534e, 0.85);
        const atrio = new THREE.Mesh(atrioGeo, atrioMat);
        atrio.position.set(-0.5, 0.1, 3.2);
        group.add(atrio);
        break;
      }

      case 'templo_asuncion': {
        // 1. Explanada y plataforma de piedra tallada
        const atrioPlataformaGeo = new THREE.BoxGeometry(5.2, 0.25, 5.0);
        const atrioPlataformaMat = getMaterial(0x57534e, 0.85);
        const atrioPlataforma = new THREE.Mesh(atrioPlataformaGeo, atrioPlataformaMat);
        atrioPlataforma.position.set(0, 0.125, 0.2);
        group.add(atrioPlataforma);

        // 2. Fuente circular de piedra en primer plano
        const fuenteBaseGeo = new THREE.CylinderGeometry(0.9, 1.0, 0.35, 24);
        const fuenteMat = getMaterial(0x78716c, 0.9);
        const fuenteBase = new THREE.Mesh(fuenteBaseGeo, fuenteMat);
        fuenteBase.position.set(0, 0.35, 1.6);
        group.add(fuenteBase);

        // Borde superior de la fuente
        const fuenteBordeGeo = new THREE.TorusGeometry(0.85, 0.08, 8, 24);
        const fuenteBorde = new THREE.Mesh(fuenteBordeGeo, fuenteMat);
        fuenteBorde.rotation.x = Math.PI / 2;
        fuenteBorde.position.set(0, 0.52, 1.6);
        group.add(fuenteBorde);

        // Agua de la fuente
        const aguaFuenteGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.08, 20);
        const aguaFuenteMat = getMaterial(0x0284c7, 0.3, 0.6);
        const aguaFuente = new THREE.Mesh(aguaFuenteGeo, aguaFuenteMat);
        aguaFuente.position.set(0, 0.48, 1.6);
        group.add(aguaFuente);

        // Chorro de agua central
        const chorroGeo = new THREE.CylinderGeometry(0.04, 0.08, 0.3, 8);
        const chorroMat = getMaterial(0x38bdf8, 0.4, 0.8);
        const chorro = new THREE.Mesh(chorroGeo, chorroMat);
        chorro.position.set(0, 0.65, 1.6);
        group.add(chorro);

        // 3. Esculturas de Leones de piedra a los costados de la fuente
        [-0.85, 0.85].forEach((xPos) => {
          // Pedestal del león
          const pedLeonGeo = new THREE.BoxGeometry(0.45, 0.35, 0.6);
          const pedLeon = new THREE.Mesh(pedLeonGeo, fuenteMat);
          pedLeon.position.set(xPos, 0.35, 1.1);
          group.add(pedLeon);

          // Cuerpo del león
          const cuerpoLeonGeo = new THREE.BoxGeometry(0.35, 0.3, 0.5);
          const leonMat = getMaterial(0xa8a29e, 0.9);
          const cuerpoLeon = new THREE.Mesh(cuerpoLeonGeo, leonMat);
          cuerpoLeon.position.set(xPos, 0.65, 1.1);
          group.add(cuerpoLeon);

          // Cabeza del león
          const cabezaLeonGeo = new THREE.SphereGeometry(0.16, 12, 10);
          const cabezaLeon = new THREE.Mesh(cabezaLeonGeo, leonMat);
          cabezaLeon.position.set(xPos, 0.82, 1.28);
          group.add(cabezaLeon);
        });

        // 4. Arco triunfal monumental de piedra labrada
        const pilarIzqGeo = new THREE.BoxGeometry(0.55, 2.6, 0.6);
        const pilarMat = getMaterial(0x78716c, 0.9);
        const pilarIzq = new THREE.Mesh(pilarIzqGeo, pilarMat);
        pilarIzq.position.set(-0.85, 1.45, 0.3);
        group.add(pilarIzq);

        const pilarDer = new THREE.Mesh(pilarIzqGeo, pilarMat);
        pilarDer.position.set(0.85, 1.45, 0.3);
        group.add(pilarDer);

        // Arco de medio punto del portal
        const arcoTriunfalGeo = new THREE.TorusGeometry(0.85, 0.28, 12, 24, Math.PI);
        const arcoTriunfal = new THREE.Mesh(arcoTriunfalGeo, pilarMat);
        arcoTriunfal.position.set(0, 2.7, 0.3);
        group.add(arcoTriunfal);

        // 5. Letrero colonial azul y oro
        const placaGeo = new THREE.BoxGeometry(1.6, 0.45, 0.12);
        const placaMat = getMaterial(0x1e3a8a, 0.85); // Azul colonial profundo
        const placa = new THREE.Mesh(placaGeo, placaMat);
        placa.position.set(0, 3.25, 0.35);
        group.add(placa);

        // Borde dorado de la placa
        const bordePlacaGeo = new THREE.BoxGeometry(1.7, 0.52, 0.08);
        const bordePlacaMat = getMaterial(0xf59e0b, 0.9); // Dorado
        const bordePlaca = new THREE.Mesh(bordePlacaGeo, bordePlacaMat);
        bordePlaca.position.set(0, 3.25, 0.32);
        group.add(bordePlaca);

        // 6. Torre espadaña campanario adosada a la izquierda
        const espadanaGeo = new THREE.BoxGeometry(1.1, 1.8, 0.5);
        const espadana = new THREE.Mesh(espadanaGeo, pilarMat);
        espadana.position.set(-1.45, 3.3, 0.3);
        group.add(espadana);

        // Arcos de las campanas en la espadaña
        [-1.7, -1.2].forEach((xBell) => {
          // Vano de campana
          const vanoCampGeo = new THREE.BoxGeometry(0.3, 0.55, 0.55);
          const vanoCampMat = getMaterial(0x1c1917, 0.95);
          const vanoCamp = new THREE.Mesh(vanoCampGeo, vanoCampMat);
          vanoCamp.position.set(xBell, 3.25, 0.3);
          group.add(vanoCamp);

          // Campana de bronce
          const campanaGeo = new THREE.ConeGeometry(0.12, 0.22, 10);
          const campanaMat = getMaterial(0xd97706, 0.85);
          const campana = new THREE.Mesh(campanaGeo, campanaMat);
          campana.rotation.x = Math.PI;
          campana.position.set(xBell, 3.35, 0.3);
          group.add(campana);
        });

        // 7. Nave del Templo Museo al fondo
        const temploFondoGeo = new THREE.BoxGeometry(3.6, 2.4, 2.2);
        const temploFondoMat = getMaterial(0xf8fafc, 0.9); // Muro blanco colonial
        const temploFondo = new THREE.Mesh(temploFondoGeo, temploFondoMat);
        temploFondo.position.set(0.4, 1.35, -1.2);
        group.add(temploFondo);

        // Zócalo de piedra del templo
        const zocaloGeo = new THREE.BoxGeometry(3.65, 0.5, 2.25);
        const zocaloMat = getMaterial(0x78716c, 0.85);
        const zocalo = new THREE.Mesh(zocaloGeo, zocaloMat);
        zocalo.position.set(0.4, 0.4, -1.2);
        group.add(zocalo);

        // Techo a dos aguas de teja colonial
        const techoFondoGeo = new THREE.ConeGeometry(2.4, 1.0, 4);
        const techoFondoMat = getMaterial(0xb45309, 0.85); // Teja terracota
        const techoFondo = new THREE.Mesh(techoFondoGeo, techoFondoMat);
        techoFondo.rotation.y = Math.PI / 4;
        techoFondo.position.set(0.4, 3.0, -1.2);
        group.add(techoFondo);

        // Portada colonial tallada del templo
        const portadaGeo = new THREE.BoxGeometry(0.8, 1.4, 0.15);
        const portadaMat = getMaterial(0xf59e0b, 0.85);
        const portada = new THREE.Mesh(portadaGeo, portadaMat);
        portada.position.set(0, 1.15, -0.05);
        group.add(portada);
        break;
      }

      case 'templo_santa_cruz': {
        // Muros de piedra a cielo abierto (ruinas monumentales)
        const muroIzqGeo = new THREE.BoxGeometry(0.4, 2.4, 4.0);
        const muroMat = getMaterial(0xc2410c, 0.8);
        const muroIzq = new THREE.Mesh(muroIzqGeo, muroMat);
        muroIzq.position.set(-1.2, 1.2, 0);
        group.add(muroIzq);

        const muroDer = new THREE.Mesh(muroIzqGeo, muroMat);
        muroDer.position.set(1.2, 1.2, 0);
        group.add(muroDer);

        // Frontispicio barroco esculpido con vano abierto
        const frontisGeo = new THREE.BoxGeometry(2.8, 3.0, 0.5);
        const frontisMat = getMaterial(0xb45309, 0.7);
        const frontis = new THREE.Mesh(frontisGeo, frontisMat);
        frontis.position.set(0, 1.5, 1.9);
        group.add(frontis);

        // Arcos interiores de cantería
        [-1.0, 0.2, 1.2].forEach((zPos) => {
          const arcoGeo = new THREE.TorusGeometry(1.1, 0.15, 8, 16, Math.PI);
          const arcoMat = getMaterial(0x78350f, 0.7);
          const arco = new THREE.Mesh(arcoGeo, arcoMat);
          arco.position.set(0, 1.7, zPos);
          group.add(arco);
        });
        break;
      }

      case 'cerro_san_bartolome': {
        // Montaña cónica estratificada
        const monteGeo = new THREE.ConeGeometry(3.2, 3.4, 16);
        const monteMat = getMaterial(0x15803d, 0.9);
        const monte = new THREE.Mesh(monteGeo, monteMat);
        monte.position.y = 1.7;
        group.add(monte);

        // Rocas y peñascos en las laderas
        const rocaGeo = new THREE.DodecahedronGeometry(0.5);
        const rocaMat = getMaterial(0x78716c, 0.9);
        [-1.2, 1.0, 0.5, -0.6].forEach((x, idx) => {
          const roca = new THREE.Mesh(rocaGeo, rocaMat);
          roca.position.set(x, 1.0 + idx * 0.4, 1.2 - idx * 0.5);
          roca.scale.set(0.8, 0.6, 0.7);
          group.add(roca);
        });

        // Capilla y mirador en la cima
        const capillaGeo = new THREE.BoxGeometry(0.6, 0.6, 0.8);
        const capillaMat = getMaterial(0xf8fafc, 0.6);
        const capilla = new THREE.Mesh(capillaGeo, capillaMat);
        capilla.position.set(0, 3.5, 0);
        group.add(capilla);

        // Cruz de cumbre
        const cruzVertGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8);
        const cruzMat = getMaterial(0xffffff, 0.4);
        const cruzVert = new THREE.Mesh(cruzVertGeo, cruzMat);
        cruzVert.position.set(0, 4.0, 0);
        group.add(cruzVert);

        const cruzHorGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.4);
        const cruzHor = new THREE.Mesh(cruzHorGeo, cruzMat);
        cruzHor.rotation.z = Math.PI / 2;
        cruzHor.position.set(0, 4.15, 0);
        group.add(cruzHor);
        break;
      }

      case 'lago_titicaca': {
        // Disco de agua lacustre
        const aguaGeo = new THREE.CylinderGeometry(3.6, 3.6, 0.2, 32);
        const aguaMat = getMaterial(0x0284c7, 0.3, 0.5);
        const agua = new THREE.Mesh(aguaGeo, aguaMat);
        agua.position.y = 0.1;
        group.add(agua);

        // Balsa tradicional de totora
        const balsaCascoGeo = new THREE.CylinderGeometry(0.3, 0.4, 2.6, 12);
        const balsaMat = getMaterial(0xd97706, 0.8);
        const balsa = new THREE.Mesh(balsaCascoGeo, balsaMat);
        balsa.rotation.x = Math.PI / 2;
        balsa.position.set(0, 0.4, 0);
        group.add(balsa);

        // Proa curvada levantada
        const proaGeo = new THREE.TorusGeometry(0.4, 0.15, 8, 16, Math.PI / 1.5);
        const proa = new THREE.Mesh(proaGeo, balsaMat);
        proa.rotation.y = Math.PI / 2;
        proa.position.set(0, 0.55, 1.25);
        group.add(proa);

        // Remo andino
        const remoGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.4);
        const remoMat = getMaterial(0x78350f, 0.8);
        const remo = new THREE.Mesh(remoGeo, remoMat);
        remo.rotation.z = 0.5;
        remo.position.set(0.6, 0.8, -0.2);
        group.add(remo);

        // Vela de totora
        const velaGeo = new THREE.PlaneGeometry(0.9, 1.2);
        const velaMat = getMaterial(0xfef3c7, 0.8);
        const vela = new THREE.Mesh(velaGeo, velaMat);
        vela.position.set(0, 1.2, 0.1);
        group.add(vela);
        break;
      }

      case 'chullpas_huaquina': {
        // Torre funeraria cilíndrica de cantería
        const chullpaGeo = new THREE.CylinderGeometry(1.2, 1.4, 3.2, 24);
        const chullpaMat = getMaterial(0x78716c, 0.9);
        const chullpa = new THREE.Mesh(chullpaGeo, chullpaMat);
        chullpa.position.y = 1.6;
        group.add(chullpa);

        // Cornisa sobresaliente superior
        const cornisaGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.3, 24);
        const cornisaMat = getMaterial(0x57534e, 0.9);
        const cornisa = new THREE.Mesh(cornisaGeo, cornisaMat);
        cornisa.position.y = 3.2;
        group.add(cornisa);

        // Cúpula / remate superior
        const cupulaGeo = new THREE.SphereGeometry(1.15, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const cupulaMat = getMaterial(0x44403c, 0.9);
        const cupula = new THREE.Mesh(cupulaGeo, cupulaMat);
        cupula.position.y = 3.25;
        group.add(cupula);

        // Vano trapezoidal bajo orientado al este
        const vanoGeo = new THREE.BoxGeometry(0.45, 0.65, 0.4);
        const vanoMat = getMaterial(0x0c0a09, 0.9);
        const vano = new THREE.Mesh(vanoGeo, vanoMat);
        vano.position.set(0, 0.45, 1.3);
        group.add(vano);

        // Chullpa secundaria menor al costado
        const chullpa2Geo = new THREE.BoxGeometry(1.1, 2.0, 1.1);
        const chullpa2 = new THREE.Mesh(chullpa2Geo, chullpaMat);
        chullpa2.position.set(-1.8, 1.0, -0.6);
        group.add(chullpa2);
        break;
      }

      case 'muelle_fiscal': {
        // Agua del lago
        const aguaGeo = new THREE.CylinderGeometry(3.6, 3.6, 0.2, 32);
        const aguaMat = getMaterial(0x0369a1, 0.3, 0.5);
        const agua = new THREE.Mesh(aguaGeo, aguaMat);
        agua.position.y = 0.1;
        group.add(agua);

        // Pasarela del muelle
        const muelleGeo = new THREE.BoxGeometry(1.0, 0.25, 4.6);
        const muelleMat = getMaterial(0xb45309, 0.8);
        const muelle = new THREE.Mesh(muelleGeo, muelleMat);
        muelle.position.set(0, 0.45, 0.2);
        group.add(muelle);

        // Pilotes de piedra y madera
        [-1.6, -0.6, 0.4, 1.4].forEach((zPos) => {
          const piloteGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.9);
          const piloteMat = getMaterial(0x475569, 0.9);
          [-0.45, 0.45].forEach((xPos) => {
            const pilote = new THREE.Mesh(piloteGeo, piloteMat);
            pilote.position.set(xPos, 0.1, zPos);
            group.add(pilote);
          });
        });

        // Baliza o farol portuario en el extremo
        const farolPosteGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2);
        const farolMat = getMaterial(0x1e293b, 0.3);
        const farol = new THREE.Mesh(farolPosteGeo, farolMat);
        farol.position.set(0, 1.05, 2.2);
        group.add(farol);

        const luzGeo = new THREE.SphereGeometry(0.12, 16, 16);
        const luzMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
        const luz = new THREE.Mesh(luzGeo, luzMat);
        luz.position.set(0, 1.65, 2.2);
        group.add(luz);
        break;
      }

      default: {
        // Geometría por defecto
        const defaultGeo = new THREE.DodecahedronGeometry(1.8, 1);
        const defaultMat = getMaterial(0x00d2ff, 0.5);
        const defaultMesh = new THREE.Mesh(defaultGeo, defaultMat);
        defaultMesh.position.y = 1.8;
        group.add(defaultMesh);
        break;
      }
    }

    modelGroupRef.current = group;
    scene.add(group);
  };

  // Setup Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 280;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(5.5, 4.5, 6.5);
    camera.lookAt(0, 1.2, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    container.replaceChildren(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7ed, 2.0);
    dirLight1.position.set(6, 10, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight2.position.set(-6, 4, -4);
    scene.add(dirLight2);

    // Build the procedural 3D model
    buildProceduralModel(scene, config.tipoGeometria, wireframe);

    // Render loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (autoRotate && modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += 0.008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [config.tipoGeometria]);

  // Update wireframe mode without rebuilding scene
  useEffect(() => {
    if (sceneRef.current) {
      buildProceduralModel(sceneRef.current, config.tipoGeometria, wireframe);
    }
  }, [wireframe, config.tipoGeometria]);

  // Touch and Mouse interaction handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;

    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    modelGroupRef.current.rotation.y += deltaX * 0.012;
    modelGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.8, modelGroupRef.current.rotation.x + deltaY * 0.008));

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    handleZoom(e.deltaY > 0 ? -0.15 : 0.15);
  };

  const handleZoom = (factor: number) => {
    if (!cameraRef.current) return;
    const currentDist = cameraRef.current.position.length();
    const newDist = Math.max(3.5, Math.min(14, currentDist - factor * 3.5));
    cameraRef.current.position.setLength(newDist);
    setZoomLevel(Number((7 / newDist).toFixed(2)));
  };

  const setViewAngle = (view: 'perspectiva' | 'frontal' | 'lateral' | 'cenital') => {
    setCameraView(view);
    if (!cameraRef.current || !modelGroupRef.current) return;

    modelGroupRef.current.rotation.set(0, 0, 0);

    switch (view) {
      case 'perspectiva':
        cameraRef.current.position.set(5.5, 4.5, 6.5);
        break;
      case 'frontal':
        cameraRef.current.position.set(0, 1.8, 8.5);
        break;
      case 'lateral':
        cameraRef.current.position.set(8.5, 2.0, 0);
        break;
      case 'cenital':
        cameraRef.current.position.set(0, 9.5, 0.1);
        break;
    }
    cameraRef.current.lookAt(0, 1.2, 0);
  };

  const resetCamera = () => {
    setViewAngle('perspectiva');
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.set(0, 0, 0);
    }
    setAutoRotate(true);
    setWireframe(false);
    setZoomLevel(1);
    setInfoMessage('Cámara restablecida');
    setTimeout(() => setInfoMessage(''), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomModelLoaded(file.name);
      setInfoMessage(`Archivo "${file.name}" seleccionado. Módulo GLB listo para renderizado.`);
      setTimeout(() => setInfoMessage(''), 4500);
    }
  };

  const imagen3D = config.imagenRender3D || sanPedro3DRenderFallback;
  const isSanPedro = config.tipoGeometria === 'templo_san_pedro';
  const isSanJuan = config.tipoGeometria === 'templo_san_juan';
  const isAsuncion = config.tipoGeometria === 'templo_asuncion';
  const currentHotspots = isAsuncion ? HOTSPOTS_ASUNCION : isSanJuan ? HOTSPOTS_SAN_JUAN : isSanPedro ? HOTSPOTS_SAN_PEDRO : [];
  const hasHotspots = currentHotspots.length > 0;
  const hasMetricas = Boolean(config.dimensionesArquitectonicas) || isSanPedro || isSanJuan || isAsuncion;
  const lugarNombreSimple = isAsuncion ? 'Templo Museo Nuestra Señora de la Asunción' : isSanJuan ? 'Iglesia San Juan de Juli' : isSanPedro ? 'Iglesia San Pedro de Juli' : lugarNombre;

  return (
    <div id="seccion-explora-3d" className="bg-slate-900/95 border border-cyan-500/30 rounded-2xl overflow-hidden shadow-xl shadow-cyan-950/40">
      {/* 3D Header with Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-inner">
            <Box className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">EXPLORA EN 3D</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">
                {visualMode === 'render3d' ? 'Render 3D HD' : visualMode === 'threejs' ? 'WebGL 360°' : 'Métricas'}
              </span>
            </div>
            <p className="text-xs text-slate-200 font-semibold truncate max-w-[220px] sm:max-w-xs">{config.titulo}</p>
          </div>
        </div>

        {/* Mode Selector Tabs & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-2">
          <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setVisualMode('render3d')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                visualMode === 'render3d'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Render 3D</span>
            </button>

            <button
              onClick={() => setVisualMode('threejs')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                visualMode === 'threejs'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Giro 360°</span>
            </button>

            {hasMetricas && (
              <button
                onClick={() => setVisualMode('metricas')}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                  visualMode === 'metricas'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>Medidas</span>
              </button>
            )}
          </div>

          {/* Three.js Quick Controls if in WebGL mode */}
          {visualMode === 'threejs' && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                title={autoRotate ? "Pausar rotación" : "Giro automático"}
                className={`p-1.5 rounded-lg border transition-all ${
                  autoRotate 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              </button>

              <button
                onClick={() => setWireframe(!wireframe)}
                title="Modo Cantería / Malla"
                className={`p-1.5 rounded-lg border transition-all ${
                  wireframe 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={resetCamera}
                title="Restablecer vista"
                className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Render 3D Controls if in render mode */}
          {visualMode === 'render3d' && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowHotspots(!showHotspots)}
                title={showHotspots ? "Ocultar marcadores" : "Mostrar marcadores"}
                className={`p-1.5 rounded-lg border transition-all text-xs flex items-center gap-1 ${
                  showHotspots
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">Puntos</span>
              </button>

              <button
                onClick={() => setIsFullscreenModal(true)}
                title="Ver Render 3D en Alta Resolución"
                className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden select-none">
        {/* Child 1: Three.js Canvas Container (Always preserved for DOM selector integrity and state persistence) */}
        <div
          ref={containerRef}
          className={`w-full h-full cursor-grab active:cursor-grabbing ${
            visualMode === 'threejs' ? 'block' : 'hidden'
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={handleWheel}
        />

        {/* Visual Mode 1: High Fidelity 3D Architectural Render */}
        {visualMode === 'render3d' && (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background 3D Render Image */}
            <div 
              className="relative w-full h-full transition-transform duration-300 flex items-center justify-center"
              style={{ transform: `scale(${renderZoom})` }}
            >
              <img
                src={imagen3D}
                alt={`Render 3D arquitectónico de ${lugarNombre}`}
                className="w-full h-full object-cover sm:object-contain object-center select-none"
                referrerPolicy="no-referrer"
              />

              {/* Architectural Hotspots (matching user infographic) */}
              {showHotspots && hasHotspots && (
                <div className="absolute inset-0 pointer-events-none">
                  {currentHotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      style={{ left: `${hotspot.posicion.x}%`, top: `${hotspot.posicion.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10"
                    >
                      <button
                        onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                        className="group relative flex items-center justify-center focus:outline-none"
                        title={hotspot.titulo}
                      >
                        {/* Pulse Ring */}
                        <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-amber-400 opacity-60"></span>
                        
                        {/* Pin Center */}
                        <span className={`relative inline-flex items-center justify-center w-6 h-6 rounded-full border-2 text-[11px] font-bold shadow-lg transition-transform group-hover:scale-110 ${
                          activeHotspot?.id === hotspot.id
                            ? 'bg-amber-400 text-slate-950 border-white ring-2 ring-amber-300'
                            : 'bg-slate-900/90 text-amber-300 border-amber-400 backdrop-blur-sm'
                        }`}>
                          {hotspot.id}
                        </span>

                        {/* Hover Chip */}
                        <span className="hidden group-hover:flex absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-950/95 text-slate-200 border border-amber-500/40 px-2 py-0.5 rounded-md text-[11px] font-medium shadow-xl z-20">
                          {hotspot.titulo}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating Quick Notice */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none z-10">
              <div className="bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cyan-500/30 text-xs text-cyan-300 shadow-lg flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="font-medium">Render 3D Arquitectónico: {lugarNombreSimple}</span>
              </div>
            </div>

            {/* Render 3D Zoom Controls */}
            <div className="absolute right-3 top-3 flex flex-col gap-1.5 z-10">
              <button
                onClick={() => setRenderZoom(Math.min(2.2, renderZoom + 0.2))}
                title="Acercar Render"
                className="w-8 h-8 rounded-lg bg-slate-900/85 backdrop-blur border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setRenderZoom(Math.max(1, renderZoom - 0.2))}
                title="Alejar Render"
                className="w-8 h-8 rounded-lg bg-slate-900/85 backdrop-blur border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              {renderZoom > 1 && (
                <button
                  onClick={() => setRenderZoom(1)}
                  title="Restablecer escala"
                  className="w-8 h-8 rounded-lg bg-slate-900/85 backdrop-blur border border-slate-700 text-cyan-400 flex items-center justify-center transition-all shadow-md text-[10px] font-bold"
                >
                  1x
                </button>
              )}
            </div>

            {/* Active Hotspot Card Overlay */}
            {activeHotspot && (
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-slate-950/95 backdrop-blur-md p-3.5 rounded-xl border border-amber-500/50 shadow-2xl z-20 animate-fade-in">
                <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">
                      {activeHotspot.id}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{activeHotspot.titulo}</h4>
                      <p className="text-[10px] text-amber-300 font-medium">{activeHotspot.categoria}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  {activeHotspot.detalles.map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
                      <p className="leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Quick Switcher Bar */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
              <button
                onClick={() => setVisualMode('threejs')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-all shadow-lg active:scale-95"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Ver Modelo Interactivo 3D</span>
              </button>
            </div>
          </div>
        )}

        {/* Visual Mode 2: Three.js Interactive Floating Controls */}
        {visualMode === 'threejs' && (
          <>
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
              <div className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30 text-[11px] text-cyan-300 shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Arrastra para rotar • Pellizca para zoom</span>
              </div>

              {infoMessage && (
                <div className="bg-cyan-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-400 text-[11px] text-cyan-200 shadow-lg animate-fade-in">
                  {infoMessage}
                </div>
              )}
            </div>

            {/* Zoom Controls */}
            <div className="absolute right-3 top-3 flex flex-col gap-1.5">
              <button
                onClick={() => handleZoom(0.25)}
                title="Acercar (Zoom In)"
                className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(-0.25)}
                title="Alejar (Zoom Out)"
                className="w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
            </div>

            {/* Preset Angle Buttons */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1">
              <div className="flex items-center gap-1 bg-slate-900/85 backdrop-blur-md p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setViewAngle('perspectiva')}
                  className={`px-2 py-1 text-[10px] font-semibold rounded ${
                    cameraView === 'perspectiva' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3D
                </button>
                <button
                  onClick={() => setViewAngle('frontal')}
                  className={`px-2 py-1 text-[10px] font-semibold rounded ${
                    cameraView === 'frontal' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Frontal
                </button>
                <button
                  onClick={() => setViewAngle('lateral')}
                  className={`px-2 py-1 text-[10px] font-semibold rounded ${
                    cameraView === 'lateral' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lateral
                </button>
                <button
                  onClick={() => setViewAngle('cenital')}
                  className={`px-2 py-1 text-[10px] font-semibold rounded ${
                    cameraView === 'cenital' ? 'bg-cyan-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Planta
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVisualMode('render3d')}
                  className="px-2.5 py-1 text-[10px] font-semibold rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-sm"
                >
                  Ver Render 3D
                </button>
                <span className="text-[10px] text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
                  Zoom: {Math.round(zoomLevel * 100)}%
                </span>
              </div>
            </div>
          </>
        )}

        {/* Visual Mode 3: Architectural Infographic Dashboard */}
        {visualMode === 'metricas' && hasMetricas && (
          <div className="w-full h-full p-4 sm:p-5 overflow-y-auto bg-slate-950/95 text-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Ruler className="w-4 h-4" />
                <h3 className="text-xs font-bold uppercase tracking-wider">Dimensiones e Información Oficial: {lugarNombreSimple}</h3>
              </div>
              <button
                onClick={() => setVisualMode('render3d')}
                className="text-xs text-cyan-300 hover:underline flex items-center gap-1"
              >
                <span>Volver al Render 3D</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metrics Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3 text-center shadow-md">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Largo</span>
                <p className="text-base sm:text-lg font-bold text-cyan-300 mt-0.5">
                  {config.dimensionesArquitectonicas?.largo || '29.50 m'}
                </p>
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3 text-center shadow-md">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Ancho</span>
                <p className="text-base sm:text-lg font-bold text-cyan-300 mt-0.5">
                  {config.dimensionesArquitectonicas?.ancho || '14.50 m'}
                </p>
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3 text-center shadow-md">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Altura Nave</span>
                <p className="text-base sm:text-lg font-bold text-amber-300 mt-0.5">
                  {config.dimensionesArquitectonicas?.altura || '9.50 m'}
                </p>
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/20 rounded-xl p-3 text-center shadow-md">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Área Aprox.</span>
                <p className="text-base sm:text-lg font-bold text-emerald-300 mt-0.5">
                  {config.dimensionesArquitectonicas?.area || '430 m²'}
                </p>
              </div>
            </div>

            {/* Historical Details */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  Fecha de Construcción: {isAsuncion ? 'Siglo XVI (aprox. 1534 - 1570)' : isSanJuan ? 'Siglo XVII (aprox. 1600 - 1630)' : 'Siglo XVI - XVII'}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {isAsuncion
                  ? 'El templo fue levantado por los españoles con la colaboración de los pobladores indígenas, quienes utilizaron técnicas y materiales propios de la región. Su arco de ingreso y los leones de piedra representan la fusión entre las creencias andinas y el cristianismo. Ha sido testigo de la evangelización en la zona del lago Titicaca, y con el tiempo, se convirtió en un centro religioso y cultural clave para la comunidad de Llachón.'
                  : isSanJuan
                  ? 'La iglesia fue edificada por órdenes religiosas con el trabajo de los pobladores de Juli, utilizando materiales de la zona como piedra, cal y adobe. Ha sido testigo de la evangelización, de la vida colonial, de celebraciones religiosas y de la historia de Juli.'
                  : 'Erigida durante la época virreinal española sobre basamentos preexistentes de origen andino, fusionando técnicas de cantería aymara con el barroco colonial.'}
              </p>
            </div>

            {/* 6 Cosas que debes saber */}
            {currentHotspots.length >= 6 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>6 Cosas Que Debes Saber de {lugarNombreSimple}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentHotspots[5].detalles.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Model Information & Architectural Specs Strip */}
      <div className="p-3.5 bg-slate-950/70 border-t border-slate-800/80 space-y-2.5">
        <div className="flex items-start justify-between gap-3 text-xs">
          <div>
            <p className="text-slate-300 font-medium leading-relaxed">{config.descripcion}</p>
            
            {/* Dimension badges if available */}
            {config.dimensionesArquitectonicas && (
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-medium">
                  <Ruler className="w-3 h-3 text-cyan-400" />
                  <span>Largo: {config.dimensionesArquitectonicas.largo}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-medium">
                  <Ruler className="w-3 h-3 text-cyan-400" />
                  <span>Ancho: {config.dimensionesArquitectonicas.ancho}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-500/40 text-amber-300 font-medium">
                  <span>Altura: {config.dimensionesArquitectonicas.altura}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-medium">
                  <span>Superficie: {config.dimensionesArquitectonicas.area}</span>
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mt-2">
              {config.detallesArquitectonicos.map((detalle, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-cyan-300"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  {detalle}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* GLB/GLTF Slot clearly identified */}
        <div className="mt-2 pt-2 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-dashed border-cyan-500/25">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-[11px] font-semibold text-slate-200">
                Ranura de archivo 3D: <span className="text-cyan-300 font-mono">GLB / GLTF</span>
              </p>
              <p className="text-[10px] text-slate-400">
                {customModelLoaded 
                  ? `Archivo cargado: ${customModelLoaded}` 
                  : 'Espacio preparado para integrar escaneo fotogramétrico o gemelo digital 3D de Juli.'}
              </p>
            </div>
          </div>

          <label className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-medium cursor-pointer transition-all shrink-0 active:scale-95">
            <Upload className="w-3.5 h-3.5" />
            <span>Cargar .GLB</span>
            <input 
              type="file" 
              accept=".glb,.gltf" 
              onChange={handleFileUpload} 
              className="hidden" 
            />
          </label>
        </div>
      </div>

      {/* High Definition Fullscreen Modal for 3D Render */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Render 3D de Alta Resolución • {config.titulo}
              </h3>
            </div>
            <button
              onClick={() => setIsFullscreenModal(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative w-full max-w-5xl flex-1 my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-slate-800">
            <img
              src={imagen3D}
              alt="Render 3D en pantalla completa"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full max-w-5xl flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>Visualización arquitectónica 3D de {lugarNombreSimple}</span>
            <button
              onClick={() => setIsFullscreenModal(false)}
              className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

