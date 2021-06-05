import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private_headerData = new BehaviorSubject<HeaderData>({
    title:'Ínicio',
    icon:'home',
    routeUrl:''
  })

  constructor() {}

  get haederData(): HeaderData{
    return this.private_headerData.value
  }

  set headerData(headerData:HeaderData){
    this.private_headerData.next(headerData)
  }

}
