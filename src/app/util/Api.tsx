"use client"
import { invokeAxios } from "./Axios";

export async function getLocation(): Promise<any> {
    return await invokeAxios(`location/fetch`, "GET");
}

export async function addLocation(body: any): Promise<any> {
    return await invokeAxios(`location/add`, "PUT", {
        data: body,
    });
}

export async function updateLocation(body: any): Promise<any> {
    return await invokeAxios(`location/update`, "POST", {
        data: body,
    });
}

export async function deleteLocation(body: any): Promise<any> {
    return await invokeAxios(`location/delete`, "DELETE", {
        data: body,
    });
}

export async function getAsset(body: any): Promise<any> {
    return await invokeAxios(`asset/fetch`, "POST", {
        data: body,
    });
}

export async function addAsset(body: any): Promise<any> {
    return await invokeAxios(`asset/add`, "PUT", {
        data: body,
    });
}

export async function updateAsset(body: any): Promise<any> {
    return await invokeAxios(`asset/update`, "POST", {
        data: body,
    });
}

export async function deleteAsset(body: any): Promise<any> {
    return await invokeAxios(`asset/delete`, "DELETE", {
        data: body,
    });
}

export async function getPhase(): Promise<any> {
    return await invokeAxios(`phase/fetch`, "GET");
}

export async function addPhase(body: any): Promise<any> {
    return await invokeAxios(`phase/add`, "PUT", {
        data: body,
    });
}

export async function updatePhase(body: any): Promise<any> {
    return await invokeAxios(`phase/update`, "POST", {
        data: body,
    });
}

export async function deletePhase(body: any): Promise<any> {
    return await invokeAxios(`phase/delete`, "DELETE", {
        data: body,
    });
}

export async function getInvestmentType(): Promise<any> {
    return await invokeAxios(`investmenttype/fetch`, "GET");
}

export async function addInvestmentType(body: any): Promise<any> {
    return await invokeAxios(`investmenttype/add`, "PUT", {
        data: body,
    });
}

export async function updateInvestmentType(body: any): Promise<any> {
    return await invokeAxios(`investmenttype/update`, "POST", {
        data: body,
    });
}

export async function deleteInvestmentType(body: any): Promise<any> {
    return await invokeAxios(`investmenttype/delete`, "DELETE", {
        data: body,
    });
}

export async function getDiscipline(): Promise<any> {
    return await invokeAxios(`discipline/fetch`, "GET");
}

export async function addDiscipline(body: any): Promise<any> {
    return await invokeAxios(`discipline/add`, "PUT", {
        data: body,
    });
}

export async function updateDiscipline(body: any): Promise<any> {
    return await invokeAxios(`discipline/update`, "POST", {
        data: body,
    });
}

export async function deleteDiscipline(body: any): Promise<any> {
    return await invokeAxios(`discipline/delete`, "DELETE", {
        data: body,
    });
}

export async function getFormLabel(): Promise<any> {
    return await invokeAxios(`formlabel/fetch`, "GET");
}

export async function addFormLabel(body: any): Promise<any> {
    return await invokeAxios(`formlabel/add`, "PUT", {
        data: body,
    });
}

export async function updateFormLabel(body: any): Promise<any> {
    return await invokeAxios(`formlabel/update`, "POST", {
        data: body,
    });
}

export async function deleteFormLabel(body: any): Promise<any> {
    return await invokeAxios(`formlabel/delete`, "DELETE", {
        data: body,
    });
}

export async function getDocument(): Promise<any> {
    return await invokeAxios(`document/fetch`, "GET");
}

export async function addDocument(body: any): Promise<any> {
    return await invokeAxios(`document/add`, "PUT", {
        data: body,
    });
}

export async function updateDocument(body: any): Promise<any> {
    return await invokeAxios(`document/update`, "POST", {
        data: body,
    });
}

export async function deleteDocument(body: any): Promise<any> {
    return await invokeAxios(`document/delete`, "DELETE", {
        data: body,
    });
}

export async function getRoadmap(body: any): Promise<any> {
    return await invokeAxios(`roadmap/fetch`, "POST", {
        data: body,
    });
}

export async function addRoadmap(body: any): Promise<any> {
    return await invokeAxios(`roadmap/add`, "PUT", {
        data: body,
    });
}

export async function updateRoadmap(body: any): Promise<any> {
    return await invokeAxios(`roadmap/update`, "POST", {
        data: body,
    });
}

export async function deleteRoadmap(body: any): Promise<any> {
    return await invokeAxios(`roadmap/delete`, "DELETE", {
        data: body,
    });
}

