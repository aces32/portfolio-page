import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:  HttpClient) { }

  public getProjects(): Observable<any>{
    return this.http.get("assets/Information/SulaimonProjects.json")
  }
}
