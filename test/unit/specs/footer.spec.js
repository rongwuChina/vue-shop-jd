import Vue from 'vue'
import footerbar from '@/components/footer'

describe('footerbar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(footerbar)
    const vm = new Constructor().$mount() 
    expect(vm.$el.querySelectorAll('.foot-text').length)
    .toBe(5)
  })
});
