"use client"
export enum APP_ROLE {
    ADMIN = "admin_imf",
    LIST_ADMIN = "list_admin_imf",
    USER = "user",
};

export enum INVESTMENT_STATUS {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED",
    COMPLETED = "COMPLETED",
};

export enum PHASE_STATUS {
    OPEN = "OPEN",
    REVIEW_PENDING = "REVIEW PENDING",
    APPROVAL_PENDING = "APPROVAL PENDING",
    LIVE = "LIVE",
    HOLD = "HOLD",
    STOP = "STOP",
    DONE = "DONE",
};

export const statusList = ['DRAFT', 'OPEN', 'REVIEW PENDING', 'APPROVAL PENDING', 'LIVE', 'HOLD', 'STOP', 'DONE'];
