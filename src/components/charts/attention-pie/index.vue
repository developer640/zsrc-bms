<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'attention-pie',
  props: {
    charData: Array
  },
  data () {
    return {
      dom: null,
      option: {
        tooltip: {
          trigger: 'item'
          // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  watch: {
    charData (val) {
      this.option.series[0].data = val
      this.dom.setOption(this.option)
      this.dom.resize()
    }
  },
  mounted () {
    this.dom = echarts.init(this.$refs.dom)
    on(window, 'resize', this.resize)
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
