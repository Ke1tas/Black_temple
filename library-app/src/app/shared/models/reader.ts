export interface Reader {
  id: number;
  fullName: string;
  email: string;
  registrationDate: Date;
  isActive: boolean;
  booksBorrowed: number;
  phone?: string;
  address?: string;
}
