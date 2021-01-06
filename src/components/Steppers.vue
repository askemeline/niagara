<template>
  <div class="md-stepper-horizontal margin-bot text-center">
    <div :class="e1 === '1' ? 'active' : ''" class="md-step">
      <div class="md-step-circle"><span>1</span></div>
      <div :class="e1 === '1' ? 'active' : ''" class="md-step-title">Etape 1</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div :class="e1 === '2' ? 'active' : ''" class="md-step">
      <div class="md-step-circle"><span>2</span></div>
      <div :class="e1 === '2' ? 'active' : ''" class="md-step-title">Etape 2</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
    <div :class="e1 === '3' ? 'active' : ''" class="md-step">
      <div class="md-step-circle"><span>3</span></div>
      <div :class="e1 === '3' ? 'active' : ''" class="md-step-title">Etape 3</div>
      <div class="md-step-bar-left"></div>
      <div class="md-step-bar-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steppers',
  props: {
    e1: String,
  },
};
</script>
<style>
.md-stepper-horizontal {
  display: table;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);
}
.md-stepper-horizontal .md-step {
  display: table-cell;
  position: relative;
  padding: 24px;
}

.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
  display: none;
}
.md-stepper-horizontal .md-step .md-step-circle {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  color: #999999;
  border: 1px solid #999999;
}

.md-stepper-horizontal .md-step.active .md-step-circle {
  background-color: white;
  color: rgb(33, 150, 243);
  border: 1px solid rgb(33, 150, 243);
}

.md-stepper-horizontal .md-step .md-step-title {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
}

.md-stepper-horizontal .md-step.active .md-step-title.active {
  color: rgb(33, 150, 243);
}

.md-stepper-horizontal .md-step.active .md-step-title {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
}

.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #dddddd;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
  right: 0;
  left: 50%;
  margin-left: 20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
  left: 0;
  right: 50%;
  margin-right: 20px;
}

.margin-bot {
  margin-bottom: 40px;
}

.text-center {
  text-align: center;
}
</style>
