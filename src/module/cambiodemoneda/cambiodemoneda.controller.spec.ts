import { Test, TestingModule } from '@nestjs/testing';
import { CambiodemonedaController } from './cambiodemoneda.controller';
import { CambiodemonedaService } from './cambiodemoneda.service';

describe('CambiodemonedaController', () => {
  let controller: CambiodemonedaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CambiodemonedaController],
      providers: [CambiodemonedaService],
    }).compile();

    controller = module.get<CambiodemonedaController>(CambiodemonedaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
