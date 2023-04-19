<template>
  <div class="inner">
    <main class="interaction">
      <h2 class="blind">인터렉션 콘텐츠</h2>
      <div class="interaction__inner">
        <section class="interaction__info">
          <h3>Interaction1</h3>
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
                <strong class="interaction-card__title">Loading Bar</strong>
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
                <strong class="interaction-card__title">
                  <span class="sub-title">TYPE 1</span>Loading Circle
                </strong>
                <div class="interaction-card__sub-content">
                  <p>테스트용</p>
                </div>
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
                <strong class="interaction-card__title">
                  <span class="sub-title">TYPE 2</span>Loading Circle
                </strong>
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
                <strong class="interaction-card__title">Loading Dot</strong>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content">
                  <div class="contents-place">
                    <div class="card">
                      <div class="card-side card-side-front">CARD</div>
                      <div class="card-side card-side-back"></div>
                    </div>
                    <div class="card">
                      <div class="card-side card-side-front">CARD</div>
                      <div class="card-side card-side-back"></div>
                    </div>
                  </div>
                </div>
                <strong class="interaction-card__title">3D</strong>
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
                <div class="interaction-card__content"></div>
                <strong class="interaction-card__title">깜짝등장</strong>
              </div>
            </li>
          </ul>
        </section>
        <section class="interaction__info">
          <h3>Interaction2</h3>
          <ul class="interaction__list">
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <strong class="interaction-card__title">Example</strong>
              </div>
            </li>
            <li class="interaction__item">
              <div class="interaction-card">
                <div class="interaction-card__content"></div>
                <strong class="interaction-card__title">Example</strong>
              </div>
            </li>
          </ul>
        </section>
      </div>
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
