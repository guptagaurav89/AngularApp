import { Component } from "@angular/core"

@Component({
    selector: "user-app",
    template: `<div>
                  <nav class='navbar navbar-inverse navbar-fixed-top'>
                       <div class='container'>
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a [routerLink]="['home']" class="navbar-brand">Angular App</a>
                            </div>
                            <div class="navbar-collapse collapse">
                                <ul class='nav navbar-nav'>
                                    <li><a [routerLink]="['home']">Home</a></li>
                                </ul>
                            </div>
                      </div>
                 </nav>    
                  <div class="container body-content">
                    <router-outlet></router-outlet>
                  </div>               
             </div>`
})
export class AppComponent {

}