import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { singleSpaPropsSubject, SingleSpaProps } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-dash-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'micro-dashboard';

  singleSpaProps: SingleSpaProps;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    );

    console.log("authToken", this.singleSpaProps["authToken"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
