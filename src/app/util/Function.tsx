"use client"
import React from "react";
import { Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { find, maxBy, orderBy } from "lodash";
import { APP_ROLE, INVESTMENT_STATUS, PHASE_STATUS } from "./Constant";

export const searchStringFormatting = (investment: any) => {
    let searchString = "|";
    if (investment?.investmentname) searchString += investment.investmentname.trim() + '|';
    if (investment?.investmenttype) searchString += investment.investmenttype.trim() + '|';
    if (investment?.locationname) searchString += investment.locationname.trim() + '|';
    if (investment?.asset) searchString += investment.asset.trim() + '|';
    if (investment?.year) searchString += investment.year.trim() + '|';
    searchString = searchString.toLowerCase();
    return searchString;
}

export const phaseStatusStringFormatting = (investment?: any) => {
    let phaseStatusString = "|";
    if (investment) {
        if (investment?.investmentstatus === INVESTMENT_STATUS.DRAFT) {
            phaseStatusString += "draft|";
        } else {
            investment?.phase?.forEach((ph: any) => {
                if (ph?.PhaseStatus) {
                    phaseStatusString += `${ph?.PhaseName?.toLowerCase()}:${ph?.PhaseStatus?.toLowerCase()}|`;
                }
            })
        }
    }
    return phaseStatusString;
}

export const investmentManagerStringFormatting = (investment: any) => {
    let investmentManager = "|";
    if (investment && investment?.phase && investment?.phase?.length) {
        investment?.phase?.forEach((ph: any) => {
            ph?.lead?.forEach((ld: any) => {
                if (ld?.role === "Investment Manager") {
                    investmentManager += `${ph?.PhaseName?.toLowerCase()}:${ld?.user?.email?.toLowerCase()}|`;
                }
            });
        });
    }
    return investmentManager;
}

export const teamStringFormatting = (phase: any) => {
    let teamString = "|";
    if (phase?.teammember?.length) {
        phase.teammember.forEach((item: any) => {
            if (item?.user?.email) {
                teamString += item?.user?.email + '|';
            }
        });
    }
    return teamString;
}

export const leadStringFormatting = (phase: any) => {
    let leadString = "|";
    if (phase?.lead?.length) {
        phase.lead.forEach((item: any) => {
            if (item?.user?.email) {
                leadString += item?.user?.email + '|';
            }
        });
    }
    return leadString;
}

export const teamAccessStringFormatting = (investment: any) => {
    let teamaccess = "|";
    if (investment && investment?.phase && investment?.phase?.length) {
        investment?.phase?.forEach((ph: any) => {
            ph?.teammember?.forEach((tm: any) => {
                teamaccess += `${ph?.PhaseName?.toLowerCase()}:${tm?.user?.email?.toLowerCase()}|`;
            });
        });
    }
    return teamaccess;
}

export const leadAccessStringFormatting = (investment: any) => {
    let leadaccess = "|";
    if (investment && investment?.phase && investment?.phase?.length) {
        investment?.phase?.forEach((ph: any) => {
            ph?.lead?.forEach((ld: any) => {
                leadaccess += `${ph?.PhaseName?.toLowerCase()}:${ld?.user?.email?.toLowerCase()}|`;
            });
        });
    }
    return leadaccess;
}

export const approverStringFormatting = (phase: any) => {
    let approverString = "|";
    if (phase?.approver?.email) {
        approverString += phase.approver.email + '|';
    }
    return approverString;
}

export const reviewerStringFormatting = (phase: any) => {
    let reviewerString = "|";
    if (phase?.reviewer?.email) {
        reviewerString += phase.reviewer.email + '|';
    }
    return reviewerString;
}

export const checkApprover = (approveremail: string, email: any) => {
    let approver = false;
    if (approveremail === email) {
        approver = true;
    }
    return approver;
}

export const checkReviewer = (revieweremail: string, email: any) => {
    let reviewer = false;
    if (revieweremail === email) {
        reviewer = true;
    }
    return reviewer;
}

export const checkTeam = (teamaccess: string, email: any, phasename: any) => {
    let teammember = false;
    if (teamaccess && teamaccess?.includes(`${phasename?.toLowerCase()}:${email?.toLowerCase()}`)) {
        teammember = true;
    }
    return teammember;
}

export const checkLead = (leadaccess: string, email: any, phasename: any) => {
    let lead = false;
    if (leadaccess && leadaccess?.includes(`${phasename?.toLowerCase()}:${email?.toLowerCase()}`)) {
        lead = true;
    }
    return lead;
}

export const checkCreatedBy = (createdBy: string, email: string) => {
    let checkCreatedBy = false;
    if (createdBy === email) {
        checkCreatedBy = true;
    }
    return checkCreatedBy;
}

export const checkCurrentAction = (currentaction: string, email: string) => {
    let checkCurrentAction = false;
    if (currentaction && currentaction?.toLowerCase()?.includes(email?.toLowerCase())) {
        checkCurrentAction = true;
    }
    return checkCurrentAction;
}

export const validateApprover = (lead: any, teammember: any, email: any, creator?: string) => {
    let approver = false;
    lead?.forEach((ld: any) => {
        if (ld?.user?.email === email) {
            approver = true;
        }
    });
    teammember?.forEach((tm: any) => {
        if (tm?.user?.email === email) {
            approver = true;
        }
    });
    if (creator && creator === email) {
        approver = true;
    }
    return approver;
}

export const validateReviewer = (lead: any, teammember: any, email: any, creator?: string) => {
    let reviewer = false;
    lead?.forEach((ld: any) => {
        if (ld?.user?.email === email) {
            reviewer = true;
        }
    });
    teammember?.forEach((tm: any) => {
        if (tm?.user?.email === email) {
            reviewer = true;
        }
    });
    if (creator && creator === email) {
        reviewer = true;
    }
    return reviewer;
}

export const transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
})

