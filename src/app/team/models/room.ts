export class Room {
    $key?: string;
    messages?: Message[];

    public static convertFromFb (fbRoom) {
      let room = new Room()
      room.$key = fbRoom.$key;
      room.messages = [];
      for (var key in fbRoom.messages) {
        let message = Message.convertFromFb(fbRoom.messages[key])
        room.messages.push(message);
      }
      return room;
    }
}

export class Message {
    $key?: string;
    created?: any;
    user?: string;
    text?: string;

    constructor(user?:string, text?: string) {
        this.user = user;
        this.text = text;
        this.created = {'.sv': 'timestamp'}; 
    }

    public static convertFromFb (fbMessage) {
        let message = new Message()
        message.$key = fbMessage.$key;
        message.created = new Date(fbMessage.created)
        message.user = fbMessage.user;
        message.text = fbMessage.text;
        return message;
    }
}

