<template>
  <div class="map-node" :style="{ top: mutableTop + '%', left: mutableLeft + '%' }" @mousedown="startDrag">
    {{ stationId }}
  </div>
</template>

<script>
export default {
  name: 'MapNode',
  props: {
    top: Number,
    left: Number,
    stationId: Number
  },
  data() {
    return {
      mutableTop: this.top,
      mutableLeft: this.left
    };
  },
  methods: {
    startDrag(dragEvent) {
      const mapElement = dragEvent.target.parentNode;
      const { x: mapOffsetLeft, y: mapOffsetTop } = mapElement.getBoundingClientRect();

      const mapWidth = mapElement.clientWidth;
      const mapHeight = mapElement.clientHeight;

      this.mouseMoveListener = mouseEvent => {
        const x = mouseEvent.clientX;
        const y = mouseEvent.clientY;

        this.mutableTop = (y - mapOffsetTop) / mapHeight * 100;
        this.mutableLeft = (x - mapOffsetLeft) / mapWidth * 100;
      };
      this.endDrag();
      window.addEventListener('mousemove', this.mouseMoveListener);
      window.addEventListener('mouseup', this.endDrag);
    },
    endDrag() {
      window.removeEventListener('mousemove', this.mouseMoveListener);
      window.removeEventListener('mouseup', this.endDrag);
    }
  }
};
</script>

<style>
.map-node {
  position: absolute;

  border: solid 1px black;
  background-color: red;
  padding: 2px;

  transform: translate(-50%, -50%);
  user-select: none;
}
</style>

