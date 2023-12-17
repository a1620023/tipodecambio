import { Test, TestingModule } from '@nestjs/testing';
import { TipodecambioService } from './tipodecambio.service';

describe('TipodecambioService', () => {
  let service: TipodecambioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipodecambioService],
    }).compile();

    service = module.get<TipodecambioService>(TipodecambioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
