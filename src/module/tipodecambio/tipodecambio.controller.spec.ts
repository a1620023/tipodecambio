import { Test, TestingModule } from '@nestjs/testing';
import { TipodecambioController } from './tipodecambio.controller';
import { TipodecambioService } from './tipodecambio.service';

describe('TipodecambioController', () => {
  let controller: TipodecambioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipodecambioController],
      providers: [TipodecambioService],
    }).compile();

    controller = module.get<TipodecambioController>(TipodecambioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
