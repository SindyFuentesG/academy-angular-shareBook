import { Component, OnInit } from '@angular/core';
import { IBooksList } from '../../models/books';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: Array<IBooksList> = [];

  constructor(private booksManagerServiceService: BooksManagerServiceService) {}

  ngOnInit(): void {
    //this.bookList = this.booksManagerServiceService.getBookList();
    this.booksManagerServiceService.bookList.subscribe((books) => {
      this.bookList = books;
    });

    // this.addNewBookTest();
  }

  // addNewBookTest() {
  //   this.booksManagerServiceService.addNewBook({
  //     name: 'Me After You',
  //     author: 'Jojo Moyes',
  //     imageUrl:
  //       'https://images-na.ssl-images-amazon.com/images/I/51ekditeEiL._SX329_BO1,204,203,200_.jpg',
  //     description:
  //       'Yo antes de ti reúne a dos personas que no podrían tener menos en común',
  //   });
  // }
}
