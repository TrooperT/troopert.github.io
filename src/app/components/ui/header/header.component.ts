import { Component } from '@angular/core';

import '@cds/core/icon/register.js';
import { ClarityIcons, dashboardIcon, userIcon, cogIcon, angleIcon, searchIcon, cloudScaleIcon } from '@cds/core/icon';

ClarityIcons.addIcons(dashboardIcon, cogIcon, userIcon, angleIcon, searchIcon, cloudScaleIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
