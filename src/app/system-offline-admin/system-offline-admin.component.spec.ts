import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { SystemOfflineAdminComponent } from './system-offline-admin.component';

describe('SystemOfflineAdminComponent', () => {
  let component: SystemOfflineAdminComponent;
  let fixture: ComponentFixture<SystemOfflineAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemOfflineAdminComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_GRID_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemOfflineAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
