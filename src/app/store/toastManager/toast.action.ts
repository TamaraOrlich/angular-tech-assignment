import { createAction, props } from '@ngrx/store';

export const showToast = createAction(
    '[Toast] Show Toast Message',
    props<{ message: string, isSuccessful?: boolean }>()
);

export const resetToast = createAction('[Toast] Reset Toast Message');