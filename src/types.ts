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

export interface RasterLayer {
  "data-type": "raster";
  id: string;
  label?: string;
  url?: string;
  tiles: string[];
  bounds?: number[];
  minzoom?: number;
  maxzoom?: number;
  tileSize?: number;
  toggle?: boolean;
  visible?: boolean;
  "layer-type": "raster";
  paint?: RasterLayerSpecification;
  mouseEvent: MapEvent[];
}

export interface MapEvent {
  type: "click" | "mousemove" | "mouseenter" | "mouseleave";
  content: Array<{
    [key: string]: string | ((e: maplibregl.MapLayerMouseEvent) => string);
  }>;
}
