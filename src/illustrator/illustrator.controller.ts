import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { IllustratorService } from './illustrator.service';
import { Illustrator } from './illustrator.class';


@ApiTags("illustrator")
@Controller('illustrator')
export class IllustratorController {

    constructor(private illustratorService: IllustratorService) {}

    @Get('/all')
    @ApiResponse({
        status: 200,
        description: "Listado de ilustradores",
        type: Illustrator,
        isArray: true
    })
    getAllIllustrators() {
        return this.illustratorService.findAll();
    }

    @Get('/illustrator/:uuid')
    @ApiResponse({
        status: 200,
        description: "Ilustrador por uuid",
        type: Illustrator
    })
    getIllustratorByUUID(@Param('uuid') uuid: string): Illustrator {
        return this.illustratorService.findIllustratorByUUID(uuid);
    }
}
