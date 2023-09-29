import { v4 as uuid } from 'uuid';
import { Illustrator } from "src/illustrator/illustrator.class";

export const illustratorMock1: Illustrator = new Illustrator(
    uuid(),
    'Fulano de Tal',
    ''
);