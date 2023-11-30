import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

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

  @Get('share-instagram')
  async shareInstagram(@Query('nasaId') nasaId: string, @Query('caption') caption: string, @Res() res: Response) {
    const instagramUrl = this.appService.getInstagramShareUrl(nasaId, caption);
    return res.redirect(instagramUrl);
  }
  
  @Get('share-twitter')
  async shareTwitter(@Query('nasaId') nasaId: string, @Query('text') text: string, @Res() res: Response) {
    const twitterUrl = this.appService.getTwitterShareUrl(nasaId, text);
    return res.redirect(twitterUrl);
  }

  @Get('share-facebook')
  async shareFacebook(@Query('nasaId') nasaId: string, @Query('caption') caption: string, @Res() res: Response) {
    const facebookUrl = this.appService.getFacebookShareUrl(nasaId, caption);
    return res.redirect(facebookUrl);
  }

  @Get('share-whatsapp')
  async shareWhatsApp(@Query('nasaId') nasaId: string, @Query('text') text: string, @Res() res: Response) {
    const whatsappUrl = this.appService.getWhatsAppShareUrl(nasaId, text);
    return res.redirect(whatsappUrl);
  }

  @Get('share-telegram')
  async shareTelegram(@Query('nasaId') nasaId: string, @Query('text') text: string, @Res() res: Response) {
    const telegramUrl = this.appService.getTelegramShareUrl(nasaId, text);
    return res.redirect(telegramUrl);
  }
}