import { Directive, ElementRef,ViewContainerRef,TemplateRef } from "@angular/core";
import { ChildComponent } from "./child/child.component";


@Directive({
    selector: "[list]"
})

export class ListDirective {
    constructor(
        private eleRef: ElementRef, 
        private child: ChildComponent,
        // private tempRef: TemplateRef<any>,
        private viewContRef: ViewContainerRef
        ) { }

    ngOnInit() {
        this.getElement();
    }

    getElement(){
            console.log(this.child);

    // element ref
            this.child.msg = "message from directive";
            const ul = this.eleRef.nativeElement as HTMLUListElement
            ul.classList.add("new-class"); 
            const list = this.eleRef.nativeElement as HTMLElement

    // template ref
    
            // console.log(this.tempRef);
            
        }
}