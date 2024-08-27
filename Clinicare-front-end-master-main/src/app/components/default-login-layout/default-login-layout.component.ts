import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-login-layout',
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent implements OnInit {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  @Output("entrar") onEntrar = new EventEmitter();

  userProfile: any = {}; // Objeto para armazenar os dados do perfil do usuário
  isLoggedIn: boolean = false; // Flag para verificar se o usuário está logado

  constructor(private toastr: ToastrService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
    if (this.isLoggedIn) {
      this.fetchUserProfile();
    }
  }

  checkLoginStatus() {
    this.isLoggedIn = !!sessionStorage.getItem('auth-token');
  }

  fetchUserProfile() {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.error('Erro ao buscar perfil do usuário:', error);
        // Lógica de tratamento de erro, se necessário
      }
    );
  }

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }

  entrar(){
    this.onEntrar.emit();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
