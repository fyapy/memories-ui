<script setup lang="ts">
import {computed, ref} from 'vue'
import {useForm, Form} from '../../forms'
import {FieldText} from '../../ui/forms'
import {Button} from '../../ui/base'

interface ComputedValues {email: string}

const fill = ref(false)
setTimeout(() => fill.value = true, 500)

const {isSubmitting} = useForm({
  initialValues: computed((): ComputedValues => fill.value
    ? {email: 'filled'}
    : {email: ''}),
  validate(vals, errors) {
    if (!vals.email) errors.email = 'Поле обязательное'

    return errors
  },
})
</script>

<template>
  <Form :submit="values => console.log('async', values)">
    <FieldText name="email" label="Email" placeholder="Введите email" />

    <Button :disabled="isSubmitting">Войти</Button>
  </Form>
</template>
