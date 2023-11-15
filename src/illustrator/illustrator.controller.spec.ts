import { Test, TestingModule } from '@nestjs/testing';
import { IllustratorController } from './illustrator.controller';

describe('IllustratorController', () => {
  let controller: IllustratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IllustratorController],
    }).compile();

    controller = module.get<IllustratorController>(IllustratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
