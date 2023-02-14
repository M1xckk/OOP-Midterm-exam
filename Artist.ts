import { Album } from "./Album";
export class Artist {
      private _name: string;
      private _albums: Album[];
    
      constructor(name: string) {
        this._name = name;
        this._albums = [];
      }
    
      public addAlbum(album: Album): void {
        this._albums.push(album);
      }
    }
    