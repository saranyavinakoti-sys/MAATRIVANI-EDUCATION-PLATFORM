import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-authentication-registration',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxIconComponent, IgxButtonDirective, FormsModule, RouterLink],
  templateUrl: './authentication-registration.component.html',
  styleUrls: ['./authentication-registration.component.scss']
})
export class AuthenticationRegistrationComponent {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4?: string;
  public value5?: string;
  public value6?: string;
}
