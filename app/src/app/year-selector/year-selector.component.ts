import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.scss']
})
export class YearSelectorComponent {
	@Input() decadeList;
	@Output() notify = new EventEmitter();

	form = new FormGroup({
		decade: new FormControl(1980)
	});

}
