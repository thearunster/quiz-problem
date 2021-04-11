import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizService } from './services/quiz.service';
import { QuestionComponent } from './components/question/question.component';
import { QuestionTextComponent } from './components/question-text/question-text.component';

@NgModule({
  declarations: [AppComponent, QuestionComponent, QuestionTextComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
