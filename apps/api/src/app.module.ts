import { DynamicModule } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/intrastructure.module';

export class AppModule {
  static forRoot(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        DomainModule,
        ApplicationModule,
        InfrastructureModule.forRoot(),
      ],
    };
  }
}
