import { Component, OnInit, VERSION as angularVersion } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { VERSION as materialVersion } from '@angular/material/core';
import { VERSION as cdkVersion } from '@angular/cdk';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  materialVersion = materialVersion;
  cdkVersion = cdkVersion;
  angularVersion = angularVersion

  isSmallScreen$: Observable<boolean>;

  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;

  constructor(private breakpointObserver: BreakpointObserver,
    private authorizeService: AuthorizeService) {

    this.isSmallScreen$ = breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait,])
      .pipe(map(x => x.matches),)

    let isHandset: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait]);
    let isTablet: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Tablet);
    let isWeb: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.WebLandscape, Breakpoints.WebPortrait]);
    let isPortrait: Observable<BreakpointState> = this.breakpointObserver.observe('(orientation: portrait)');
    let isLandscape: Observable<BreakpointState> = this.breakpointObserver.observe('(orientation: landscape)');
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }

  activateSomething() {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    const isMobile = this.breakpointObserver.isMatched('(max-width: 767px)');
  }
}
