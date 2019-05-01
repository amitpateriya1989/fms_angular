import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
  })
export class SessionStorage {
    public storage: any;

    public constructor() { }
}
