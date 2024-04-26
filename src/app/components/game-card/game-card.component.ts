import {Component, EventEmitter, Input, input, OnInit, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {IGame} from "../../models/game";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-loader/loader-hooks";

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent implements OnInit{
  @Input() game!: IGame;
  @Output() addGameToCart: EventEmitter<any> = new EventEmitter();
  addedGameList: IGame[] = [];
  ngOnInit(): void {
    this.addedGameList = JSON.parse(localStorage.getItem("addedGameList") || "[]");
  }

  findOrAddGame(game?: IGame) {
    for (let i=0; i<this.addedGameList.length; i++){
      const currGame = this.addedGameList[i];
      if (game?.id===currGame.id){
        currGame.totalAddedToCart = (game.totalAddedToCart < game.totalInStock)? currGame.totalAddedToCart + 1 : currGame.totalAddedToCart;
        return;
      }
    }
    if (game) {
        game.totalAddedToCart = 1;
        this.addedGameList.push(game)
    }
  }

  addToShoppingCart(){
  this.addGameToCart.emit();
  this.findOrAddGame(this.game)
    localStorage.setItem("addedGamesList", JSON.stringify(this.addedGameList));
  }

}
