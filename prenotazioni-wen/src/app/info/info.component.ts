import { Component, OnInit, Input } from '@angular/core';
import {Foo} from '../foo-component/foo.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
@Input () art:Foo;
  constructor() { }

  ngOnInit() {
  }

}
