import { Component } from '@angular/core';
import { HeaderData } from '../../components/header/interfaces/headerData.interface';

@Component({
    selector:    'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls:   ['./reset-password.component.scss']
})

export class ResetPasswordComponent {
    headerData: HeaderData = {
        image: 'https://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg',
        title: 'Restablecer contraseña',
        paragraph: 'Ingresa tu correo electrónico para enviarte un enlace con el que puedas restablecer tu contraseña'
    }
}