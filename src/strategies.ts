import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt"


interface AbstractStrategyClass {
    validate(...payload: any): any
}

type KeyOptions = Omit<StrategyOptions, 'secretOrKeyProvider' | 'jwtFromRequest'> & Required<Pick<StrategyOptions, 'secretOrKey'>>
type KeyProviderOptions = Omit<StrategyOptions, 'secretOrKey' | 'jwtFromRequest'> & Required<Pick<StrategyOptions, 'secretOrKeyProvider'>>
type JetFromRequest = Pick<StrategyOptions, 'jwtFromRequest'>

const COOKIE_STRATEGY_NAME_WITH_KEY = 'COOKIE_STRATEGY_NAME_WITH_KEY'
export const CookieStrategyWithKey = {
    strategyName: COOKIE_STRATEGY_NAME_WITH_KEY,
    strategy: (options: KeyOptions, cookieName: string) => {
        const getTokenObject: JetFromRequest = {
            jwtFromRequest: (req) => req?.cookies[cookieName] ?? null
        }
        abstract class CookieStrategyClassWithKey extends PassportStrategy(Strategy, COOKIE_STRATEGY_NAME_WITH_KEY) implements AbstractStrategyClass {
            constructor() {
                super({ ...options, ...getTokenObject })
            }
            abstract validate(...payload: any): any
        }

        return CookieStrategyClassWithKey;
    }
}

CookieStrategyWithKey.strategy({ secretOrKey: '' }, 'token')

const COOKIE_STRATEGY_NAME_WITH_KEY_PROVIDER = 'COOKIE_STRATEGY_NAME_WITH_KEY_PROVIDER'
export const CookieStrategyWithKeyProvider = {
    strategyName: COOKIE_STRATEGY_NAME_WITH_KEY_PROVIDER,
    strategy: (options: KeyProviderOptions, cookieName: string) => {
        const getTokenObject: JetFromRequest = {
            jwtFromRequest: (req) => req?.cookies[cookieName] ?? null
        }
        abstract class CookieStrategyClassWithKey extends PassportStrategy(Strategy, COOKIE_STRATEGY_NAME_WITH_KEY_PROVIDER) implements AbstractStrategyClass {
            constructor() {
                super({ ...options, ...getTokenObject })
            }
            abstract validate(...payload: any): any
        }

        return CookieStrategyClassWithKey;
    }
}

const AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY = 'AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY'
export const AuthorizationHeaderStrategyWithKey = {
    strategyName: AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY,
    strategy: (options: KeyOptions) => {
        const getTokenObject: JetFromRequest = {
            jwtFromRequest: (req) => ExtractJwt.fromAuthHeaderAsBearerToken()(req)
        }
        abstract class CookieStrategyClassWithKey extends PassportStrategy(Strategy, AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY) implements AbstractStrategyClass {
            constructor() {
                super({ ...options, ...getTokenObject })
            }
            abstract validate(...payload: any): any
        }

        return CookieStrategyClassWithKey;
    }
}

const AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY_PROVIDER = 'AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY_PROVIDER'
export const AuthorizationHeaderStrategyWithKeyProvider = {
    strategyName: AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY_PROVIDER,
    strategy: (options: KeyProviderOptions) => {
        const getTokenObject: JetFromRequest = {
            jwtFromRequest: (req) => ExtractJwt.fromAuthHeaderAsBearerToken()(req)
        }
        abstract class CookieStrategyClassWithKey extends PassportStrategy(Strategy, AUTHORIZATION_HEADER_STRATEGY_NAME_WITH_KEY_PROVIDER) implements AbstractStrategyClass {
            constructor() {
                super({ ...options, ...getTokenObject })
            }
            abstract validate(...payload:any): any
        }

        return CookieStrategyClassWithKey;
    }
}