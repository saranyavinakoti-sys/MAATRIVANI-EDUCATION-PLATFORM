import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxSwitchComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
import { ClassroomHubComponent } from './classroom-hub.component';

describe('ClassroomHubComponent', () => {
  let component: ClassroomHubComponent;
  let fixture: ComponentFixture<ClassroomHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomHubComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxSwitchComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
