import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PipeDemo';

  Items: any[] = [
    { name: 'Web server 1',
      status:'ACTIVE',
      type: 'small',
      createdOn: new Date(27,2,1998),

    },
    { name: 'Producation server 2',
      status:'INACTIVE',
      type: 'medium',
      createdOn: new Date(1,1,1996)
    },
    { name: 'Client server 3',
      status:'IDEAL',
      type: 'Large',
      createdOn: new Date(15,12,1997)
    }
  ];
}
