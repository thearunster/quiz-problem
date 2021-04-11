import { Component, OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'quiz-problem';
  result = '';
  questions = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions(true).subscribe((data: any[]) => {
      const processedQuestions = this.processQuestions(data);
      this.questions.push(...processedQuestions);
    });
  }

  private processQuestions(questions: any[]) {
    return questions.map((q) => ({
      ...q,
      options: [...q.incorrect_answers, q.correct_answer],
      selected: '',
    }));
  }

  updateSelection(questionId, answer) {
    this.questions[questionId].selected = answer;
    this.result = '';
  }

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      let currentQuestion = this.questions[i];
      if (currentQuestion.selected === currentQuestion.correct_answer) {
        score++;
      }
    }
    this.result = `You got ${score} question(s) correct.`;
  }
}
