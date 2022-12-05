<template>
  <div class="wrraper-image">
    <img class="rotate" src="../../assets/icons/buttons.svg" alt="buttons" />
  </div>
  <div class="background-circle"></div>
</template>

<style lang="scss" scoped>
.wrraper-image {
  position: absolute;
  display: block;
  z-index: 11;

  padding-left: 384px;
  padding-top: 384px;
  @media screen and (max-width: 1024px) {
    padding-left: 336px;
    padding-top: 336px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 207px;
    padding-top: 207px;
  }

  .rotate {
    cursor: pointer;
    @media screen and (max-width: 500px) {
      transform: scale(0.8);
    }

    &:hover {
      animation: rotation 2s infinite linear;
    }
  }
}
.background-circle {
  position: absolute;
  z-index: 1;
  width: 578px;
  height: 578px;
  border-radius: 50%;
  background: #ffcb46;
  filter: blur(38px);
  @media screen and (max-width: 1024px) {
    width: 482px;
    height: 482px;
  }
  @media screen and (max-width: 500px) {
    width: 294px;
    height: 294px;
    filter: blur(24px);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
