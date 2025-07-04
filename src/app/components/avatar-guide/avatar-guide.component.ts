import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
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
  providers: [provideLottieOptions({ player: playerFactory })],
  template: `
    <div
      class="fixed bottom-4 right-4 z-[9999] flex items-end gap-4 animate-fade-in group pointer-events-auto"
      (mouseenter)="pausarCambio()"
      (mouseleave)="reanudarCambio()"
    >
      <div
        class="bg-white border-r-4 border-verde rounded-xl p-4 shadow-lg text-gray-800 text-sm text-right max-w-xs transform transition-all duration-700 ease-in-out"
        [class.opacity-0]="!mostrarMensaje()"
        [class.translate-y-4]="!mostrarMensaje()"
        (click)="siguienteMensaje()"
      >
        {{ mensajeActual() }}
      </div>

      <ng-lottie
        [options]="options"
        (animationCreated)="handleAnimationCreated($event)"
        class="w-20 h-20 drop-shadow-xl cursor-pointer transition-transform duration-300 group-hover:scale-110"
        (click)="siguienteMensaje()"
      ></ng-lottie>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }
  `],
})
export class AvatarGuideComponent implements OnInit, OnDestroy {
  options: AnimationOptions = {
    path: 'assets/animations/girl-avatar.json',
    autoplay: true,
    loop: true,
  };

  animationItem?: AnimationItem;

  mensajesBase = [
    '¡Hola! Soy Sofi, tu guía 😊',
    'Haz clic en las secciones para saber más.',
    '¿Sabías que Repelón tiene historia desde 1848?',
    'Desliza hacia abajo para ver la línea del tiempo.',
    'Si tienes dudas, ¡hazme clic!'
  ];

  mensajes = [...this.mensajesBase];
  indice = signal(0);
  mensajeActual = computed(() => this.mensajes[this.indice()]);
  mostrarMensaje = signal(true);

  private intervalo?: ReturnType<typeof setInterval>;
  private pausado = false;

  ngOnInit() {
    this.iniciarCambioAutomático();
    this.configurarIntersecciones();
  }

  ngOnDestroy(): void {
    if (this.intervalo) clearInterval(this.intervalo);
  }

  handleAnimationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  siguienteMensaje() {
    this.indice.update(i => (i + 1) % this.mensajes.length);
    this.mostrarMensaje.set(true);
  }

  setMensaje(nuevo: string) {
    if (this.mensajes[0] !== nuevo) {
      this.mensajes.unshift(nuevo);
      this.indice.set(0);
      this.mostrarMensaje.set(true);
    }
  }

  pausarCambio() {
    this.pausado = true;
    clearInterval(this.intervalo);
  }

  reanudarCambio() {
    if (!this.intervalo) this.iniciarCambioAutomático();
    this.pausado = false;
  }

  iniciarCambioAutomático() {
    this.intervalo = setInterval(() => {
      if (!this.pausado) this.siguienteMensaje();
    }, 12000);
  }

  configurarIntersecciones() {
    const secciones = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id === 'cultura') this.setMensaje('¡Estás viendo la cultura de Repelón! 🎭');
            else if (id === 'demografia') this.setMensaje('Mira cuánta gente vive en Repelón 👥');
            else if (id === 'historia') this.setMensaje('Repelón tiene historia desde el siglo XIX 📜');
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    secciones.forEach(sec => observer.observe(sec));
  }
}
