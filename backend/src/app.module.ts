import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShareService } from './share/share.service';
import { ShareController } from './share/share.controller';
import { ShareModule } from './share/share.module';
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './login/entity/user.entity';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: process.env.DB_TYPE as any,
			host: process.env.PSQL_HOST,
			port: parseInt(process.env.PSQL_PORT),
			username: process.env.PSQL_USER,
			password: process.env.PSQL_PASS,
			database: process.env.PROJECT_DB,
			entities: [User],
			synchronize: true,
		}),
		AuthModule,
		ApiModule,
		ShareModule,
		LoginModule],

	controllers: [AppController, ShareController, ApiController],

	providers: [AppService, ShareService, ApiService],

})

export class AppModule {}
