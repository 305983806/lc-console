import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.less']
})
export class ExceptionComponent implements OnInit {
  status: number;
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.status = params.status;
    // });
    this.status = Number(this.route.snapshot.params.status);
  }

}
