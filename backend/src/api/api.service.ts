import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {
  private readonly apiUrl = 'https://images-api.nasa.gov';

  async searchImages(query: string) {
    const url = `${this.apiUrl}/search?q=${query}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getAssetManifest(nasaId: string) {
    const url = `${this.apiUrl}/asset/${nasaId}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getAssetMetadata(nasaId: string) {
    const url = `${this.apiUrl}/metadata/${nasaId}`;
    const response = await axios.get(url);
    return response.data;
  }

  async getVideoCaptions(nasaId: string) {
    const url = `${this.apiUrl}/captions/${nasaId}`;
    const response = await axios.get(url);
    return response.data;
  }
}