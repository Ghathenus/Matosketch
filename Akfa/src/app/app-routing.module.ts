import { ChattingComponent } from './chatting/chatting.component';
import { UserdetalsComponent } from './userdetals/userdetals.component';
import { UsersComponent } from './users/users.component';
import { ComponentsComponent } from './components/components.component';
import { MessagingComponent } from './messaging/messaging.component';
import { PpicsComponent } from './ppics/ppics.component';
import { RegisterComponent } from './register/register.component';
import { MarketComponent } from './market/market.component';
import { FacililistComponent } from './facililist/facililist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { NbAuthComponent, NbLoginComponent, NbLogoutComponent, NbRegisterComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

import { LoginComponent } from './authentication/login/login.component';

import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { PreditComponent } from './predit/predit.component';
import { FeedsComponent } from './feeds/feeds.component';
import {
  AuthGuardService as AuthGuard
} from'./shared/services/auth-guard.service';

const routes: Routes = [

      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: '404', component : NotFoundComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'post', component: PostComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'feed', component: FeedsComponent},


  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'messages', component: MessagesComponent },

  {path: 'login', component: NbLoginComponent},
  {path: 'vids', component: ListsComponent},

  {path: 'users/:uName', component: UserdetalsComponent},
  {path: 'messages/:uName', component: MessagingComponent },


  {path: 'chatting', component: ChattingComponent},
  {path: '**', component: ComponentsComponent, pathMatch : 'full'},

  {
    path: 'auth',
    component: NbAuthComponent,
    loadChildren: './auth/auth.module#NgxAuthModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
