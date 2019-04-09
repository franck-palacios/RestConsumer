import { RouterModule, Route } from "@angular/router";
//Components
import { HomeComponentComponent } from './components/home-component/home-component.component';

//List of routes 
const ROUTES = [
    {
        path: '#/',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponentComponent
    },
];
export const ROUTTING = RouterModule.forRoot(ROUTES, { useHash: true })