export async function getOneRoadmap(body: any): Promise<any> {
    return await invokeAxios(`roadmap/one`, "POST", {
        data: body,
    });
}

export async function addObjective(body: any): Promise<any> {
    return await invokeAxios(`objective/add`, "POST", {
        data: body,
    });
}

export async function getInfo(body: any): Promise<any> {
    return await invokeAxios(`info/fetch`, "POST", {
        data: body,
    });
}

export async function addInfo(body: any): Promise<any> {
    return await invokeAxios(`info/add`, "PUT", {
        data: body,
    });
}

export async function deleteInfo(body: any): Promise<any> {
    return await invokeAxios(`info/delete`, "DELETE", {
        data: body,
    });
}

export async function addInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/create`, "PUT", {
        data: body,
    });
}

export async function updateInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/update`, "PUT", {
        data: body,
    });
}

export async function submitInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/submit`, "PUT", {
        data: body,
    });
}

export async function deleteInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/delete`, "DELETE", {
        data: body,
    });
}

export async function reviewInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/reviewed`, "PUT", {
        data: body,
    });
}

export async function approveInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/approved`, "PUT", {
        data: body,
    });
}

export async function holdInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/hold`, "PUT", {
        data: body,
    });
}

export async function stopInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/stop`, "PUT", {
        data: body,
    });
}

export async function doneInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/done`, "PUT", {
        data: body,
    });
}

export async function findInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/findbyname`, "POST", {
        data: body,
    });
}

export async function getAllInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/fetch/all`, "POST", {
        data: body,
    });
}

export async function getMyInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/fetch/my`, "POST", {
        data: body,
    });
}

export async function getActionInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/fetch/action`, "POST", {
        data: body,
    });
}

export async function getConfidentialInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/fetch/confidential`, "POST", {
        data: body,
    });
}

export async function getInvestment(body: any): Promise<any> {
    return await invokeAxios(`form/fetch/one`, "POST", {
        data: body,
    });
}

export async function getUser(body: any): Promise<any> {
    return await invokeAxios(`user-search`, "POST", {
        data: body,
    });
}

export async function getPicture(body: any): Promise<any> {
    return await invokeAxios(`get-picture`, "POST", {
        data: body,
    });
}

export async function getHistory(body: any): Promise<any> {
    return await invokeAxios(`history/fetch`, "POST", {
        data: body,
    });
}

export async function addHistory(body: any): Promise<any> {
    return await invokeAxios(`history/add`, "PUT", {
        data: body,
    });
}

export async function resetJustification(body: any): Promise<any> {
    return await invokeAxios(`history/resetjustification`, "POST", {
        data: body,
    });
}

export async function submitSubmitEmail(body: any): Promise<any> {
    return await invokeAxios(`email/submit`, "POST", {
        data: body,
    });
}

export async function submitReviewalEmail(body: any): Promise<any> {
    return await invokeAxios(`email/review`, "POST", {
        data: body,
    });
}

export async function submitApprovalEmail(body: any): Promise<any> {
    return await invokeAxios(`email/approval`, "POST", {
        data: body,
    });
}

export async function actionReviewedEmail(body: any): Promise<any> {
    return await invokeAxios(`email/reviewed`, "POST", {
        data: body,
    });
}

export async function actionApprovedEmail(body: any): Promise<any> {
    return await invokeAxios(`email/approved`, "POST", {
        data: body,
    });
}

export async function actionHoldEmail(body: any): Promise<any> {
    return await invokeAxios(`email/hold`, "POST", {
        data: body,
    });
}

export async function actionStopEmail(body: any): Promise<any> {
    return await invokeAxios(`email/stop`, "POST", {
        data: body,
    });
}

export async function actionDoneEmail(body: any): Promise<any> {
    return await invokeAxios(`email/done`, "POST", {
        data: body,
    });
}

export async function mergeRoadmapPhase(body: any): Promise<any> {
    return await invokeAxios(`phase/merge`, "PUT", {
        data: body,
    });
}

export async function getLead(): Promise<any> {
    return await invokeAxios(`lead/fetch`, "GET");
}

export async function addLead(body: any): Promise<any> {
    return await invokeAxios(`lead/add`, "PUT", {
        data: body,
    });
}

export async function updateLead(body: any): Promise<any> {
    return await invokeAxios(`lead/update`, "POST", {
        data: body,
    });
}

export async function deleteLead(body: any): Promise<any> {
    return await invokeAxios(`lead/delete`, "DELETE", {
        data: body,
    });
}
