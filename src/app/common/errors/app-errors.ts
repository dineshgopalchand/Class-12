export class AppErrors {
    constructor(public error?: Response) {
        if (error) {
            // create a log in the serve for API developer
            console.log(error);
        }
    }
}
