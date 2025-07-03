import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { CulturaComponent } from './pages/cultura/cultura.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { AgriculturaComponent } from './pages/agricultura/agricultura.component';
import { DemografiaComponent } from './pages/demografia/demografia.component';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'cultura', component: CulturaComponent },
    { path: 'turismo', component: TurismoComponent },
    { path: 'agricultura', component: AgriculturaComponent },
    { path: 'demografia', component: DemografiaComponent },
    { path: 'gastronomia', component: GastronomiaComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];



