import { Controller, Get, Query} from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

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

  @Get('apod')
  async getAPOD() {
    return this.appService.getAPOD();
  }
}
