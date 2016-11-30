export class Player {
    $key?: string;
    name?: string;
    created?: any;
    removed?: any;

    constructor(name:string) {
        this.name = name;
        this.created = {'.sv': 'timestamp'}; 
        // this.created = firebase.database.ServerValue.TIMESTAMP;
    }
}
