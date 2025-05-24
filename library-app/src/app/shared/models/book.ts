export interface Book {
    id: number;
    title: string;
    publicationYear: number;
    genre: string;
    isAvailable: boolean;
    addedDate: Date;
    authorId?: number;
  }