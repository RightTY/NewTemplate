import { TreeNode } from 'primeng/api';

export class TreeNodeModel<T = any> implements TreeNode {
  label: string;
  data: T;
  expandedIcon?: string;
  collapsedIcon?: string;
  children?: TreeNodeModel<T>[];
  constructor(
    label: string,
    data: T,
    expandedIcon?: string,
    collapsedIcon?: string,
    children?: TreeNodeModel<T>[]
  ) {
    this.label = label;
    this.data = data;
    this.expandedIcon = expandedIcon;
    this.collapsedIcon = collapsedIcon;
    this.children = children;
  }
}
