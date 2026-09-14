import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-interactive-assessments',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxRadioGroupDirective, IgxIconComponent, IgxRadioComponent, IgxButtonDirective, IgcFormsModule, FormsModule],
  templateUrl: './interactive-assessments.component.html',
  styleUrls: ['./interactive-assessments.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InteractiveAssessmentsComponent {
  public value = '2';
  public ngModel = 5;
  public value1 = '3';
}
