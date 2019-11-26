<template lang="html">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    class="unsetVIconWidth"
  >
    <g>
      <path
        :fill="mainColor"
        d="M50,57.2H36.7a4.5,4.5,0,0,1-4.5-4.5V38.51A4.5,4.5,0,0,1,36.7,34H50a4.51,4.51,0,0,1,4.5,4.5V52.7A4.51,4.51,0,0,1,50,57.2ZM36.7,37a1.5,1.5,0,0,0-1.5,1.5V52.7a1.5,1.5,0,0,0,1.5,1.5H50a1.5,1.5,0,0,0,1.5-1.5V38.51A1.5,1.5,0,0,0,50,37Z"
      />
      <path
        :fill="mainColor"
        d="M22.2,57.2H8.87a4.51,4.51,0,0,1-4.5-4.5V38.51A4.51,4.51,0,0,1,8.87,34H22.2a4.51,4.51,0,0,1,4.5,4.5V52.7A4.51,4.51,0,0,1,22.2,57.2ZM8.87,37a1.5,1.5,0,0,0-1.5,1.5V52.7a1.5,1.5,0,0,0,1.5,1.5H22.2a1.5,1.5,0,0,0,1.5-1.5V38.51A1.5,1.5,0,0,0,22.2,37Z"
      />
      <path
        :fill="mainColor"
        d="M49.76,28.78a4.58,4.58,0,0,1-1.5-.25L36.14,24.42a5,5,0,0,1-3.07-6.19L37,5.56a4.89,4.89,0,0,1,2.44-2.92,4.61,4.61,0,0,1,3.62-.26L55.19,6.49a5,5,0,0,1,3.07,6.19L54.32,25.35a4.86,4.86,0,0,1-2.44,2.92A4.66,4.66,0,0,1,49.76,28.78ZM41.57,5.13a1.59,1.59,0,0,0-.76.19,1.82,1.82,0,0,0-.93,1.13L35.94,19.12a2,2,0,0,0,1.16,2.46l12.13,4.11a1.62,1.62,0,0,0,1.29-.1,1.82,1.82,0,0,0,.93-1.13l3.94-12.67a2,2,0,0,0-1.16-2.46L42.11,5.22A1.7,1.7,0,0,0,41.57,5.13Z"
      />
      <path
        :fill="mainColor"
        d="M22.2,29H8.87a4.5,4.5,0,0,1-4.5-4.5V10.31a4.51,4.51,0,0,1,4.5-4.5H22.2a4.51,4.51,0,0,1,4.5,4.5V24.49A4.5,4.5,0,0,1,22.2,29ZM8.87,8.81a1.5,1.5,0,0,0-1.5,1.5V24.49A1.5,1.5,0,0,0,8.87,26H22.2a1.5,1.5,0,0,0,1.5-1.5V10.31a1.5,1.5,0,0,0-1.5-1.5Z"
      />
    </g>
  </svg>
</template>


<script lang='ts'>
  import { Vue, Component, Prop} from 'vue-property-decorator'
  
  import { themeColors } from '@/plugins/theme'

  @Component({})
  export default class MyIcon extends Vue {

    @Prop({default: '0 0 60 60'}) viewBox!: string
    @Prop({default: 'action'}) colorMain!: 'action' // | 'primary' | etc.
    @Prop({default: 'action'}) colorAccent!: 'action' // | 'primary' | etc.

    get mainColor() { return themeColors[this.colorMain] }
    get accentColor() { return themeColors[this.colorAccent] }
  }
</script>


<style lang='sass' scoped>
  .unsetVIconWidth
    width: unset !important
</style>