export const phaseStatusColor = (status: string, type?: string) => {
    let color = "";
    if (status === PHASE_STATUS.OPEN) {
        color = 'open';
    } else if (status === PHASE_STATUS.REVIEW_PENDING) {
        color = 'reviewpending';
    } else if (status === PHASE_STATUS.APPROVAL_PENDING) {
        color = 'approvalpending';
    } else if (status === PHASE_STATUS.LIVE) {
        color = 'live';
    } else if (status === PHASE_STATUS.HOLD) {
        color = 'hold';
    } else if (status === PHASE_STATUS.STOP) {
        color = 'stop';
    } else if (status === PHASE_STATUS.DONE) {
        color = 'done';
    }
    if (type) {
        color = type + color;
    }
    return color;
}

export const getProjectManager = (investment: any, phasename: any, type?: string) => {
    let ProjectManager = "-";
    if (investment?.investmentmanagerstring !== '|') {
        let tmpphase = null;
        if (type === 'draft') {
            tmpphase = find(investment?.phase, ['PhasePosition', 1]);
        } else {
            tmpphase = find(investment?.phase, ['PhaseName', phasename]);
        }
        if (tmpphase) {
            let lead = tmpphase?.lead;
            if (lead?.length) {
                lead?.forEach((item: any) => {
                    if (item?.role?.toLowerCase() === 'investment manager' && item?.user?.displayname?.toLowerCase() !== 'tba') {
                        ProjectManager = item?.user?.givenname + " " + item?.user?.lastname;
                    }
                });
            }
        }
    }
    return ProjectManager;
}

export const isAdmin = (auth: any) => {
    if (auth?.roles?.includes(APP_ROLE.ADMIN)) {
        return true;
    } else {
        return false;
    }
}

export const isListAdmin = (auth: any) => {
    if (auth?.roles?.includes(APP_ROLE.LIST_ADMIN)) {
        return true;
    } else {
        return false;
    }
}

export const checkPhaseStatusFilter = (phase: any, statusFilter: any, phaseFilter: any) => {
    let show = false;
    if (statusFilter?.length && phaseFilter?.length) {
        show = statusFilter?.some((i: any) => phase?.PhaseStatus?.includes(i)) && phaseFilter?.some((i: any) => phase?.PhaseName?.includes(i));
    } else if (statusFilter?.length && !phaseFilter?.length) {
        show = statusFilter?.some((i: any) => phase?.PhaseStatus?.includes(i));
    } else if (!statusFilter?.length && phaseFilter?.length) {
        show = phaseFilter?.some((i: any) => phase?.PhaseName?.includes(i));
    } else {
        show = true;
    }
    return show;
}

