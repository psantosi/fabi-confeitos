import { Component } from '@angular/core';
import { IGallaryImage } from './interfaces/GalleryImage';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

  galleryImage: IGallaryImage[] = [
    {
      id: 1,
      title: ':)',
      src: 'gallery/galeria-1.png'
    },
    {
      id: 2,
      title: ':)',
      src: 'gallery/galeria-2.png'
    },
    {
      id: 3,
      title: ':)',
      src: 'gallery/galeria-3.png'
    },
    {
      id: 4,
      title: ':)',
      src: 'gallery/galeria-4.png'
    },
    {
      id: 5,
      title: ':)',
      src: 'gallery/galeria-5.png'
    },
    {
      id: 6,
      title: ':)',
      src: 'gallery/galeria-6.png'
    },
    {
      id: 7,
      title: ':)',
      src: 'gallery/galeria-7.png'
    },
    {
      id: 8,
      title: ':)',
      src: 'gallery/galeria-8.png'
    },
    {
      id: 9,
      title: ':)',
      src: 'gallery/galeria-9.png'
    },
    {
      id: 10,
      title: ':)',
      src: 'gallery/galeria-10.png'
    },
    {
      id: 11,
      title: ':)',
      src: 'gallery/galeria-11.png'
    },
  ];

  imageSelected: IGallaryImage = this.galleryImage[0];

  openImage(image: IGallaryImage) {
    this.imageSelected = image;
  }
}
