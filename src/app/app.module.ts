import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
