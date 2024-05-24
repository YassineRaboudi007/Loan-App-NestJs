import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { LoanService } from "./loan.service";

@Controller()
export class AppController {
  constructor(private readonly loanService: LoanService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.loanService.processFile(file.filename, file.buffer);
  }
}
