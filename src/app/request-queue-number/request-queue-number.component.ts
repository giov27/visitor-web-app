import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  onPrint() :void{
    // let printContents, popupWin;
    // printContents = document.getElementById('print-section').innerHTML;
    // popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    // popupWin.document.open(printContents);
    // popupWin.document.write(`
    //   <html>
    //     <head>
    //       <title>Print tab</title>
    //       <style>

    //       </style>
    //     </head>
    // <body onload="window.print()">${printContents}</body>
    //   </html>`
    // );
    // popupWin.document.close();
    // window.print()
  }

  constructor() { }

  ngOnInit(): void {
    // window.print()
  }

}
