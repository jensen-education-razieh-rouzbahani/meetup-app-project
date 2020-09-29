import { shallowMount, createLocalVue } from '@vue/test-utils'
import AboutPage from '@/views/AboutPage.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('testing for simple data to render from About pages in vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
    }

    actions = {

    }

    store = new Vuex.Store({
      state,
      actions
    })

  })
  it('renders props.msg when passed', () => {
    const msg = 'About us'
    const wrapper = shallowMount(AboutPage, {
      localVue,
      store
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
