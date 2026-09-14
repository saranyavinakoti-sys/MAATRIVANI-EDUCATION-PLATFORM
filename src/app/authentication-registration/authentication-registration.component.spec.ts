import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_TABS_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { AuthenticationRegistrationComponent } from './authentication-registration.component';

describe('AuthenticationRegistrationComponent', () => {
  let component: AuthenticationRegistrationComponent;
  let fixture: ComponentFixture<AuthenticationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationRegistrationComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_TABS_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
