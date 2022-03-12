import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { HeaderBarComponent }      from './components/header-bar/header-bar.component';
import { FooterBarComponent }      from './components/footer-bar/footer-bar.component';
import { HeaderSaveInfoComponent } from './components/header-save-info/header-save-info.component';
import { GeneratorComponent } from './components/generator/generator.component';




@NgModule({
	          declarations: [
		          HeaderBarComponent,
		          FooterBarComponent,
		          HeaderSaveInfoComponent,
            GeneratorComponent
	          ],
	          imports     : [
		          CommonModule
	          ],
	          exports: [
		          HeaderBarComponent,
		          FooterBarComponent,
		          GeneratorComponent
	          ]
          })
export class LibModule {}
