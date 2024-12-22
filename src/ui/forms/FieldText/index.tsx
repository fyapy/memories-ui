import {useField} from 'forms'
import {InputProps, Input} from 'ui/base'

export interface FieldTextProps extends InputProps {
  name: string
}

export const FieldText = ({name, ...inputProps}: FieldTextProps) => {
  const {error, input} = useField(name)

  return (
    <Input
      {...inputProps}
      {...input}
      error={error}
    />
  )
}
