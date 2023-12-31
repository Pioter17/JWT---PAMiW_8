import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieFormCreatorService {
  constructor(
    private fb: FormBuilder,
  ) { }

  getMovieForm(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      director_id: [null, Validators.required],
      producer: [null, Validators.required],
      rating: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
      length: [null, [Validators.required, Validators.min(1)]],
    })
  }
}
