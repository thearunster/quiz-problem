import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css'],
})
export class QuestionTextComponent implements OnInit {
  @Input() questionText: string;
  @Input() questionId: number;

  constructor() {}

  htmlDecode(str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.textContent || div.innerText;
  }

  ngOnInit(): void {
    this.questionText = this.htmlDecode(this.questionText);
  }
}
