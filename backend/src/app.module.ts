import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareService } from './share/share.service';
import { ShareController } from './share/share.controller';
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		ApiModule],

	controllers: [AppController, ShareController, ApiController],

	providers: [AppService, ShareService, ApiService],

})

export class AppModule {}
