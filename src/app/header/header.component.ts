import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { TreeNodeModel } from 'src/model/TreeNodeModel';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';


@Component({
  selector: 'app-header',
  providers:[],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerBarItems: MenuItem[] = [];
  public languageTranslateItems: TreeNode[]= [];
  public LangList:string[];

  public chooseLang:any;
  private translate:TranslateService;
  constructor(languageTranslateService:LanguageTranslateService) {
    this.translate = languageTranslateService.translate;
    this.LangList = languageTranslateService.LangList;
  }

  
  ngOnInit(): void {

    this.ChangeHeaderBarItems();

    console.log(this.LangList);
    let languageTranslateItems = this.languageTranslateItems;
    let translate = this.translate;

    this.LangList.forEach(function(value)
    {  
      languageTranslateItems.push(
       new TreeNodeModel(translate.instant(value),value)
      );
    });

    this.chooseLang = languageTranslateItems.filter(function(value){
      return value.data===translate.currentLang;
    });
  }

  ChangeLang(chooseLang:TreeNodeModel){
    this.translate.use(chooseLang.data).subscribe(()=>{
      console.log(this.translate.currentLang)
      this.ChangeHeaderBarItems();
    });
  }

  ChangeHeaderBarItems(){
    this.headerBarItems = [];
    this.headerBarItems.push(
      new MenuItemModel(this.translate.instant('enterpriseRegister')),
      new MenuItemModel(this.translate.instant('userRegister'))
    );
    console.log(this.headerBarItems)
  }
}