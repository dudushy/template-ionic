import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  title = 'StorageService';

  constructor() {
    console.log(`[${this.title}#constructor]`);
  }

  set(varname: any, value: any) {
    console.log(`[${this.title}#set] ${varname}`, value);
    // console.log(`[${this.title}#set] JSON.stringify(value)`, JSON.stringify(value));
    localStorage.setItem(varname, JSON.stringify(value));
  }

  get(varname: any) {
    console.log(`[${this.title}#get] varname`, varname);
    // console.log(`[${this.title}#get] localStorage.getItem(varname)`, localStorage.getItem(varname));
    // console.log(`[${this.title}#get] JSON.parse(varname)`, JSON.parse(localStorage.getItem(varname)));
    return JSON.parse(localStorage.getItem(varname));
  }

  clear() {
    localStorage.clear();
  }
}
