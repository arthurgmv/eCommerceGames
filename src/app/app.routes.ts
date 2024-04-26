import { Routes } from '@angular/router';
import {GamesCatalogComponent} from "./pages/games-catalog/games-catalog.component";
import {GameCreateComponent} from "./pages/game-create/game-create.component";

export const routes: Routes = [
  {path:"", component: GamesCatalogComponent},
  {path:"game/create", component: GameCreateComponent},
];
