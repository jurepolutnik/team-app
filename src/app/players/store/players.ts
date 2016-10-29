import { Player } from './../models/player';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const playersReducer: ActionReducer<Player[]> = (state: Player[] = createInitialState(), action: Action) => {
    switch (action.type) {
        case ADD:
            state.push({
                id: -1,
                name: action.payload
            })
            return state;

        case REMOVE:
            return state;

        default:
            return state;
    }
}

function createInitialState (): Player[] {
    let players: Player[] = []
    for (var index = 0; index < 10; index++) {
      players.push({
        id: index,
        name: 'Player ' + index,
      });
    }
    return players;
}