import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() cont?: number;
  @Output() changementCompteur = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  incrementer() {
    this.cont++;
    this.changementCompteur.emit({
      value: this.cont
    });
  }

  decrementer() {
    this.cont--;
    this.changementCompteur.emit({
      value: this.cont
    });
  }
}
