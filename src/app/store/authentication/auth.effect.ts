import { Injectable } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUser, setUser } from "./auth.action";
import { catchError, delay, from, map, of, switchMap } from "rxjs";
import { resetToast, showToast } from "../toastManager/toast.action";
import { Location } from "@angular/common";

@Injectable()
export class AuthEffect {
    constructor(
        private actions: Actions,
        private loginService: LoginService,
        private location: Location
    ) { }

    getUser$ = createEffect(() =>
        this.actions.pipe(
            ofType(getUser),
            switchMap((action) =>
                from(this.loginService.login(action.email, action.password)).pipe(
                    map(response => {
                        this.location.back();
                        return setUser({ email: response.email });
                    }),
                    catchError((error) => {
                        return of(showToast({ message: error.message }));
                    })
                )
            )
        )
    )

    resetBanner$ = createEffect(() =>
        this.actions.pipe(
            ofType(showToast),
            delay(3000),
            map(() => resetToast())
        )
    );
}