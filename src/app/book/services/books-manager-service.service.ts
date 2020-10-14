import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBooksList } from '../models/books';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BooksManagerServiceService {
  bookList = new BehaviorSubject<IBooksList[]>([]);

  constructor(private firestore: AngularFirestore) {
    firestore
      .collection('books')
      .valueChanges()
      .subscribe((books: Array<IBooksList>) => {
        //console.log(books);
        this.bookList.next(books);
      });
  }

  getBookList() {
    return this.bookList.getValue();
  }

  addNewBook(newBook: IBooksList) {
    this.bookList.next([...this.bookList.getValue(), newBook]);
  }
}
