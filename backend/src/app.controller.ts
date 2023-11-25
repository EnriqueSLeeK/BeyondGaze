import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('search-images')
  async searchImages(@Query('query') query: string) {
    return this.appService.searchImages(query);
  }

  @Get('asset-manifest')
  async getAssetManifest(@Query('nasaId') nasaId: string) {
    return this.appService.getAssetManifest(nasaId);
  }

  @Get('asset-metadata')
  async getAssetMetadata(@Query('nasaId') nasaId: string) {
    return this.appService.getAssetMetadata(nasaId);
  }

  @Get('video-captions')
  async getVideoCaptions(@Query('nasaId') nasaId: string) {
    return this.appService.getVideoCaptions(nasaId);
  }
}