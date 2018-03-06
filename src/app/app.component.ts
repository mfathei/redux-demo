import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.subscribe(() => {
      // console.log(this.ngRedux.getState());
      var state = this.ngRedux.getState();
      this.counter = state.counter;
    });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
