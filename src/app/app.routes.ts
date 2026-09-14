import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AuthenticationRegistrationComponent } from './authentication-registration/authentication-registration.component';
import { VernacularLessonsComponent } from './vernacular-lessons/vernacular-lessons.component';
import { AIVoiceTranslatorComponent } from './ai-voice-translator/ai-voice-translator.component';
import { InteractiveAssessmentsComponent } from './interactive-assessments/interactive-assessments.component';
import { TeacherInsightsComponent } from './teacher-insights/teacher-insights.component';
import { ClassroomHubComponent } from './classroom-hub/classroom-hub.component';
import { SystemOfflineAdminComponent } from './system-offline-admin/system-offline-admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'authentication-registration', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'authentication-registration', component: AuthenticationRegistrationComponent, data: { text: 'Authentication-Registration' } },
  { path: 'vernacular-lessons', component: VernacularLessonsComponent, data: { text: 'Vernacular-Lessons' } },
  { path: 'ai-voice-translator', component: AIVoiceTranslatorComponent, data: { text: 'Aivoice-Translator' } },
  { path: 'interactive-assessments', component: InteractiveAssessmentsComponent, data: { text: 'Interactive-Assessments' } },
  { path: 'teacher-insights', component: TeacherInsightsComponent, data: { text: 'Teacher-Insights' } },
  { path: 'classroom-hub', component: ClassroomHubComponent, data: { text: 'Classroom-Hub' } },
  { path: 'system-offline-admin', component: SystemOfflineAdminComponent, data: { text: 'System-Offline-Admin' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
