import * as dayjs from 'dayjs';
import { Observable, Subscription } from 'rxjs';
import { Response } from '../model/Response';

export interface IDocManage {
  readonly Today: Date;
  TodayDateRange: () => DateRange;
  SevenDateRange: () => DateRange;
  ThirtyDateRange: () => DateRange;
  NinetyDateRange: () => DateRange;
  QueryDoc: (queryDocRequest: QueryDocRequest) => Observable<QueryDocResponse>;
  SignProcess: (addSignRequest: SignProcessRequest) =>Subscription;
  CreatrJobFromOld:(creatrJobFromOldRequest:CreatrJobFromOldRequest)=>Observable<CreatrJobFromOldResponse>;
}

export class DateRange {
  public StartDate: Date;
  public EndDate: Date;

  constructor(StartDate: Date, EndDate: Date) {
    this.StartDate = dayjs(
      dayjs(StartDate).format('YYYY-MM-DD 00:00:00')
    ).toDate();
    this.EndDate = dayjs(dayjs(EndDate).format('YYYY-MM-DD 23:59:59')).toDate();
  }
}

export class QueryDocRequest {
  public datefrom: Date;
  public dateto: Date;
  public jobstatus: string | null = null;
  public signstatus: string;

  constructor(
    datefrom: Date,
    dateto: Date,
    signstatus: string,
    jobstatus: string | null = null
  ) {
    this.datefrom = datefrom;
    this.dateto = dateto;
    this.signstatus = signstatus;
    this.jobstatus = jobstatus;
  }
}

// export class QueryDocRequest {
//   public StartDate: Date;
//   public EndDate: Date;
//   public JobStatus: string | null = null;
//   public SignStatus: string;

//   constructor(
//     StartDate: Date,
//     EndDate: Date,
//     SignStatus: string,
//     JobStatus: string | null = null
//   ) {
//     this.StartDate = StartDate;
//     this.EndDate = EndDate;
//     this.SignStatus = SignStatus;
//     this.JobStatus = JobStatus;
//   }
// }

export class QueryDocResponse extends Response {
  public return_count!: number;
  public no_limit_count!: number;
  public jobs: JobData[] = [];
}

export class JobData {
  public jobinfo!: JobIInfo;
  public jobsignhists!: JobSignList[];
}

export class JobIInfo {
  public JOB_ID!: string;
  public TEMP_ID!: string;
  public TEMP_NAME!: string;
  public JOB_DOC_ID!: string;
  public JOB_DESC: string | null = null;
  public JOB_STATUS!: string;
  public CREATE_TIME!: Date;
}

export class JobSignList {
  public SIGN_SEQ!: number;
  public SIGNER_ID!: string;
  public SIGNER_NAME!: string;
  public SIGNBLOCK_ID!: number;
  public SIGN_OPTION!: number;
  public SIGN_STATUS!: string;
  public UPDATE_TIME: Date | null = null;
}

// export class QueryDocResponse extends Response {
//   public ReturnCount!: number;
//   public NoLimitCount!: number;
//   public JobList: JobData[] | null = null;
// }

// export class JobData {
//   public JobIInfo!: JobIInfo;
//   public JobSignList!: JobSignList[];
// }

// export class JobIInfo {
//   public JobID!: string;
//   public TemplateID!: string;
//   public TemplateName!: string;
//   public JobDocID!: string;
//   public Jobesc: string | null = null;
//   public JobStatus!: string;
//   public CreateTime!: Date;
// }

// export class JobSignList {
//   public SignSeq!: number;
//   public SignerID!: string;
//   public SignerName!: string;
//   public SignBlockID!: number;
//   public SignOption!: number;
//   public SignStatus!: string;
//   public UpdateTime: Date | null = null;
// }

export class SignProcessRequest {
  public jobid: string;
  public addsignblock: string|null;
  public expire: number;
  public countersign: string|null;

  constructor(jobid: string, addsignblock: string|null = null, countersign: string|null = null,expire: number) {
    this.jobid = jobid;
    this.addsignblock = addsignblock;
    this.countersign = countersign;
    this.expire = expire;
  }
}

export class SignProcessResponse extends Response {
  public url: string | null = null;
}


export class CreatrJobFromOldRequest {
  public jobid: string;

  constructor(jobid: string) {
    this.jobid = jobid;
  }
}

export class CreatrJobFromOldResponse extends Response {
  public jobid: string | null = null;
  public docid: string | null = null;
}