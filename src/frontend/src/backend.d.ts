import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Awakening {
    status: string;
    user: Principal;
}
export interface backendInterface {
    getAllAwakenings(): Promise<Array<Awakening>>;
    getAllRealityShift(): Promise<Array<Principal>>;
    getAwakeningStatus(): Promise<string>;
    getRealityShift(): Promise<boolean>;
    submitRealityShift(state: boolean): Promise<void>;
    updateAwakeningStatus(status: string): Promise<void>;
}
