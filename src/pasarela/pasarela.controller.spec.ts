import { Test, TestingModule } from '@nestjs/testing';
import { PasarelaController } from './pasarela.controller';

describe('PasarelaController', () => {
  let controller: PasarelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasarelaController],
    }).compile();

    controller = module.get<PasarelaController>(PasarelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
