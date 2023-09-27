import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpcallObservable = new Observable<ValidationErrors|null>( (subscriber) => {

      console.log({ email })
      if( email === 'carlos@google.com') {
        subscriber.next({
          emailTaken: true
        });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    })
    return httpcallObservable;
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   return of({
  //     emailTaken: true
  //   })
  // }

}
