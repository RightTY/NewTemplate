import { MenuItem } from "primeng/api";
import { TS } from "typescript-linq";

export class headerBarItem implements MenuItem{
    label: string;
    constructor(label :string){
        this.label = label;
    }
}