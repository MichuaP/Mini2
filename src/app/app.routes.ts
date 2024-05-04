import { Routes } from '@angular/router';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reportes/reportes.component';

export const routes: Routes = [
    { path:'regCitas', component: RegistroCitasComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'reportes', component: ReportesComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];
