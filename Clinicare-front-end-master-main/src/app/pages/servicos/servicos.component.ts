import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultServicosLayoutModule } from '../../components/default-servicos-layout/default-servicos-layout.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [DefaultServicosLayoutModule, ReactiveFormsModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

  constructor(private router: Router) {}

  navigate(){
    this.router.navigate(["login"])
  }

  entrar(){
    this.router.navigate(["login"])
  }

}
