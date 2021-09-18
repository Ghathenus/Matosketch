import { AuthService } from './shared/services/auth.service';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './authentication/login/login.component';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule, NbMenuModule, NbSidebarModule, NbActionsComponent, NbSidebarService, NbActionsModule, NbUserModule, NbAlertModule, NbButtonModule, NbCheckboxModule, NbListModule, NbSearchModule, NbTooltipModule, NbWindowModule, NbStepperModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

import { RegisterComponent } from './register/register.component';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxLoginComponent } from './loginessay/loginessay.component';

import { CommonModule } from '@angular/common';


import { GoogleMapsModule } from '@angular/google-maps';
import { FacililistComponent } from './facililist/facililist.component';
import { MarketComponent } from './market/market.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { AgmCoreModule } from '@agm/core';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';


import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { FaccardsComponent } from './faccards/faccards.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import {MatIconModule} from '@angular/material/icon';
import { FacdetComponent } from './facdet/facdet.component';
import { PreditComponent } from './predit/predit.component';
import { ToastrModule } from 'ngx-toastr';
import { PpicsComponent } from './ppics/ppics.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { PhotouploadComponent } from './photoupload/photoupload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadvideoComponent } from './uploadvideo/uploadvideo.component';
import { PvidComponent } from './pvid/pvid.component';
import { MatSelectModule } from '@angular/material/select';

import { TimeagoModule } from 'ngx-timeago';
import { MessagingComponent } from './messaging/messaging.component';
import { UsersComponent } from './users/users.component';
import { UsercardsComponent } from './usercards/usercards.component';
import { UserdetalsComponent } from './userdetals/userdetals.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedproblemComponent } from './feedproblem/feedproblem.component';
import { VideocardsComponent } from './videocards/videocards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChattingComponent } from './chatting/chatting.component';
import { AuthGuardService } from './shared/services/auth-guard.service';









const MATERIAL_MODULES = [
  MatTabsModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
];



@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    HomeComponent,
    ListsComponent,
    MessagesComponent,

    FeedComponent,

    RegisterComponent,
    LoginComponent,

    NgxLoginComponent,

    FacililistComponent,
    MarketComponent,


    FeedComponent,
    PostComponent,
    ProfileComponent,

    FaccardsComponent,
    FacdetComponent,
    PreditComponent,

    PpicsComponent,
    PhotouploadComponent,
    UploadvideoComponent,
    PvidComponent,

    MessagingComponent,
     UsersComponent,
     UsercardsComponent,
     UserdetalsComponent,
     FeedsComponent,
     FeedproblemComponent,
     VideocardsComponent,
     ChattingComponent,




  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    MatSelectModule,
    NbStepperModule,
    NbTabsetModule,
    NgxGalleryModule,
    NbCardModule,
    GoogleMapsModule,
    NgxImageZoomModule,
    FormsModule,
    NbCardModule,
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: true,
        indexIndicatorSep: '-'
      }
    }),
    MatStepperModule,
    NbAuthModule,
    NbListModule,
    NbWindowModule.forRoot(),
    NbSearchModule,
    NbTooltipModule,

    NbAlertModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NbSidebarModule,
    MatCardModule,
    MatGridListModule,
    MATERIAL_MODULES,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    HttpClientModule,
    NbLayoutModule,
    MatIconModule,
    NbButtonModule,
    NbCheckboxModule,
    TimeagoModule,

    NbUserModule,
    NbActionsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZhnBA7u72FDVW5S21_NwcaSdVum32ego'
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'https://localhost:44352/api/Account',
              login: {
                // ...
                endpoint: '/auth/login',
              },
              register: {
                // ...
                endpoint: '/auth/register',
              },
        }),
      ],
    }),
    NgbModule,

  ],
  exports: [
    ToastrModule,
    NgxGalleryModule,
    FileUploadModule
  ],
  providers:
   [ AuthGuardService,
    AuthService,
     NbSidebarService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerService,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
