import type {AnyObject} from '../utils/object'

export type SubmissionHandler<TValues extends AnyObject> = (
  values: TValues,
  ctx: {
    setFieldError(name: string, message: string): void
    reset(nextValues: TValues): void
  }
) => Promise<void> | void

export interface FormOptions<TValues extends AnyObject, Errors = Partial<Record<keyof TValues, undefined | string>>> {
  initialValues: TValues
  validate?(values: TValues, errors: Errors): Promise<Errors> | Errors
}

export const FormContextKey = Symbol('form-context')
export const FieldContextKey = Symbol('field-context')
