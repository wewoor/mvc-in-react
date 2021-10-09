import { ComponentType, ReactNode } from "react";
import { IModel } from "./model";
import { Controller } from "./controller";
export declare type CompoundModel = {
    [index: string | number]: IModel;
};
export declare type CompoundController = {
    [index: string | number]: Controller;
};
export declare function render<P, S>(model: IModel | CompoundModel, View: ComponentType, Controller?: Controller | CompoundController): ReactNode;
