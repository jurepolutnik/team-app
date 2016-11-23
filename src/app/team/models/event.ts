export class Event {
    $key?: string;
    date?: Date;
    location?: string;
    members?: any[];

    public static convertFromFb(fbEvent) {
        let event = new Event();
        event.$key = fbEvent.$key;
        event.date = new Date(fbEvent.date);
        event.location = fbEvent.location;
        event.members = [];
        for (var key in fbEvent.members) {
            let member = fbEvent.members[key];
            member.$key = key;
            member.created = new Date(member.created);
            member.removed = member.removed ? new Date(member.removed) : null;
            event.members.push(member);
        }
        return event;
    }
}
