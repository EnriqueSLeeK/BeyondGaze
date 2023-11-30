import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ShareService } from './share/share.service';
import { ShareController } from './share/share.controller';
import { ShareModule } from './share/share.module';
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';

@Module({
  imports: [LoginModule, ApiModule, ShareModule],
  controllers: [AppController, ShareController, ApiController],
  providers: [AppService, ShareService, ApiService],
})
export class AppModule {}
