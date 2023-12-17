import { Test, TestingModule } from '@nestjs/testing';
import { CambiodemonedaService } from './cambiodemoneda.service';

describe('CambiodemonedaService', () => {
  let service: CambiodemonedaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CambiodemonedaService],
    }).compile();

    service = module.get<CambiodemonedaService>(CambiodemonedaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
