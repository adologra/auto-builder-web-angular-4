export class ItemMenu {
	id: String;
    text: String;
	level: Number;
    
    public getId () : String {
        return this.id;
    }
    
    public setId (localId: String) {
        this.id = localId;
    }
    
    public getText () : String {
        return this.text;
    }
    
    public setText (localText: String) {
        this.text = localText;
    }
    
    public getLevel (): Number {
        return this.level;
    }
    
    public setLevel (localLevel: Number) {
        this.level = localLevel;
    }
}