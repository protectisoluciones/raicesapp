import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historia',
  imports: [RouterModule, CommonModule],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {
  imagenes: any[] = [
    {
      ano: '1991',
      rutas: [
        {
          img: 'assets/img/1991/1.jpg'
        },
        {
          img: 'assets/img/1991/2.jpg'
        },
        {
          img: 'assets/img/1991/3.jpg'
        },
        {
          img: 'assets/img/1991/4.jpg'
        },
        {
          img: 'assets/img/1991/5.jpg'
        },
        {
          img: 'assets/img/1991/6.jpg'
        },
        {
          img: 'assets/img/1991/7.jpg'
        }
      ]
    },
    {
      ano: '1998',
      rutas: [
        {
          img: 'assets/img/1998/1.jpg'
        },
        {
          img: 'assets/img/1998/2.jpg'
        },
        {
          img: 'assets/img/1998/3.jpg'
        },
        {
          img: 'assets/img/1998/4.jpg'
        },
        {
          img: 'assets/img/1998/5.jpg'
        },
        {
          img: 'assets/img/1998/6.jpg'
        },
        {
          img: 'assets/img/1998/7.jpg'
        },
        { img: 'assets/img/1998/8.jpg' },
        { img: 'assets/img/1998/9.jpg' },
        { img: 'assets/img/1998/10.jpg' },
        { img: 'assets/img/1998/11.jpg' },
        { img: 'assets/img/1998/12.jpg' },
        { img: 'assets/img/1998/13.jpg' },
        { img: 'assets/img/1998/14.jpg' },
        { img: 'assets/img/1998/15.jpg' },
        { img: 'assets/img/1998/16.jpg' },
        { img: 'assets/img/1998/17.jpg' },
        { img: 'assets/img/1998/18.jpg' },
        { img: 'assets/img/1998/19.jpg' },
        { img: 'assets/img/1998/20.jpg' },
        { img: 'assets/img/1998/21.jpg' },
        { img: 'assets/img/1998/22.jpg' },
        { img: 'assets/img/1998/23.jpg' },
        { img: 'assets/img/1998/24.jpg' },
        { img: 'assets/img/1998/25.jpg' },
        { img: 'assets/img/1998/26.jpg' },
        { img: 'assets/img/1998/27.jpg' },
        { img: 'assets/img/1998/28.jpg' },
        { img: 'assets/img/1998/29.jpg' },
        { img: 'assets/img/1998/30.jpg' }
      ]
    },
    {
      ano: '2025',
      rutas: [
        {
          img: 'assets/img/2025/1.jpg'
        },
        {
          img: 'assets/img/2025/2.jpg'
        },
        {
          img: 'assets/img/2025/3.jpg'
        },
        {
          img: 'assets/img/2025/4.jpg'
        }
      ]
    }
  ]
}
