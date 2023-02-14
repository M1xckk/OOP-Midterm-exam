import { Playlist } from "./Playlist";
import { Album } from "./Album";

export class User {
  private _username: string;
  private _password: string;
  private _playlists: Playlist[];
  private _albums: Album[];

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
    this._playlists = [];
    this._albums = [];
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get playlists(): Playlist[] {
    return this._playlists;
  }

  get albums(): Album[] {
    return this._albums;
  }

  addPlaylist(playlist: Playlist): void {
    this._playlists.push(playlist);
  }

  addAlbum(album: Album): void {
    this._albums.push(album);
  }
}
  // getSongs(): string[] {
 //code here 
  //   return songs;
  //no time 

  //getAlbums()

  //getPlaylists()
