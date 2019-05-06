import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})
export class FooComponentComponent implements OnInit {

  fooData : Foo[];
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  oFoo : Observable<Foo[]>;
  constructor(public http: HttpClient) { }

  makeRequest(): void {

    this.loading = true;
    this.o = this.http.get(' https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni');
    this.o.subscribe(this.getData);
  }
  getData = (d: Object) => {
    this.data = d;
    this.loading = false;
  }

  makeTypedRequest() : void
  {
    this.oFoo = this.http.get<Foo[]>(' https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

  wen():void
  {
    this.oFoo = this.http.get<Foo[]>(' https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

  ngOnInit() {
     this.makeTypedRequest()
  }

}
