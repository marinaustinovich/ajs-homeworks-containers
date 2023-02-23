export class Settings {
    constructor() {
        this.settings = new Map().set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy');
    } 
  
    getSettings(args) {
        if(args.length !== 0) {
            args.forEach(item => this.settings.set(item[0], item[1]));
        } 
        return this.settings;

    }
    
}

export default function showSettings(...args) {
    const settinsWithDefault = new Settings();
    return settinsWithDefault.getSettings(args);
}
  