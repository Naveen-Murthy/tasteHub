import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  isHeaderFixed: boolean = false;
  pages = new Array(10);

  @HostListener('window:scroll', ['$event'])
  public onScroll(): void {
    if (window.scrollY > 20) {
      this.isHeaderFixed = true;
    } else {
      this.isHeaderFixed = false;
    }
  }

  ngOnInit(): void {
    console.log('App Component');
  }
}
