import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(  private firestore: AngularFirestore ) { }

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
}
