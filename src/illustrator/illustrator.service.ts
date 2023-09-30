import { Injectable } from '@nestjs/common';
import { Illustrator } from './illustrator.class';
import { illustratorMock1 } from 'src/mocks/illustrators.mock';

@Injectable()
export class IllustratorService {

    private illustratorList: Illustrator[] = [illustratorMock1];

    findAll() {
        return this.illustratorList;
    }

    findIllustratorByUUID(uuid: string): Illustrator {
        for(const illustrator of this.illustratorList) {
            if( illustrator.uuid == uuid) {
                return illustrator;
            }
        }
        return null;
    }
}