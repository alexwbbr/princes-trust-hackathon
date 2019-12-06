import { Component } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './business-plan.component.html',
  styleUrls: ['./business-plan.component.scss']
})
export class BusinessPlanComponent {

  public showInput = false;

  public textList = [
    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Quis viverra nibh cras pulvinar mattis nunc. Nibh venenatis cras sed felis eget velit aliquet.
        Purus viverra accumsan in nisl nisi scelerisque.`
  ];

  public save(): void {
    this.showInput = false;
    this.textList.push(document.getElementById('demo-text-area')['value']);
  }
}
