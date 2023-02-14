 import { Album } from "./Album";
 export class Playlist {
      private _name: string;
      private _songs: Song[];
    
      constructor(name: string) {
        this._name = name;
        this._songs = [];
      }
    
      public addSong(song: Song): void {
        this._songs.push(song);
      }
    
      public addAlbum(album: Album): void {
        const tracks = album.getTracks();
        for (let i = 0; i < tracks.length; i++) {
          this._songs.push(tracks[i]);
        }
      }
    
      public getSongs(): Song[] {
        return this._songs;
      }
    }
    