import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Input() questionId: number;
  @Output() updateSelectionEvent = new EventEmitter();

  updateSelection(questionId, answer) {
    this.updateSelectionEvent.emit({ questionId, answer });
  }

  constructor() {}

  ngOnInit(): void {}
}
