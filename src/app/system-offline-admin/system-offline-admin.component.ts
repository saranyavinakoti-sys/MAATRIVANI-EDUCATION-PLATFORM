import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-system-offline-admin',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './system-offline-admin.component.html',
  styleUrls: ['./system-offline-admin.component.scss']
})
export class SystemOfflineAdminComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value?: string;
  public value1?: string;
  public northwindEmployees: EmployeesType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
