import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import {
  TemplateClassificationInfoRequest,
  TemplateClassificationInfoResponse,
  TemplateClassificationNode,
  TemplateClassificationResponse,
  TemplateInfo,
} from 'src/interface/ITemplate';
import { TemplateService } from 'src/service/template/template.service';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { TreeNodeModel } from 'src/model/TreeNodeModel';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  public SelectedTemplates: string[] = [];
  public TemplateExtra: MenuItemModel[] = [];
  public DialogVisible: boolean = false;
  constructor(
    private templateService: TemplateService,
    private languageTranslateService: LanguageTranslateService
  ) {}

  public templateList: TemplateInfo[] = [];
  public templateClassificationList: TreeNodeModel<string>[]= [];

  ngOnInit(): void {
    this.Subscription();

    this.templateService
      .GetTemplateClassification()
      .subscribe((data: TemplateClassificationResponse) => {
        this.templateClassificationList = [
          new TreeNodeModel<string>(
            '全部',
            'all',
            'pi pi-folder-open',
            'pi pi-folder',
            this.SetTemplateClassificationList(data.reporttxt.biztype.node[0])
          )
        ] 
      });

      this.GetTemplateClassificationInfo('all')
      console.log(this.GetTemplateClassificationInfo('all'))
    this.SetTemplateExtra();
  }

  public applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  public showDialog() {
    this.DialogVisible = true;
  }

  /** 訂閱 */
  private Subscription() {
    //訂閱語系更改
    this.languageTranslateService.currtentLang$.subscribe((test) => {
      console.log(123);
      this.SetTemplateExtra();
    });
  }

  private SetTemplateExtra() {
    this.TemplateExtra = [];
    this.TemplateExtra.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('copy')
      ),
      new MenuItemModel('JSON'),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('updatePDF')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('setTemplateRelation')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('delete')
      )
    );
  }

  private SetTemplateClassificationList(
    templateClassificationNodes: TemplateClassificationNode[]
  ): TreeNodeModel<string>[] | undefined {
    if (templateClassificationNodes.length > 0) {
      return templateClassificationNodes.map((x) => {
        let result = new TreeNodeModel(
          x.nodename,
          x.node,
          'pi pi-folder-open',
          'pi pi-folder'
        );
        if (x.childnode !== undefined) {
          result.children = this.SetTemplateClassificationList(x.childnode!);
        }
        return result;
      });
    }
    return undefined;
  }

  public GetTemplateClassificationInfo(node:any){
    console.log(this.templateClassificationList)
    this.templateService
      .GetTemplateClassificationInfo(
        new TemplateClassificationInfoRequest(node)
      )
      .subscribe((data: TemplateClassificationInfoResponse) => {
        console.log( data.reporttxt)
        this.templateList = data.reporttxt[0];
      });
  }
  reset() {}
}
