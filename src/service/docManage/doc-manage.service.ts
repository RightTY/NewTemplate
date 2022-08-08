import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { catchError, Observable, Subscription } from 'rxjs';
import { CreatrJobFromOldRequest, CreatrJobFromOldResponse, DateRange, IDocManage, QueryDocRequest, QueryDocResponse, SignProcessRequest, SignProcessResponse } from 'src/interface/IDocManage';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class DocManageService implements IDocManage {
  constructor(private http: HttpClient, private httpService: HttpService) {}
  readonly Today: Date = new Date();

  public dateRangeList: string[] = [
    'todayList',
    'sevenDays',
    'oneMonth',
    'threeMonth',
    'chooseDate',
  ];

  public TodayDateRange(): DateRange {

    return new DateRange(this.Today, this.Today);
  }
  public SevenDateRange(): DateRange {
    let date = new Date(this.Today);
    return new DateRange(
      dayjs(this.Today).subtract(11, 'd').toDate(),
      this.Today
    );
  }
  public ThirtyDateRange(): DateRange {
    let date = new Date(this.Today);
    return new DateRange(
      dayjs(this.Today).subtract(30, 'd').toDate(),
      this.Today
    );
  }
  public NinetyDateRange(): DateRange {
    let date = new Date(this.Today);
    return new DateRange(
      dayjs(this.Today).subtract(90, 'd').toDate(),
      this.Today
    );
  }

  public ChangeDateRange(
    chooesDateRange: string,
    stratDate?: Date,
    endData?: Date
  ): DateRange {
    switch (chooesDateRange) {
      case 'todayList':
        return this.TodayDateRange();
      case 'sevenDays':
        return this.SevenDateRange();
      case 'oneMonth':
        return this.ThirtyDateRange();
      case 'threeMonth':
        return this.NinetyDateRange();
      case 'chooseDate':
        if (stratDate === undefined || endData === undefined) {
          throw Error('ChangeDateRange  tratDate or endData is undefined');
        }
        return new DateRange(stratDate!, endData!);
      default:
        throw Error('ChangeDateRange Error');
    }
  }

  public QueryDoc(queryDocRequest:QueryDocRequest):Observable<QueryDocResponse>{
    return this.http
      .post<QueryDocResponse>(
        '/api/public/Job/query_job',
        queryDocRequest
      )
      .pipe(
        catchError(
          this.httpService.HandleError<QueryDocResponse>()
        )
      );
  }

  public SignProcess(signProcessRequest: SignProcessRequest):Subscription {
    return this.http
      .get<SignProcessResponse>(
        '/api/public/Job/get_signdoc_url',
        {
          params: new HttpParams({
            fromString: this.httpService.ToQueryString(
              signProcessRequest
            ),
          }),
        }
      )
      .pipe(
        catchError(
          this.httpService.HandleError<SignProcessResponse>()
        )
      ).subscribe(
        (data:SignProcessResponse)=>{
          if(data.code!==500){
            console.log(data.url);
            window.location.href = data.url!
          }
        }
      );
  }


  public CreatrJobFromOld(creatrJobFromOldRequest:CreatrJobFromOldRequest):Observable<CreatrJobFromOldResponse>{
    return this.http
    .get<CreatrJobFromOldResponse>(
      '/api/public/Job/create_job_from_old',
      {
        params: new HttpParams({
          fromString: this.httpService.ToQueryString(
            creatrJobFromOldRequest
          ),
        }),
      }
    )
    .pipe(
      catchError(
        this.httpService.HandleError<CreatrJobFromOldResponse>()
      )
    );
  }
}
