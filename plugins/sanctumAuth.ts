import {
  defineNuxtPlugin,
  addRouteMiddleware,
  useState,
  useRuntimeConfig,
  navigateTo,
  useCookie,
} from '#app'
import { $fetch } from 'ohmyfetch'

export interface Endpoints {
    csrf: string
}
export interface Redirects {
    home: string
}
export interface ModuleOptions {
    baseUrl: string
    endpoints: Endpoints
    redirets: Redirects
}


export default defineNuxtPlugin(async (nuxtApp) => {

    const config: ModuleOptions = useRuntimeConfig().sanctumAuth

    const apiFetch = $fetch.create({
        baseURL: config.baseUrl,
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
        },
    })

    const csrf = async () => {
        await $fetch(config.endpoints.csrf, {
        baseURL: config.baseUrl,
        credentials: 'include',
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        })
    }

    const useFetchApi = async (path: string, opts: any) => {
        const config = useRuntimeConfig()
        return await useFetch(path, {
            baseURL: config.public.apiVersion,
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': useCookie('XSRF-TOKEN').value,
            },
            ...opts,
        })
    }

    return {
        provide: {
            apiFetch,
            csrf,
            useFetchApi
        }
    }
})
