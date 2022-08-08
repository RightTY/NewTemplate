import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import {
  ITemplate,
  TemplateClassificationInfoRequest,
  TemplateClassificationInfoResponse,
  TemplateClassificationResponse,
} from 'src/interface/ITemplate';
import { HttpService } from '../http/http.service';
@Injectable({
  providedIn: 'root',
})
export class TemplateService implements ITemplate {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  GetTemplateClassification(): Observable<TemplateClassificationResponse> {
    return this.http
      .get<TemplateClassificationResponse>(
        '/api/public/Template/get_tree_structure_template_hierarchy'
      )
      .pipe(
        catchError(
          this.httpService.HandleError<TemplateClassificationResponse>()
        )
      );
  }

  GetTemplateClassificationInfo(
    templateClassificationInfoRequest: TemplateClassificationInfoRequest
  ): Observable<TemplateClassificationInfoResponse> {
    console.log(
      this.httpService.ToQueryString(templateClassificationInfoRequest)
    );
    return this.http
      .get<TemplateClassificationInfoResponse>(
        '/api/public/Template/get_lists_structure_template_info',
        {
          params: new HttpParams({
            fromString: this.httpService.ToQueryString(
              templateClassificationInfoRequest
            ),
          }),
        }
      )
      .pipe(
        catchError(
          this.httpService.HandleError<TemplateClassificationInfoResponse>()
        )
      );
  }
}
