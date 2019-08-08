import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './common/services/course.service';
import { DataAndEventComponent } from './data-and-event/data-and-event.component';
import { DataEvent2Component } from './data-event2/data-event2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './common/pipe/summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { DemoReusableComponent } from './demo-reusable/demo-reusable.component';
import { TableFormatComponent } from './table-format/table-format.component';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './common/directives/input-format.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { NotFoundComponent } from './default/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { ToolTipDirective } from './common/directives/tool-tip.directive';
// import {HttpModules} from '@angular/http'; // for angular 5
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataAndEventComponent,
    DataEvent2Component,
    PipeComponent,
    SummaryPipe,
    FavouriteComponent,
    DemoReusableComponent,
    TableFormatComponent,
    BasicLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactUsComponent,
    SignInComponent,
    ToDoListComponent,
    FormBuilderComponent,
    PostsComponent,
    NotFoundComponent,
    HomeComponent,
    GitFollowersComponent,
    ToolTipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    {
      provide: ErrorHandler, useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
