import { Component, OnInit } from '@angular/core';
import { TestService, Config } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getConfig().subscribe(
      resp => {
        console.log('headers: ' + resp.headers.keys);
        console.log('body: ' + resp.body);
      },
      error => {
        console.log('error: ' + error);
      });
  }

}
