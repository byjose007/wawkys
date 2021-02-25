import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(  private firestore: AngularFirestore, private http:HttpClient) { }

  createRegistro(data:any) {
    return this.firestore
        .collection("Registros")
        .add(data)
        // .then(res => {}, err => reject(err));
    }
  

  updateRegistro(data:any) {
    return this.firestore
      .collection("Registros")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getRegistros() {
    return this.firestore.collection("Registros").snapshotChanges().pipe(
      map(changes =>
        changes.map((c:any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  deleteRegistro(data:any) {
    return this.firestore
      .collection("Registros")
      .doc(data.payload.doc.id)
      .delete();
  }


  getIp(){
    // return this.http.get('curl ipinfo.io/186.68.9.16?token=f8908be810b692')

    return this.http
    .get('https://api.ipify.org/?format=json')
   

  }


  getGEOLocation(ip:any) {
    // Update your api key to get from https://ipgeolocation.io
    let url = "https://api.ipgeolocation.io/ipgeo?apiKey=0f4e06b0721a4a2b82bce38abc80b31a&ip="+ip; 
      return this.http
            .get(url)
  }
           
}
