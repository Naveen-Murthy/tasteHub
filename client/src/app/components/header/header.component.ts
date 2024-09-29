import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerPosition: boolean | undefined;
  isMenuActive: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme = 'light';
  }

  changeTheme(event: any) {
    if (event.target.checked) {
      this.themeService.theme = 'dark';
    } else {
      this.themeService.theme = 'light';
    }
  }

  menuIcon() {
    this.isMenuActive = !this.isMenuActive;
  }

  clickedOut(event: any) {
    if (event) {
      this.isMenuActive = false;
    }
  }
}
