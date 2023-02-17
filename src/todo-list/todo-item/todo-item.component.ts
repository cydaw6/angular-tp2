import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
})
export class TodoItemComponent implements OnInit {
  @Input()
  index: number;
  @Input()
  label: String;
  @Input()
  state: boolean;
  @Output()
  newTodoItemEvent = new EventEmitter<number>();

  changeItemState(): void {
    this.newTodoItemEvent.emit(this.index);
  }

  constructor() {}

  ngOnInit() {}
}
