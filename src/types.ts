export type CategoriaLugar = 'templo' | 'mirador' | 'naturaleza' | 'arqueologia' | 'patrimonio';

export interface ImagenGaleria {
  id: string;
  url: string;
  titulo: string;
  descripcion: string;
  credito?: string;
}

export interface Coordenadas {
  lat: number;
  lng: number;
}

export interface DatosImportantes {
  ubicacion: string;
  distrito: string;
  provincia: string;
  region: string;
  tipoAtractivo: string;
  altitud: string;
  epocaConstruccion: string;
  estadoConservacion: string;
  acceso: string;
  tarifaIngreso: string;
  horarioAtencion: string;
}

export interface VideoLugar {
  url: string;
  titulo: string;
  duracion?: string;
  thumbnail?: string;
  descripcion?: string;
}

export interface Modelo3DConfig {
  tipoGeometria: 
    | 'templo_san_pedro' 
    | 'templo_san_juan' 
    | 'templo_asuncion' 
    | 'templo_santa_cruz' 
    | 'cerro_san_bartolome' 
    | 'lago_titicaca' 
    | 'chullpas_huaquina' 
    | 'muelle_fiscal';
  titulo: string;
  descripcion: string;
  colorPredominante: string;
  detallesArquitectonicos: string[];
  archivoGLBPlaceholder?: string;
  imagenRender3D?: string;
  dimensionesArquitectonicas?: {
    largo: string;
    ancho: string;
    altura: string;
    area: string;
  };
  puntosClaveInfografia?: string[];
}

export interface RecomendacionesVisitante {
  patrimonio: string[];
  costumbresLocales: string[];
  seguridad: string[];
  medioAmbiente: string[];
  espaciosReligiosos: string[];
}

export interface LugarTuristico {
  id: string;
  numero: number;
  nombre: string;
  nombreCorto: string;
  subtitulo: string;
  categoria: CategoriaLugar;
  imagenPrincipal: string;
  galeria: ImagenGaleria[];
  descripcion: string;
  historia: string;
  importanciaCultural: string;
  datosImportantes: DatosImportantes;
  coordenadas: Coordenadas;
  video: VideoLugar;
  modelo3D: Modelo3DConfig;
  recomendaciones: RecomendacionesVisitante;
  tags: string[];
  audioGuiaTexto?: string;
}

export type TabNavegacion = 'inicio' | 'lugares' | 'mapa' | 'informacion';
