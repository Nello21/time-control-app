export type UserResponse = {
    record_count: number;
    data: [User];
};

export type User = {
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
