import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_BANNER_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ai-voice-translator',
  imports: [IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_BANNER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, FormsModule],
  templateUrl: './ai-voice-translator.component.html',
  styleUrls: ['./ai-voice-translator.component.scss']
})
export class AIVoiceTranslatorComponent {
  public listB6yeooSelectedItem?: string;
  public value = 'Johar gayan ko! Ale khun johar chalapeya...';
  public value1 = 'सभी मित्रों को नमस्कार! हम सब मिलकर आपका स्वागत करते हैं...';
}
