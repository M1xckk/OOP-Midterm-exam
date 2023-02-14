 import { Artist } from "./Artist";
 export class Album {
      private _title: string;
      private _artist: Artist;
      private _year: number;
      private _tracks: Song[];
    
      constructor(title: string, artist: Artist, year: number) {
        this._title = title;
        this._artist = artist;
        this._year = year;
        this._tracks = [];
      }
    
      public addTrack(track: Song): void {
        this._tracks.push(track);
      }
    
      public getTracks(): Song[] {
        return this._tracks;
      }
    }
    