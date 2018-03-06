import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Map } from 'immutable';

import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @select() counter; // direct 
  // @select('counter') count; // another name 
  // @select((s: IAppState) => s.counter) count;// map function and we can use it in coplex states
  @select(s => s.get('counter')) count;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
