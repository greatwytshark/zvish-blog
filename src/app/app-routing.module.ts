import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsNConditionsComponent } from './pages/terms-n-conditions/terms-n-conditions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category/:category/:id', component: SingleCategoryComponent},
  {path: 'post/:id', component: SinglePostComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'terms', component: TermsNConditionsComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
