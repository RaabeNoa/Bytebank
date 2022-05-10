import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransferenciaService) { }
  ngOnInit(): void {
    //o valor atribuido ao get transferencia sera refletido no array de transferencia
    this.transferencias = this.service.transferencias;
  }

}
