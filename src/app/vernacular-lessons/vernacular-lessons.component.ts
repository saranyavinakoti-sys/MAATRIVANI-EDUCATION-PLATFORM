import { Component } from '@angular/core';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-vernacular-lessons',
  imports: [IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxBadgeComponent],
  templateUrl: './vernacular-lessons.component.html',
  styleUrls: ['./vernacular-lessons.component.scss']
})
export class VernacularLessonsComponent {}
