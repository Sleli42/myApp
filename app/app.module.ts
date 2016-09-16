import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platerforme-browser';
import { FormsModule }		from '@angular/forms';
import { AppComponent }		from './app.component';

@NgModule({
	imports:		[ BrowserModule, FormsModule ],		// import forms module
	declarations:	[ AppComponent ],
	bootstrap:		[ AppComponent ]
})

export class AppModule { }