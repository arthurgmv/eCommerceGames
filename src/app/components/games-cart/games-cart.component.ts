import {Component, Input, input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {IGame} from "../../models/game";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-games-cart',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './games-cart.component.html',
  styleUrl: './games-cart.component.css'
})
export class GamesCartComponent implements OnInit, OnChanges {
@Input("gameList") addedGamesList: IGame[] = [];

ngOnInit(){
  //console.log(this.addedGamesList);
}
ngOnChanges(changes: SimpleChanges) {
  //console.log(this.addedGamesList);
  localStorage.setItem("addedGameList", JSON.stringify(this.addedGamesList))
}

removeGameFromCart(game: IGame){
  const gameIndex = this.addedGamesList.findIndex((currentGame)=> {
    return currentGame.id === game.id;
  })
  this.addedGamesList.splice(gameIndex, 1);
}
incrementTotalGameCopies(game: IGame) {
  game.totalAddedToCart++;
  if (game.totalAddedToCart > game.totalInStock){
    game.totalAddedToCart = game.totalInStock;
  }
  localStorage.setItem("addedGameList", JSON.stringify(this.addedGamesList));
}

decrementTotalGameCopies(game:IGame){
  game.totalAddedToCart--;

  if (game.totalAddedToCart<=0){
    this.removeGameFromCart(game)
  }
  localStorage.setItem("addedGameList", JSON.stringify(this.addedGamesList));
}

}
