<template>
  <div>
    <div class="system">
      <div class="sun"></div>
      <div class="mercuryOrbit"></div>
      <div class="mercury"></div>

      <div class="venusOrbit"></div>
      <div class="venus"></div>

      <div class="earthOrbit"></div>
      <div class="earth"></div>

      <div class="marsOrbit"></div>
      <div class="mars"></div>

      <div class="jupiterOrbit"></div>
      <div class="jupiter"></div>

      <div class="saturnOrbit"></div>
      <div class="saturn"></div>

    </div>
  </div>
</template>

<script>
  require('./index.less')
  import TopBar from '../../components/TopBar';

  export default {
    components: {
      TopBar:TopBar
    }
  }
</script>
