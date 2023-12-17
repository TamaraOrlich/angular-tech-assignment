import { createAction, props } from "@ngrx/store";

export const getUser = createAction(
    '[User] Get user',
    props<{ email: string, password: string }>()
);

export const setUser = createAction(
    '[User] Set user',
    props<{ email: string }>()
);