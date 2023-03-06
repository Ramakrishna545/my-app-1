import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public gallery:any=[];
  constructor(private _galleryservice:GalleryService){
    _galleryservice.getgallery().subscribe(
      (data:any)=>{
        this.gallery=data.data.memes;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

  }


}
