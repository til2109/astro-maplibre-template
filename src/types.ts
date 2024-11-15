import type {
  FillLayerSpecification,
  CircleLayerSpecification,
  LineLayerSpecification,
  SymbolLayerSpecification,
  RasterLayerSpecification,
} from "maplibre-gl";

export type Site = {
  NAME: string;
  EMAIL: string;
  DESCRIPTION: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

// add map interfaces here
export interface GeoJSONFeatureLayer {
  "data-type": "geojson";
  id: string;
  label?: string;
  url: string;
  toggle?: boolean;
  visible?: boolean;
  "layer-type":
    | "symbol"
    | "fill"
    | "custom"
    | "raster"
    | "line"
    | "circle"
    | "heatmap"
    | "fill-extrusion"
    | "hillshade"
    | "background";
  paint?:
    | FillLayerSpecification
    | LineLayerSpecification
    | CircleLayerSpecification
    | SymbolLayerSpecification;
  mouseEvent: MapEvent[];
}

/**
 * Raster Tile Layer
 * @see https://maplibre.org/maplibre-style-spec/sources/#raster
 **/
export interface RasterLayer {
  "data-type": "raster";
  id: string;
  label?: string;
  url?: string;
  tiles?: string[];
  bounds?: number[];
  minzoom?: number;
  maxzoom?: number;
  tileSize?: number;
  toggle?: boolean;
  visible?: boolean;
  paint?: RasterLayerSpecification;
  mouseEvent: MapEvent[];
}

/**
 * Image Layer
 * @see https://maplibre.org/maplibre-style-spec/sources/#image
 **/
export interface ImageLayer {
  "data-type": "image";
  id: string;
  label?: string;
  url: string;
  // make coordinates as an array of four coordinate pair arrays
  coordinates: [CoordinatePair, CoordinatePair, CoordinatePair, CoordinatePair];
  toggle?: boolean; // currently used in full page map map toggle
  visible?: boolean;
  mouseEvent: MapEvent[];
}

export interface VectorTileLayer {
  "data-type": "vector";
  id: string;
  label?: string;
  url?: string;
  "source-layer"?: string;
  tiles?: string[]; // array of tile urls; use in favor of url
  bounds?: number[];
  minzoom?: number;
  maxzoom?: number;
  toggle?: boolean;
  "layer-type":
    | "symbol"
    | "fill"
    | "custom"
    | "raster"
    | "line"
    | "circle"
    | "heatmap"
    | "fill-extrusion"
    | "hillshade"
    | "background";
  visible?: boolean;
  mouseEvent: MapEvent[];
  paint?:
    | FillLayerSpecification
    | LineLayerSpecification
    | CircleLayerSpecification
    | SymbolLayerSpecification;
}

type CoordinatePair = [number, number];

export interface MapEvent {
  type: "click" | "mousemove" | "mouseenter" | "mouseleave";
  content: Array<{
    [key: string]: string | ((e: maplibregl.MapLayerMouseEvent) => string);
  }>;
}
