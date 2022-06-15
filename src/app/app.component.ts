import { Component } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-upload-app';
  file: File | null | undefined;

  constructor(private uploadService: UploadService) {}

  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    console.log(this.file);
    this.file ? this.uploadService.upload(this.file).subscribe((response: any) => alert('Uploaded')) : alert('Please select a file first');
  }

}
