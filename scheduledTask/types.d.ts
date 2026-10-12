export type ScheduleType = "interval" | "cron";

export interface IIntervalScheduleConfig {
    type: "interval";
    intervalMinutes: number;
}

export interface ICronScheduleConfig {
    type: "cron";
    cronExpression: string; // standard 5-part cron syntax
    timezone?: string;
}

export type ScheduleConfig = IIntervalScheduleConfig | ICronScheduleConfig;

export interface ITaskExecutionContext {
    taskId: string;
    trigger: "eventbridge" | "manual";
    scheduledTime: Date;
}

export interface ITaskExecutionResult {
    message?: string;
    data?: any;
}

export interface IScheduledTaskDefinition {
    id: string;
    name: string;
    module: string;
    description?: string;
    defaultSchedule: ScheduleConfig;
    defaultEnabled?: boolean;
    timeoutSeconds?: number;
    run: (context: ITaskExecutionContext) => Promise<ITaskExecutionResult | void>;
}

export interface IScheduledTask {
    id: string;
    name: string;
    module: string;
    description: string | null;
    enabled: boolean;
    scheduleType: ScheduleType;
    intervalMinutes: number | null;
    cronExpression: string | null;
    timezone: string;
    lastRunAt: string | null;
    lastDurationMs: number | null;
    lastStatus: "idle" | "running" | "success" | "failure";
    lastError: string | null;
    nextRunAt?: string | null;
    lockedUntil: string | null;
    createdAt?: string;
    updatedAt?: string;
}

export interface IScheduledTaskLog {
    id: string;
    taskId: string;
    startedAt: string;
    finishedAt: string;
    durationMs: number;
    status: "success" | "failure";
    message: string | null;
    error: string | null;
    triggeredBy: "eventbridge" | "manual";
}

export interface IScheduledTaskUpdate {
    enabled?: boolean;
    scheduleType?: ScheduleType;
    intervalMinutes?: number | null;
    cronExpression?: string | null;
    timezone?: string;
}

export interface IScheduledTaskRunResult {
    taskId: string;
    status: "success" | "failure";
    durationMs: number;
    message?: string;
    error?: string;
}

export interface IScheduledTasksBatchResult {
    timestamp: string;
    evaluated: number;
    executed: number;
    skipped: number;
    results: IScheduledTaskRunResult[];
}
