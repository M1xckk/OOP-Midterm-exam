import { Playlist } from "./Playlist";
import { Album } from "./Album";
import { Artist } from "./Artist";

interface IImportable {
      loadPlaylist(): Playlist;
    }
    
/*class CloudImporter implements IImportable {
      private url: string;
    
      constructor(url: string) {
        this.url = url;
      }
    
     public loadPlaylist(): Playlist { some error here
        console.log(`Importing playlist from ${this.url}`); 
    
        // Create and return a fake playlist 
        //const playlist = new Playlist("My Playlist");
        const album = new Album("The 2nd Law", artist, 2012);  some error here
        album.addTrack(new Song("Fake Song 1"));
        album.addTrack(new Song("Fake Song 2"));
        playlist.addAlbum(album);
        return playlist;
      }
     */ 

    
