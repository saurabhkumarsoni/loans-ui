import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: 'bx bx-grid-alt',
      sub_menu: [],
    },
    {
      link_name: 'Loans',
      link: '/loans',
      icon: 'bx bx-collection',
      sub_menu: [
      ],
    },
    {
      link_name: 'Customers',
      link: '/customers',
      icon: 'bx bx-book-alt',
      sub_menu: [],
    },
    {
      link_name: 'Payments',
      link: '/payments',
      icon: 'bx bx-pie-chart-alt-2',
      sub_menu: [],
    },
    {
      link_name: 'Invoices',
      link: '/invoices',
      icon: 'bx bx-line-chart',
      sub_menu: [],
    },
    {
      link_name: 'Loan Plans',
      link: '/loan-types',
      icon: 'bx bx-plug',
      sub_menu: [
        {
          link_name: 'Home Loan',
          link: '/ui-face',
        },
        {
          link_name: 'Education Loan',
          link: '/pigments',
        },
        {
          link_name: 'Personal Loan',
          link: '/box-icons',
        },
      ],
    },
    {
      link_name: 'Reports',
      link: '/reports',
      icon: 'bx bx-compass',
      sub_menu: [],
    },
    {
      link_name: 'Settings',
      link: '/settings',
      icon: 'bx bx-history',
      sub_menu: [],
    }
  ];

  constructor() {}

  ngOnInit() {}

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
