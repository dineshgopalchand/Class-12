import { ErrorHandler } from '@angular/core';
import { environment } from 'src/environments/environment';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        // console.log(error);
        if (!environment.production) {
            console.log(error);
        }
        // do something with the exception
    }
}
