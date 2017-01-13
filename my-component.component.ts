import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        <div>
            <h3>hello my component</h3>
        </div>`
})

export class MyComponent implements OnInit {
    ngOnInit() {
        console.info("hello my component");
    }
}