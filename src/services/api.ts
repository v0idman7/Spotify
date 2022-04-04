import axios from "axios";
import { getAuthorizeUrl } from "./auth";

export const api = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthorization = () => {
  const authorization = localStorage.getItem("Authorization");
  if (!authorization) {
    return "";
  }
  return authorization;
};

export const getUserProfile = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "me",
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getUserTracks = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "me/tracks",
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getUserAlbums = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "me/albums",
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getAlbum = async (id: string) => {
  try {
    const response = await api({
      method: "GET",
      url: `albums/${id}`,
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getPlaylist = async (id: string) => {
  try {
    const response = await api({
      method: "GET",
      url: `playlists/${id}`,
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getSearch = async (search: string) => {
  try {
    const response = await api({
      method: "GET",
      url: `search`,
      headers: {
        Authorization: getAuthorization(),
      },
      params: {
        q: `artist:${search} name:${search}`,
        type: "album,artist,track",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();

    throw new Error(error.response.message);
  }
};

export const getNewReleases = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "browse/new-releases",
      headers: {
        Authorization: getAuthorization(),
      },
      data: { country: "RU" },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();
    throw new Error(error.response.message);
  }
};

export const getFeaturedPlaylists = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "browse/featured-playlists",
      headers: {
        Authorization: getAuthorization(),
      },
      params: {
        locale: "ru_BY",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response.status === 400 || error.response.status === 401)
      window.location.href = getAuthorizeUrl();
    throw new Error(error.response.message);
  }
};

export const getRecommendations = async () => {
  try {
    const response = await api({
      method: "GET",
      url: "recommendations",
      headers: {
        Authorization: getAuthorization(),
      },
    });

    const newReleases = response.data;
    console.log(newReleases);
    return newReleases;
  } catch (error: any) {
    throw new Error(error.response.message);
  }
};
