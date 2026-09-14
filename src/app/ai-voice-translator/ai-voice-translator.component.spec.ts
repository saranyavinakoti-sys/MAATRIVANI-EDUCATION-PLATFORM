import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_BANNER_DIRECTIVES, IgxButtonDirective, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent } from 'igniteui-angular';
import { AIVoiceTranslatorComponent } from './ai-voice-translator.component';

describe('AIVoiceTranslatorComponent', () => {
  let component: AIVoiceTranslatorComponent;
  let fixture: ComponentFixture<AIVoiceTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIVoiceTranslatorComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_BANNER_DIRECTIVES, IgxButtonDirective, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIVoiceTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
