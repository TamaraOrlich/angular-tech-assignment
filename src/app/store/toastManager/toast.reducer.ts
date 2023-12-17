import { createReducer, on } from "@ngrx/store";
import { resetToast, showToast } from "./toast.action";

export const toastMessage: { message: string, isSuccessful: boolean } | null = null;

export const ToastReducer = createReducer<{ message: string, isSuccessful: boolean } | null>(
    toastMessage,
    on(showToast, (state, { message, isSuccessful }) => {
        return { message: message, isSuccessful: isSuccessful !== undefined ? isSuccessful : false };
    }),
    on(resetToast, (state) => {
        return null;
    })
);