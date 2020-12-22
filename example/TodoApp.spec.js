import 'abdomen/setup'
import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { mount } from '@vue/test-utils'
import TodoApp from '../dist/TodoApp.js'

const test = suite('TodoApp')

test('renders a todo', () => {
  const wrapper = mount(TodoApp)

  assert.is(wrapper.find('[data-test="todo"]').text(), 'Learn Vue.js 3')
})

test('creates a todo', async () => {
  const wrapper = mount(TodoApp)

  wrapper.find('[data-test="new-todo"]').element.value = 'New todo'
  await wrapper.find('[data-test="form"]').trigger('submit')

  assert.is(wrapper.findAll('[data-test="todo"]').length, 2)
})

test('completes a todo', async () => {
  const wrapper = mount(TodoApp)

  await wrapper.find('[data-test="todo-checkbox"]').setChecked()

  assert.ok(wrapper.find('[data-test="todo"]').classes().includes('completed'))
})

test.run()
