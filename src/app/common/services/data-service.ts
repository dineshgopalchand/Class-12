import { HttpClient } from '@angular/common/http';

export class DataService {
    constructor(
        protected http: HttpClient,
        protected url: string
        ) {

    }
    getAll() {
        return this.http.get(this.url);
    }

    addData(body: any) {
        return this.http.post(this.url, body);
    }

    delete(data) {
        return this.http.delete(this.url + '/' + data.id);
    }
    update(data, body) {
        return this.http.put(this.url + '/' + data.id, body);
    }
}
