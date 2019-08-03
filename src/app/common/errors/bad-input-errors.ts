import { AppErrors } from './app-errors';

export class BadInputErrors extends AppErrors {
    constructor(error: Response) {
        super();
    }
}
