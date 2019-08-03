import { AppErrors } from './app-errors';

export class NotFoundErrors extends AppErrors {
    constructor(error: Response) {
        super();
    }
}
