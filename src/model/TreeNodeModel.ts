import { TreeNode } from "primeng/api";

export class TreeNodeModel<T = any> implements TreeNode{
    label: string;
    data:T;
    constructor(label :string,data :T){
        this.label = label;
        this.data = data;
    }
}