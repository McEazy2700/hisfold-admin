export interface UnsplashImageUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface UnsplashTag {
  title: string;
  type: string;
}

export interface UnsplashLocation {
  city: string;
  country: string;
  name: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

export interface UnsplashImageLinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface UnsplashExif {
  aperture: string;
  exposure_time: string;
  focal_length: string;
  iso: number;
  make: string;
  model: string;
  name: string;
}

export interface UnsplashImage {
  alt_description: string;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  exif: UnsplashExif;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: UnsplashImageLinks;
  location: UnsplashLocation;
  meta: {
    index: boolean;
  };
  prompted_at: string;
  public_domain: boolean;
  slug: string;
  sponsorship: unknown;
  tags: UnsplashTag[];
  topic_submissions: NonNullable<unknown>;
  topics: unknown[];
  updated_at: string;
  urls: UnsplashImageUrls;
  user: NonNullable<unknown>;
  views: number;
  width: number;
}
