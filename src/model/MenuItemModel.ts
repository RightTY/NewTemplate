import { MenuItem } from 'primeng/api';

export class MenuItemModel implements MenuItem {
  label: string;
  constructor(label: string) {
    this.label = label;
  }
}
