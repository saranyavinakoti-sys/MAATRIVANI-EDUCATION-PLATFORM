import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { TeacherInsightsComponent } from './teacher-insights.component';

describe('TeacherInsightsComponent', () => {
  let component: TeacherInsightsComponent;
  let fixture: ComponentFixture<TeacherInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherInsightsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxCategoryChartModule],
      teardown: { destroyAfterEach: false }
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
