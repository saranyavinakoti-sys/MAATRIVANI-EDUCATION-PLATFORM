import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxRadioComponent, IgxRadioGroupDirective, IgxButtonDirective, IgcFormsModule } from 'igniteui-angular';
import { InteractiveAssessmentsComponent } from './interactive-assessments.component';

describe('InteractiveAssessmentsComponent', () => {
  let component: InteractiveAssessmentsComponent;
  let fixture: ComponentFixture<InteractiveAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveAssessmentsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxRadioComponent, IgxRadioGroupDirective, IgxButtonDirective, IgcFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
