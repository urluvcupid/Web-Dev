import { HttpClientModule } from '@angular/common/http';
import { Album } from '../models';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-albums-component',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  loaded: boolean = false;



  constructor(private albumsService: AlbumsService){

  }

  ngOnInit(): void {
      this.loaded = false;
      this.albumsService.getAlbums().subscribe((albums) => {
        this.albums = albums;
        this.loaded = true;
      })
  }


  deleteAlbum(id: number){
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(()=>{
      console.log("Deleted");
    })
  }

  updateAlbum(userId: number, id: number, title: string){
    const album: Album = {
      userId,  id, title
    }

    this.albumsService.updateAlbum(album).subscribe(() => {
      console.log("Updated");
    })
}

    createAlbum(userId: number, id: number, title: string){
      const newAlbum = {
        userId, id, title
      }
      this.albumsService.createAlbum(newAlbum).subscribe((createdAlbum) => {
        this.albums.push(createdAlbum);
        console.log('Created', createdAlbum);
      })
    }
}
  



