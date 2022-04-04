export type ArtistType = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type ImageType = {
  url: string;
  height: number;
  width: number;
};

export type TrackType = {
  album: {
    album_type: string;
    artists: Array<ArtistType>;
    available_markets: Array<string>;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<ImageType>;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  };
  artists: Array<ArtistType>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type FavoriteTracksType = {
  href: string;
  items: Array<{
    added_at: string;
    track: TrackType;
  }>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

export type AlbumType = {
  album_type: string;
  artists: Array<ArtistType>;
  available_markets: Array<string>;
  copyrights: Array<{
    text: string;
    type: string;
  }>;
  external_ids: {
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<ImageType>;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: {
    href: string;
    items: Array<{
      artists: Array<ArtistType>;
      available_markets: Array<string>;
      disc_number: number;
      duration_ms: number;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      is_local: boolean;
      name: string;
      preview_url: string;
      track_number: number;
      type: string;
      uri: string;
    }>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
  type: string;
  uri: string;
};

export type FavoriteAlbumsType = {
  href: string;
  items: Array<{
    added_at: string;
    album: AlbumType;
  }>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type PlaylistsType = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<ImageType>;
  name: string;
  owner: ArtistType;
  primary_color: string | null;
  public: string | null;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
};

export type OnePlaylistsType = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<ImageType>;
  name: string;
  owner: ArtistType;
  primary_color: string | null;
  public: string | null;
  snapshot_id: string;
  tracks: {
    href: string;
    items: Array<{
      added_at: string;
      added_by: ArtistType;
      is_local: boolean;
      track: TrackType;
    }>;
    limit: number;
    next: string | null;
    offset: string;
    previos: string | null;
    total: number;
  };
  type: string;
  uri: string;
};

export type ListOfPlaylistsType = {
  message: string;
  playlists: {
    href: string;
    items: Array<PlaylistsType>;
    limit: number;
    next: string | null;
    offset: string;
    previos: string | null;
    total: number;
  };
};

export type ListOfAlbumType = {
  albums: {
    href: string;
    items: Array<{
      id: string;
      album_type: string;
      artists: Array<{
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      images: Array<ImageType>;
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    }>;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
};
