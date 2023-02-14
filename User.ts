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

  //addPlaylist(playlist: Playlist): void {
  //code here
   
  //addAlbum(album: Album): void {
  //code here

  //getSongs(): string[] 
  //code here
    
  //getAlbums(): Album[] 
  //code here

  //getPlaylists(): Playlist[] 
  //code here
}