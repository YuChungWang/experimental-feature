<template>
  <div class="css-feature">
    <section class="feature-has">
      <p>This p tag wrapped by div .feature-has</p>
    </section>

    <section class="feature-focus-within">
      <button class="focus-trigger">
        Focus trigger parent div change background
      </button>
    </section>

    <section class="feature-layer">
      <p>Test layer</p>
    </section>

    <section class="feature-goodbye-transform">
      <p>Goodbye Transform</p>
    </section>

    <section class="feature-user-agent">
      <p>Test user agent</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.css-feature {
  border: 1px solid white;
  margin: 20px;
  padding: 0 30px;

  section {
    margin: 16px;
  }

  .feature-has {
    &:has(p) {
      background: green;
    }
  }

  .feature-focus-within {
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    color: #222;
    width: 500px;
    height: 100px;

    &:has(.focus-trigger):focus-within {
      background: red;
    }
  }

  .feature-layer {
    color: green;

    p {
      color: red;
      font-weight: bold
    }

    @layer yellowColor {
      p {
        color: yellow;
      }
    }
  }

  .feature-goodbye-transform {
    position: relative;
    border: 1px solid white;
    overflow: hidden;
    height: 32px;

    &:hover {
      p {
        rotate: 2deg;
      }
    }

    p {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0;
      text-align: left;
      line-height: 32px;
      translate: 36%;
      transition: 0.3s;
      transform-origin: 12% center;
    }
  }

  .feature-user-agent {
    --color: rgb(202, 133, 202);

    p {
      color: var(--color);
    }
  }
}
</style>
