import { createReducer, on } from "@ngrx/store";
import { setUser } from "./auth.action";

export const email: string | null = null;

export const AuthReducer = createReducer<string | null>(
    email,
    on(setUser, (state, { email }) => {
        return email;
    })
)