export const checkManagerFilter = (investment: any, phasename: any, identityFilterUi: any, type?: any) => {
    let show = false;
    let tmpphase = null;
    if (identityFilterUi) {
        if (type === 'draft') {
            tmpphase = find(investment?.phase, ['PhasePosition', 1]);
        } else {
            tmpphase = find(investment?.phase, ['PhaseName', phasename]);
        }
        if (tmpphase) {
            if (investment?.investmentmanagerstring?.includes(`${tmpphase?.PhaseName?.toLowerCase()}:${identityFilterUi?.email?.toLowerCase()}`)) {
                show = true;
            }
        }
    } else {
        show = true;
    }
    return show;
}

export const checkLastPhase = (investment: any, phaseName: string) => {
    let last = false;
    const lastPhase: any = maxBy(investment?.phase, 'PhasePosition');
    if (lastPhase && lastPhase?.PhaseName === phaseName) {
        last = true;
    }
    return last;
}

export const teamEmail = (investment: any, phasename: any, creator: string) => {
    let TeamEmail: any[] = [];
    let tempPhase = find(investment?.phase, ['PhaseName', phasename]);
    if (tempPhase) {
        TeamEmail = tempPhase?.teammemberstring.split('|').filter((i: any) => i)
    }
    TeamEmail.push(creator);
    return TeamEmail;
}

export const findInvestmentManager = (investment: any, phasename: any) => {
    let manager = null;
    let tempPhase = find(investment?.phase, ['PhaseName', phasename]);
    if (tempPhase) {
        manager = find(tempPhase?.lead, ['role', 'Investment Manager']);
    }
    return manager;
}

export const turnOffNonMandatory = (investment: any, phasename: any) => {
    let tempPhase = find(investment?.phase, ['PhaseName', phasename]);
    tempPhase?.Objective?.forEach((obj: any) => {
        if (!obj?.IsMandatory) {
            obj.Active = false;
            obj?.Deliverable?.map((i: any) => i.Active = false);
        } else {
            obj.Active = true;
            obj?.Deliverable?.map((i: any) => i.Active = true);
        }
    });
    return investment;
}

export const adminRoadmapPdfFormat = (roadmap: any) => {
    roadmap?.Phase?.map((ph: any) => {
        ph.Objective = orderBy(ph?.Objective, ['Discipline', 'IsMandatory', (obj: any) => obj?.ObjectiveName?.toLowerCase()], ['asc', 'desc', 'asc']);
        return ph;
    })
    return roadmap;
}

export const userRoadmapPdfFormat = (investment: any) => {
    investment?.phase?.map((ph: any) => {
        ph.Objective = orderBy(ph?.Objective, ['Discipline', 'IsMandatory', (obj: any) => obj?.ObjectiveName?.toLowerCase()], ['asc', 'desc', 'asc']);
        return ph;
    })
    return investment;
}

export const adminRoadmapExcelFormat = (roadmap: any) => {
    roadmap?.Phase?.map((ph: any) => {
        ph.Objective = orderBy(ph?.Objective, ['Discipline', 'IsMandatory', (obj: any) => obj?.ObjectiveName?.toLowerCase()], ['asc', 'desc', 'asc']);
        return ph;
    })
    return roadmap;
}

export const userRoadmapExcelFormat = (investment: any) => {
    investment?.phase?.map((ph: any) => {
        ph.Objective = orderBy(ph?.Objective, ['Discipline', 'IsMandatory', (obj: any) => obj?.ObjectiveName?.toLowerCase()], ['asc', 'desc', 'asc']);
        return ph;
    })
    return investment;
}

export const teamOrLeadBlock = (auth: any, createdBy: any) => {
    let block = true;
    if (auth?.roles?.includes(APP_ROLE.ADMIN) || createdBy === auth?.email) {
        block = false;
    }
    return block;
}

export const checkVisibility = (auth: any, item: any, ph: any, confidential: boolean) => {
    let visible = false;
    if (!confidential && auth?.roles?.includes(APP_ROLE.ADMIN)) {
        visible = true;
    } else if (item?.createdBy === auth?.email) {
        visible = true;
    } else if (item?.teamaccess?.includes(`${ph?.PhaseName?.toLowerCase()}:${auth?.email?.toLowerCase()}`)) {
        visible = true;
    } else if (item?.leadaccess?.includes(`${ph?.PhaseName?.toLowerCase()}:${auth?.email?.toLowerCase()}`)) {
        visible = true;
    }
    return visible;
}
