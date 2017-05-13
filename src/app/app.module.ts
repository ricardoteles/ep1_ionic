import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginAlunoPage } from '../pages/login-aluno/login-aluno';
import { LoginProfessorPage } from '../pages/login-professor/login-professor';
import { ListaSeminarioAlunoPage } from '../pages/lista-seminario-aluno/lista-seminario-aluno';
import { CadastroAlunoPage } from '../pages/cadastro-aluno/cadastro-aluno';
import { ListaSeminarioProfessorPage } from '../pages/lista-seminario-professor/lista-seminario-professor';
import { CadastroProfessorPage } from '../pages/cadastro-professor/cadastro-professor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginAlunoPage,
    LoginProfessorPage,
    ListaSeminarioAlunoPage,
    CadastroAlunoPage,
    ListaSeminarioProfessorPage,
    CadastroProfessorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginAlunoPage,
    LoginProfessorPage,
    ListaSeminarioAlunoPage,
    CadastroAlunoPage,
    ListaSeminarioProfessorPage,
    CadastroProfessorPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
