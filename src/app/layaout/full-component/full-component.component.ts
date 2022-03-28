import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.css']
})
export class FullComponentComponent implements OnInit {

  public mobileQuery: MediaQueryList;
  public opened:boolean = true;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,

  ) {
    // this.elemento.ontoggle("toggled");
     this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

 

  }


  ngOnInit(): void {
  }

}
