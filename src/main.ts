import * as nunjucks from 'nunjucks';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	nunjucks.configure(join(__dirname, '..', 'views'), {
		express: app,
		watch: true,
	});

	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setViewEngine('njk');

	await app.listen(3000);
}
bootstrap();
