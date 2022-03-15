export interface ScreenVersion {
  id: string;
  creator: Creator;
  commit: Commit;
  image_url: string;
  thumbnails: Thumbnails;
  width: number;
  height: number;
  density_scale: number;
  source: string;
  background_color: BackgroundColor;
  links: Link[];
  layers: Layer[];
  assets: Asset[];
}

export interface Creator {
  id: string;
  email: string;
  username: string;
  emotar: string;
  avatar: string;
  last_seen: number;
}

export interface Commit {
  message: string;
  author: Author;
  color: Color;
}

export interface Author {
  id: string;
  email: string;
  username: string;
  emotar: string;
  avatar: string;
  last_seen: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Thumbnails {
  small: string;
  medium: string;
  large: string;
}

export interface BackgroundColor {
  source_id: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Link {
  rect: Rect;
  destination: Destination;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Destination {
  name: string;
  type: string;
}

export interface Layer {
  id: string;
  source_id: string;
  type: string;
  name: string;
  rect: Rect2;
  fills: Fill[];
  borders: Border[];
  opacity: number;
  blend_mode: string;
  border_radius: number;
  rotation: number;
  exportable: boolean;
}

export interface Rect2 {
  x: number;
  y: number;
  width: number;
  height: number;
  absolute: Absolute;
}

export interface Absolute {
  x: number;
  y: number;
}

export interface Fill {
  type: string;
  color: Color2;
}

export interface Color2 {
  source_id: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Border {
  thickness: number;
  position: string;
  fill: Fill2;
}

export interface Fill2 {
  type: string;
  color: Color3;
}

export interface Color3 {
  source_id: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Asset {
  layer_source_id: string;
  display_name: string;
  layer_name: string;
  contents: Content[];
}

export interface Content {
  url: string;
  format: string;
  density: number;
}
