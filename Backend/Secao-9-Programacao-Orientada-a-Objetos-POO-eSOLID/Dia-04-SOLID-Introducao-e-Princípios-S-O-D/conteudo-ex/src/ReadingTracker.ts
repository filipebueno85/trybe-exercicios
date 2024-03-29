import ConsoleNotification from './ConsoleNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  // O construtor deixa de instanciar um novo objeto do tipo Notificator
  // e agora passa a receber ele como parâmetro
  constructor(
    readingGoal: number,
    public notificator: Notificator = new ConsoleNotification('console'),
  ) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}

// // import progressNotification from './Notifications';
// function progressNotification(message: string): void {
//   console.log(message);
// }

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//   }

//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;
//     if (this.booksRead >= this.readingGoal) {
//       progressNotification(
//         'Congratulations! You\'ve reached your reading goal!',
//       );
//       return;
//     }
//     progressNotification(
//       'There are still some books to go!',
//     );
//   }
// }

// const readTracker = new ReadingTracker(20);
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);
// // ReadingTracker.ts
// type Book = {
//   book: string;
//   author: string;
//   genre: string;
// }

// class ReadingTracker {
//   private readingGoal: number;
//   private booksRead: number;
//   private wishlist: Book[];
//   constructor(readingGoal: number) {
//     this.readingGoal = readingGoal;
//     this.booksRead = 0;
//     this.wishlist = [];
//   }

//   trackReadings(readsCount: number): void {
//     this.booksRead += readsCount;
//     if (this.booksRead >= this.readingGoal) {
//       this.progressNotification(
//         'Congratulations! You\'ve reached your reading goal!',
//       );
//       return;
//     }
//     this.progressNotification(
//       'There are still some books to go!',
//     );
//   }

//   addToWishlist(book: Book): void {
//     this.wishlist.push(book);
//   }

//   showWishlist(): void {
//     console.log(this.wishlist);
//   }

//   progressNotification(message: string): void {
//     console.log(message);
//   }
// }

// const readTracker = new ReadingTracker(20);
// readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
// readTracker.showWishlist();
// readTracker.trackReadings(12);
// readTracker.trackReadings(9);