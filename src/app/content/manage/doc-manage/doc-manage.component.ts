import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  CreatrJobFromOldRequest,
  CreatrJobFromOldResponse,
  DateRange,
  JobData,
  QueryDocRequest,
  QueryDocResponse,
  SignProcessRequest
} from 'src/interface/IDocManage';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { TreeNodeModel } from 'src/model/TreeNodeModel';
import { DocManageService } from 'src/service/docManage/doc-manage.service';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-doc-manage',
  templateUrl: './doc-manage.component.html',
  styleUrls: ['./doc-manage.component.scss'],
})
export class DocManageComponent implements OnInit {
  public ChooseDateRange: TreeNodeModel<string> | undefined;

  public DateRange: DateRange;

  public DateRangeList: TreeNodeModel[] = [];

  public BatchHandle: MenuItemModel[] = [];

  public DocStates: MenuItemModel[] = [];

  public DocList: JobData[] = [];

  public DocExtra: MenuItemModel[] = [];

  public SelectedDocs: JobData[] = [];

  public RadioDoc: JobData | undefined;

  public selectedValues: string[] = [];

  constructor(
    private languageTranslateService: LanguageTranslateService,
    private docManageService: DocManageService,
    private confirmationService: ConfirmationService
  ) {
    // this.DateRange = this.docManageService.TodayDateRange();
    this.DateRange = this.docManageService.NinetyDateRange();
    this.isRowSelectable = this.isRowSelectable.bind(this);
  }

  ngOnInit(): void {
    this.Subscription();
    this.SetDateRangeList();
    this.SetBatchHandle();
    this.SetDocStates();
    this.SetDocExtra();
    this.ChooseDateRange = this.DateRangeList[0];
    console.log(this.DateRangeList[0].data);
  }

  public ChangeDateRange(chooseDateRange: TreeNodeModel): void {
    this.DateRange = this.docManageService.ChangeDateRange(
      chooseDateRange.data
    );
    console.log(chooseDateRange);
  }

  public QueryDoc(): void {
    this.docManageService
      .QueryDoc(
        new QueryDocRequest(
          this.DateRange.StartDate,
          this.DateRange.EndDate,
          '1,2,3'
        )
      )
      .subscribe((data: QueryDocResponse) => {
        this.DocList = data.jobs;
        console.log(this.DocList);
      });
  }

  public isRowSelectable(event: any) {
    console.log(event);
    return event.data;
  }

  /** 設定選取更多時是哪一個 */
  public SetRadioDoc(doc: JobData) {
    this.RadioDoc = doc;
  }

  /**全選 */
  public ChooseAllDocTitle(value: boolean): void {
    console.log(value);
    //Todo:全選事件
  }

  /**訂閱 */
  private Subscription(): void {
    //訂閱語系更改
    this.languageTranslateService.currtentLang$.subscribe((test) => {
      console.log(123);
      this.SetDateRangeList();
      this.SetBatchHandle();
      this.SetDocStates();
      this.SetDocExtra();
    });
  }

  /**設定時間範圍 */
  private SetDateRangeList(): void {
    this.DateRangeList = this.docManageService.dateRangeList.map(
      (data: string) => {
        return new TreeNodeModel<string>(
          this.languageTranslateService.translate.instant(data),
          data
        );
      }
    );
  }

  private SetBatchHandle() {
    this.BatchHandle = [];
    this.BatchHandle.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadPDF')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadSVS')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadCSV')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('batchsign')
      )
    );
  }

  private SetDocStates() {
    this.DocStates = [];
    this.DocStates.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('cancel')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('delete')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('invalid')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('restore')
      )
    );
  }

  private SetDocExtra() {
    this.DocExtra = [];
    this.DocExtra.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadPDF')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadSVS')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('downloadCSV')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('addSign'),
        undefined,
        ()=>{
          this.docManageService.SignProcess(
            new SignProcessRequest(this.RadioDoc!.jobinfo.JOB_ID,
              'Y',
              undefined,
              2592000)
          )
        }
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('supplementSign'),
        undefined,
        ()=>{
          this.docManageService.SignProcess(
            new SignProcessRequest(this.RadioDoc!.jobinfo.JOB_ID,
              undefined,
              'Y',
              2592000)
          )
        }
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('resign'),
        undefined,
        ()=>{
          this.confirmationService.confirm({
            message: this.languageTranslateService.translate.instant('resignExplanation'),
            icon: "pi pi-exclamation-triangle",
            accept: () => {
              this.docManageService.CreatrJobFromOld(
                new CreatrJobFromOldRequest(this.RadioDoc!.jobinfo.JOB_ID)
              ).subscribe(
                (data:CreatrJobFromOldResponse)=>{
                  if(data.code!==500){
                    this.docManageService.SignProcess(
                      new SignProcessRequest(data.jobid!,
                        undefined,
                        undefined,
                        2592000)
                    )
                  }
                }
              )
            }
          });
        }
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('attachment')
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('viewFeedback')
      )
    );
  }
}
