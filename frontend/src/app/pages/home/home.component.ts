import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { RoutesPath } from 'src/app/core/enums/routes-path.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { BgcolorManagerService } from 'src/app/core/services/bgcolor-manager.service';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'WeatherForecast';
  backgroundColor: string;
  env = environment;

  configName: string;
  apiUrl: string;
  isProduction: boolean;
  buildOptimizer: boolean;

  constructor(
    private bgcolor: BgcolorManagerService,
    private renderer: Renderer2,
    private el: ElementRef,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    ) {  }

  ngOnInit(): void {
    this.bgcolor.getBackgroundColor().subscribe((color) => {
      this.backgroundColor = color;
      this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'background-color', color);
    });
  }

  onDestroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  handleLogout() {
    // if (!this.userService.isAuthenticated)
    //   return;
    // this.authService.logout().pipe(
    //   filter((res) => res),
    //   takeUntil(this.onDestroy$),
    // ).subscribe(() => {
      // this.userService.logout();
      this.router.navigateByUrl(RoutesPath.AUTH);
  //   })
  }

}
