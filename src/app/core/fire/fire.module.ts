import { NgModule } from '@angular/core';
import { FirebaseOptions, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

/**
 * The options for the Firebase app.
 */
const options: FirebaseOptions = {
  apiKey: 'AIzaSyCqkyPCZtGQSlbobdJKEB-LGqfFwNGsod8',
  authDomain: 'dontstopmenow.firebaseapp.com',
  projectId: 'dontstopmenow',
  storageBucket: 'dontstopmenow.appspot.com',
  messagingSenderId: '833662679608',
  appId: '1:833662679608:web:2bb1093644a8ac7a8644cd'
};

/**
 * The module that provides Firebase services.
 */
@NgModule({
  providers: [
    provideFirebaseApp(() => initializeApp(options)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
})
export class FireModule { }
