import { Component, OnInit } from '@angular/core';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {
  name: string;
  author: string;
  imageUrl: string;
  description: string;

  constructor(
    private booksManagerServiceService: BooksManagerServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addNewBook(): void {
    this.booksManagerServiceService.addNewBook({
      name: this.name,
      author: this.author,
      imageUrl: this.imageUrl,
      description: this.description,
    });
    this.router.navigate(['list']);
  }
}
