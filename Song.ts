class Song {
      private _title: string;
    
      constructor(title: string) {
        this._title = title;
      }
    
      public getTitle(): string {
        return this._title;
      }
    }
    