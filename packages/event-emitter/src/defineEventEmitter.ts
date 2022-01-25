import { setDefaultValue } from '@zhengxs/util'

export interface CustomEventListener<T = any> {
  (evt: CustomEvent<T>): void
}

export type CustomEventEmitter<
  EM extends Record<string, any>,
  E extends keyof EM = Extract<keyof EM, string>
> = {
  on(name: E, handler: CustomEventListener<EM[E]>): void
  once(name: E, handler: CustomEventListener<EM[E]>): void
  off(name: E, handler?: CustomEventListener<EM[E]>): void
  emit(name: E): void
  emit(name: E, detail?: EM[E]): void
  clear(): void
}

export type CustomEventMap<T> = {
  [P in keyof T]: CustomEventListener<T[P]>[]
}

export function defineEventEmitter<
  EventMap extends Record<string, any>
>(): CustomEventEmitter<EventMap>

export function defineEventEmitter<Event extends string>(
  events: Event[]
): CustomEventEmitter<Record<Event, any>>

export function defineEventEmitter<
  EventMap extends Record<string, any>,
  Event extends Extract<keyof EventMap, string>
>(): CustomEventEmitter<EventMap> {
  const eventMap = {} as CustomEventMap<EventMap>

  ;(arguments[0] || []).forEach((name: Event) => {
    eventMap[name] = [] as CustomEventListener<any>[]
  })

  function on(
    name: Event,
    handler: CustomEventListener<EventMap[Event]>
  ): void {
    setDefaultValue(eventMap, name, []).push(handler)
  }

  function off(name: Event, handler?: CustomEventListener<EventMap[Event]>) {
    if (handler == null) {
      eventMap[name] = []
      return
    }

    const listeners = setDefaultValue(eventMap, name, [])
    const index = listeners.indexOf(handler)
    if (index > -1) listeners.splice(index, 1)
  }

  function once(name: Event, handler: CustomEventListener<EventMap[Event]>) {
    const callback = (event: CustomEvent<EventMap[Event]>) => {
      off(name, callback)
      handler(event)
    }
    on(name, callback)
  }

  function emit<E extends Extract<keyof EventMap, string>>(
    name: E,
    detail?: EventMap[E]
  ) {
    const customEvent = new CustomEvent(name, { detail, cancelable: true })
    const listeners = setDefaultValue(eventMap, name, [])

    for (let i = 0, len = listeners.length; i < len; i++) {
      const handler = listeners[i]

      handler(customEvent)
      if (customEvent.defaultPrevented) break
    }
  }

  function clear(): void {
    for (const name in eventMap) {
      eventMap[name] = []
    }
  }

  return {
    on,
    once,
    off,
    emit,
    clear
  }
}
