export class Settings {
  constructor() {
    this.defaultSettings = new Map()
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy');

    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    this.userSettings.set(name, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}

export default function showSettings(...args) {
  const settings = new Settings();
  args.forEach(([name, value]) => settings.setUserSetting(name, value));
  return settings.settings;
}
