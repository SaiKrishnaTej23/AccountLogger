import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule, routedComponents } from './register.route';
import { RegisterService } from './register.service';
@NgModule({
    imports: [RegisterRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule],
    exports: [routedComponents],
    declarations: [routedComponents],
    providers: [RegisterService],
})
export class RegisterModule { }
