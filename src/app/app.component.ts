import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from "./components/header/header.component";
import {GamesCatalogComponent} from "./pages/games-catalog/games-catalog.component";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {GamesCartComponent} from "./components/games-cart/games-cart.component";
import {IGame} from "./models/game";
import {GameCreateComponent} from "./pages/game-create/game-create.component";
import {FooterComponent} from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbarModule,
    MatIcon,
    MatButtonModule,
    HeaderComponent,
    GamesCatalogComponent,
    MatDrawer,
    MatDrawerContainer,
    MatSidenavModule,
    GamesCartComponent,
    MatIconModule, GameCreateComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addedGameList: IGame[] = [];
  title = 'eCommerceGames';

  ngOnInit(){
    this.addedGameList = JSON.parse(localStorage.getItem("addedGameList") || "[]");
  }
  findOrAddGame(game: IGame) {
    for(let i=0; i<this.addedGameList.length; i++){
      const currGame = this.addedGameList[i];
      if (game.id === currGame.id) {
        currGame.totalAddedToCart = (game.totalAddedToCart < game.totalInStock)? currGame.totalAddedToCart + 1 : currGame.totalAddedToCart;
        return;
      }
    }
    game.totalAddedToCart = 1;
    this.addedGameList.push(game);
  }
  addGameToCart(game:IGame){

    this.findOrAddGame(game);
    this.addedGameList = [...this.addedGameList];
  }
}
