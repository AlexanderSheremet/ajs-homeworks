import Character from "./domain.js";
import Game, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from "./game.js";

const game = new Game();
game.start();

const character1 = new Character();
character1.name = "Harry";
game.addCharacter(character1);

const gameSave = new GameSavingData();
saveGame(gameSave, game);

const loadedGame = loadGame(gameSave); // Loading game data
