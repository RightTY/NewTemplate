import { MenuItem } from 'primeng/api';

export class MenuItemModel implements MenuItem {
  label: string;
  routerLink?: string[];
  command?: (event?: any) => void;
  items?: MenuItemModel[];
  constructor(
    label: string,
    routerLink?: string[],
    command?: (event?: any) => void,
    items?: MenuItemModel[]
  ) {
    this.label = label;
    this.routerLink = routerLink;
    this.command = command;
    this.items = items;
  }
}
