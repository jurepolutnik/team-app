export class Event {
    $key?: string;
    date?: Date;
    location?: string;
    members?: String[];

    public static convertFromFb(fbEvent) {
        let event = new Event();
        event.date = new Date(fbEvent.date);
        event.location = fbEvent.location;
        event.members = [];
        for (var key in fbEvent.members) {
            let member = fbEvent.members[key];
            member.$key = key;
            member.created = new Date(member.created)
            event.members.push(member);
        }
        return event;
    }
}
