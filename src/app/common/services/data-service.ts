import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInputErrors } from '../errors/bad-input-errors';
import { NotFoundErrors } from '../errors/not-found-errors';
import { AppErrors } from '../errors/app-errors';

export class DataService {
    constructor(
        protected http: HttpClient,
        protected url: string
    ) {

    }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.errorHandler));
    }
    getAllWithParams(param: ParamsData) {
        // param = { q: 'apt'}
        // return this.http.get(this.url + '?q=Apt');
        return this.http.get(this.url, { params: param }).pipe(catchError(this.errorHandler));
    }

    addData(body: any) {
        return this.http.post(this.url, body)
            .pipe(catchError(this.errorHandler));
    }

    delete(data) {
        return this.http.delete(this.url + '/' + data.id)
            .pipe(catchError(this.errorHandler));
    }
    update(data, body) {
        return this.http.put(this.url + '/' + data.id, body)
            .pipe(catchError(this.errorHandler));
    }
    protected errorHandler = (error: Response) => {
        if (error.status === 404) {
            // console.log('Not found error');
            return throwError(new NotFoundErrors(error));
        } else
            if (error.status === 400) {
                // console.log('Bad Input Error');
                return throwError(new BadInputErrors(error));
            } else {
                // console.log(error);
                return throwError(new AppErrors(error));
            }
    }
}

export class ParamsData {
    [key: string]: any;
}
