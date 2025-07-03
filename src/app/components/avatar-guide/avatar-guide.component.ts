import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import type { AnimationItem } from 'lottie-web';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-avatar-guide',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: playerFactory,
    }),
  ],
  template: `
    <div
      class="fixed bottom-4 right-4 z-50 flex items-end gap-4 animate-fade-in"
      (click)="siguienteMensaje()"
    >
      <div
        class="bg-white border-r-4 border-verde rounded-xl p-4 shadow-lg text-gray-800 text-sm text-right max-w-xs"
      >
        {{ mensajes[indiceMensaje] }}
      </div>

      <ng-lottie
        [options]="options"
        (animationCreated)="handleAnimationCreated($event)"
        class="w-20 h-20 drop-shadow-xl cursor-pointer"
      ></ng-lottie>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.8s ease-in-out;
    }
  `],
})
export class AvatarGuideComponent {
  options: AnimationOptions = {
    path: 'assets/animations/girl-avatar.json',
    autoplay: true,
    loop: true
  };

  animationItem?: AnimationItem;

  mensajes: string[] = [
    '¡Hola! Soy Sofi, tu guía 😊',
    'Haz clic en las secciones para saber más.',
    '¿Sabías que Repelón tiene historia desde 1848?',
    'Desliza hacia abajo para ver la línea del tiempo.',
    'Si tienes dudas, ¡hazme clic!'
  ];

  indiceMensaje = 0;

  handleAnimationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  siguienteMensaje() {
    this.indiceMensaje = (this.indiceMensaje + 1) % this.mensajes.length;
  }
}
