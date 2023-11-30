import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly apiUrl = 'https://images-api.nasa.gov';
  private readonly appUrl = 'https://space-sight/';

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

  getInstagramShareUrl(nasaId: string, caption: string): string {
    const url = `${this.appUrl}/asset-metadata?nasaId=${nasaId}`;
    return `https://www.instagram.com/sharing/?url=${encodeURIComponent(url)}&caption=${encodeURIComponent(caption)}`;
  }
  
  getTwitterShareUrl(nasaId: string, text: string): string {
    const url = `${this.appUrl}/asset-metadata?nasaId=${nasaId}`;
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  }

  getFacebookShareUrl(nasaId: string, caption: string): string {
    const url = `${this.appUrl}/asset-metadata?nasaId=${nasaId}`;
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(caption)}`;
  }

  getWhatsAppShareUrl(nasaId: string, text: string): string {
    const url = `${this.appUrl}/asset-metadata?nasaId=${nasaId}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;
  }

  getTelegramShareUrl(nasaId: string, text: string): string {
    const url = `${this.appUrl}/asset-metadata?nasaId=${nasaId}`;
    return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  }
  
}
