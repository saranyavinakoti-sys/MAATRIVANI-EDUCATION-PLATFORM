import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-classroom-hub',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxSwitchComponent, IgxAvatarComponent, FormsModule],
  templateUrl: './classroom-hub.component.html',
  styleUrls: ['./classroom-hub.component.scss']
})
export class ClassroomHubComponent {
  public listOml1tSelectedItem?: string;
  public checked = true;
  public checked1 = true;
  public checked2 = true;
}
