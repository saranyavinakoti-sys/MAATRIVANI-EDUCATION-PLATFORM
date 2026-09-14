import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxIconButtonDirective } from 'igniteui-angular';
import { VernacularLessonsComponent } from './vernacular-lessons.component';

describe('VernacularLessonsComponent', () => {
  let component: VernacularLessonsComponent;
  let fixture: ComponentFixture<VernacularLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VernacularLessonsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VernacularLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
