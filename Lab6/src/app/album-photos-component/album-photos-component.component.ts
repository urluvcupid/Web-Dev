import { Photos } from '../models';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Album } from '../models';
import { NgFor } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  standalone: true,
  selector: 'app-album-photos-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './album-photos-component.component.html',
  styleUrl: './album-photos-component.component.css'
})
export class AlbumPhotosComponent implements OnInit {

  albumId: number | undefined;
  photos!: Photos[];
  loaded: boolean = false;
  
  

  constructor(private albumService: AlbumsService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params)=>{
        if(params.get('id')){
          this.albumId = Number(params.get('id'));
          this.loaded = false;
          this.albumService.getAlbumPhotos(this.albumId).subscribe((album)=>{
            this.photos = album;
            this.loaded = true;
          })
        }
      })
  }

}
