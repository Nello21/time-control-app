export type User = {
    city: string;
    id: string;
    name: string;
    phone: string;
    roles: [];
};

export type Employee = {
    name: string;
    code: string;
    tasks: string;
};

export type ArrivalResponse = {
    result: number;
    ADD_RESULT: string;
};

export type WorkerDelay = {
    uid: string;
    delay: string;
};

export type TimeControlUserResponse = {
    record_count: number;
    data: TimeControlUser[];
};

export type TimeControlUser = {
    rec_no: number;
    UID: string;
    FIRSTNAME: string;
    SNAME: string;
    MIDNAME: string;
    FULLNAME: string;
    DEVICE_UID: string;
    TABNUM: string;
    DEPART: string;
    POL: string;
    MOBPHONE: string;
    ISLOCKED: string;
    LOCKDATE: string;
    DOLJ: string;
    SHEDCARDKEY: string;
    BITHDAY: string;
    STARTDATE: string;
    DOLJNAME: string;
    DEPNAME: string;
};

export type WorkerPlanResponse = {
    record_count: number;
    data: WorksPlan[];
};

export type WorksPlan = {
    rec_no: number;
    FULLNAME: string;
    TABNUM: string;
    DEVICE_UID: string;
    DEPART: string;
    UID: string;
    WORKDATE: string;
    START_TIME: string;
    END_TIME: string;
    MIN_WORK: string;
    DAYTYPE: string;
    ADDDAYTYPE: string;
    FACT_START_TIME: string;
    FACT_END_TIME: string;
    FACT_MIN_WORK: string;
    OPOZD: string;
    ZADERJ: string;
    EARLY_OUT: string;
    WORK_DIFIRENS: string;
    PROGUL: string;
    ISGO: string;
    DAYNAME_SHORT: string;
};

export type WorkerIntervalResponse = {
    record_count: number;
    data: Interval[];
};

export type Interval = {
    rec_no: number;
    FULLNAME: string;
    DEVICE_UID: string;
    UID: string;
    STARTTIME: string;
    ENDTIME: string;
    ISGO: string;
    ADDTYPE: string;
    CLOSETYPE: string;
    ADDDOOR: string;
    CLOSEDOOR: string;
    STARTDATE: string;
    ENDDATE: string;
};
