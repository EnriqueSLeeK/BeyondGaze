import { Injectable } from '@nestjs/common';

@Injectable()
export class ShareService {
  private readonly appUrl = 'https://space-sight/';

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
