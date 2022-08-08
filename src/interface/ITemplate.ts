import { Observable } from 'rxjs';
import { Response } from '../model/Response';

export interface ITemplate {
  // label: string;
  GetTemplateClassification: () => Observable<TemplateClassificationResponse>;
  GetTemplateClassificationInfo: (
    templateClassificationInfoRequest: TemplateClassificationInfoRequest
  ) => Observable<TemplateClassificationInfoResponse>;
  // Logout: ()=>String;
}

export class TemplateClassificationResponse extends Response {
  public reporttxt: BiztypeTemplateClassificationData =
    new BiztypeTemplateClassificationData();
}

export class BiztypeTemplateClassificationData {
  public biztype: BiztypeTemplateClassification =
    new BiztypeTemplateClassification();
}

export class BiztypeTemplateClassification {
  public name!: string;
  public node: TemplateClassificationNode[][] = [];
}

export class TemplateClassificationNode {
  public node!: string;
  public parentnode!: string;
  public nodename!: string;
  public disporder!: string;
  public creator!: string;
  public updateuser!: string;
  public childnode: TemplateClassificationNode[] | null = [];
}

export class TemplateClassificationInfoResponse extends Response {
  public reporttxt: TemplateInfo[][] = [];
}

export class TemplateInfo {
  public corpno: string | null = null;
  public biztype: string | null = null;
  public node!: string;
  public nodename!: string;
  public tempid!: string;
  public tempver!: string;
  public temptype!: string;
  public tempname!: string;
  public effectdate!: Date;
  public tempattr1: string | null = null;
  public tempattr2: string | null = null;
  public tempattr3: string | null = null;
  public tempattr4: string | null = null;
  public tempattr5: string | null = null;
  public tempattr6: string | null = null;
  public tempattr7: string | null = null;
  public tempattr8: string | null = null;
  public tempattr9: string | null = null;
  public tempattr10: string | null = null;
  public tempfiletype!: string;
  public tempfilepath!: string;
  public tempdesc!: string;
  public createuser!: string;
  public createtime!: Date;
  public updateuser!: string;
  public updatetime!: Date;
}

export class TemplateClassificationInfoRequest {
  public row: string ='';
  public time: string  ='';
  public unit: string  ='';
  public node: string;

  constructor(node: string) {
    this.node = node;
  }
}
