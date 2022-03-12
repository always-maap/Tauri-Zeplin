export interface Project {
  id: string;
  name: string;
  thumbnail: string;
  platform: string;
  status: string;
  created: number;
  updated: number;
  rem_preferences: RemPreferences;
  number_of_screens: number;
  number_of_components: number;
  number_of_connected_components: number;
  number_of_text_styles: number;
  number_of_colors: number;
  number_of_members: number;
  number_of_spacing_tokens: number;
}

export interface RemPreferences {
  status: string;
}
