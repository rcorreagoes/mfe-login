import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  email = '';
  code = '';
  emailValid = false;

  onEmailChange() {
    // Validação simples de email
    this.emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email);
    if (!this.emailValid) {
      this.code = '';
    }
  }

  confirmCode() {
    // Lógica para confirmar código
    alert('Código confirmado: ' + this.code);
  }

  sendEmail() {
    // Lógica para enviar email de recuperação
    alert('Email de recuperação enviado para: ' + this.email);
  }
}
