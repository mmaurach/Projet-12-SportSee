import { fetchApi } from "./api.js";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data.js";
import UserModel from "../model/userModel.js";
import ActivityModel from "../model/activityModel.js";
import AverageSessionsModel from "../model/sessionsModel.js";
import PerformanceModel from "../model/performanceModel.js";

const isDataMocked = false;

/* Données principales utilisateur */
async function getUserAPI(userId) {
  const data = await fetchApi(`/user/${userId}`);
  return new UserModel(data);
}

function getUserMocked(userId) {
  const data = USER_MAIN_DATA.find((u) => u.id === userId);
  return new UserModel(data);
}

/* Activité quotidienne */
async function getUserActivityAPI(userId) {
  const data = await fetchApi(`/user/${userId}/activity`);

  return data.sessions.map((session) => new ActivityModel(session));
}

function getUserActivityMocked(userId) {
  const data = USER_ACTIVITY.find((u) => u.userId === userId);

  return data.sessions.map((session) => new ActivityModel(session));
}

/* Sessions moyennes */
async function getUserAverageSessionsAPI(userId) {
  const data = await fetchApi(`/user/${userId}/average-sessions`);

  return data.sessions.map((session) => new AverageSessionsModel(session));
}

function getUserAverageSessionsMocked(userId) {
  const data = USER_AVERAGE_SESSIONS.find((u) => u.userId === userId);

  return data.sessions.map((session) => new AverageSessionsModel(session));
}

/* Performances */
async function getUserPerformanceAPI(userId) {
  const data = await fetchApi(`/user/${userId}/performance`);

  return data.data.map((item) => new PerformanceModel(item, data.kind));
}

function getUserPerformanceMocked(userId) {
  const data = USER_PERFORMANCE.find((u) => u.userId === userId);

  return data.data.map((item) => new PerformanceModel(item, data.kind));
}

/* Switch */
export async function getUser(userId) {
  return isDataMocked ? getUserMocked(userId) : getUserAPI(userId);
}

export async function getUserActivity(userId) {
  return isDataMocked
    ? getUserActivityMocked(userId)
    : getUserActivityAPI(userId);
}

export async function getUserAverageSessions(userId) {
  return isDataMocked
    ? getUserAverageSessionsMocked(userId)
    : getUserAverageSessionsAPI(userId);
}

export async function getUserPerformance(userId) {
  return isDataMocked
    ? getUserPerformanceMocked(userId)
    : getUserPerformanceAPI(userId);
}
