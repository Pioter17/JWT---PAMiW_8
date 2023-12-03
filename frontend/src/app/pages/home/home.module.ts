import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDirectorDialogComponent } from 'src/app/core/components/add-director-dialog/add-director-dialog.component';
import { AddMovieDialogComponent } from 'src/app/core/components/add-movie-dialog/add-movie-dialog.component';
import { CitySearchComponent } from 'src/app/core/components/city-search/city-search.component';
import { ConfirmationDialogComponent } from 'src/app/core/components/confirmation-dialog/confirmation-dialog.component';
import { DisplayDirectorsComponent } from 'src/app/core/components/display-directors/display-directors.component';
import { DisplayMoviesComponent } from 'src/app/core/components/display-movies/display-movies.component';
import { DisplayWeatherComponent } from 'src/app/core/components/display-weather/display-weather.component';
import { MyInfoComponent } from 'src/app/shared/UI/my-info/my-info.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    HomeRoutingModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CitySearchComponent,
    DisplayWeatherComponent,
    DisplayMoviesComponent,
    AddMovieDialogComponent,
    ConfirmationDialogComponent,
    DisplayDirectorsComponent,
    AddDirectorDialogComponent,
    MyInfoComponent

  ],
  providers: [
    AuthService,
    UserService,    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ]
})
export class HomeModule { }
