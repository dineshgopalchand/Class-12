import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { Observable } from 'rxjs';

export class Username {
    static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {
        // console.log(control);
        const value = control.value;
        if (value.indexOf(' ') !== -1) {
            return { cannotContainsSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        const value = control.value;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (value === 'dinesh') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });
    }
}
