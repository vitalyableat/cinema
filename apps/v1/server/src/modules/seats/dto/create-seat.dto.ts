export class CreateSeatDto {
  name: string;
  description: string;
  price: number;
  img: Express.Multer.File;
}
