import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiRootModule } from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterModule, TuiRootModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    title = 'angular-forms';
}
