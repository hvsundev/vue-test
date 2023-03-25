<template>
  <div class="inner">
  <!-- <h1 class="test-title">Interaction</h1> -->
    <main class="interaction">
      <h2 class="blind">인터렉션 메인 콘텐츠</h2>
      <section class="interaction__inner">
        <h3 class="blind">인터렉션 콘텐츠</h3>
        <article class="interaction__info">
          <h4>Interaction</h4>
          <ul class="interaction__list">
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content">
                  <div class="loading-bar">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                  </div>
                </div>
                <h5 class="interaction-card__title">Loading Bar</h5>
                <div class="interaction-card__controller">
                  <div class="range">
                    <span class="interaction-card__controller-title">SPEED</span>
                    <input type="range" />
                  </div>
                  <div class="color-picker">
                    <span class="interaction-card__controller-title">COLOR</span>
                    <input type="range" />
                  </div>
                </div>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__controller top">
                  <div class="toggle">
                    <fieldset>
                      <span class="toggle-label"></span>
                      <input class="toggle-input" role="switch" type="checkbox" checked>
                    </fieldset>
                  </div>
                </div>
                <div class="interaction-card__content">
                  <div class="loading-circle ver1">
                    <div class="circle"></div>
                  </div>
                  <div class="loading-circle ver1">
                    <div class="circle skew"></div>
                  </div>
                </div>
                <h5 class="interaction-card__title">
                  <span class="sub-title">TYPE 1</span>Loading Circle
                </h5>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content">
                  <div class="loading-circle ver2">
                    <div class="circle">
                      <span></span>
                    </div>
                  </div>
                </div>
                <h5 class="interaction-card__title">
                  <span class="sub-title">TYPE 2</span>Loading Circle
                </h5>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content">
                  <div class="loading-dot">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
                <h5 class="interaction-card__title">Loading Dot</h5>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <h5 class="interaction-card__title">깜짝등장</h5>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <h5 class="interaction-card__title">Example</h5>
              </div>
            </li>
          </ul>
        </article>
        <article class="interaction__info">
          <h4>Interaction</h4>
          <ul class="interaction__list">
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <h5 class="interaction-card__title">Example</h5>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <h5 class="interaction-card__title">Example</h5>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Interaction"
}
</script>

<style scoped>

</style>
