<template>

  <div class="topnavAndBanner">
    <Topnav></Topnav>

    <div class="banner">
      <h1>Sakula UI</h1>
      <h2>一个有霓虹味道的图形组件</h2>
      <p class="actions">
        <a href="https://github.com/laohubb/sakula-ui">GitHub</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
    <div class="sakula">
      <div class="camera -x">
        <div class="camera -y">
          <div class="camera -z">
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="drop">
              <div class="z">
                <div class="slide">
                  <div class="move">
                    <div class="stagger">
                      <div class="reverse">
                        <div class="rotate">
                          <div class="size">
                            <div class="sakura"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用 Vue3 Composition API 构建组件</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-dengpao_"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极易理解</p>
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {

  components: {Topnav}
};
</script>

<style lang="scss" scoped>
$pink: darken(#f5c4cb, 20);
$border-radius: 4px;
$color: darken(#f5c4cb, 20);

.topnavAndBanner {
  width: 100%;
  background: linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%);
  //border-bottom-left-radius:$borderRadius;
  .sakula {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .title {
      font-size: 6rem;
      color: #fcc;
    }

    div {
      transform-style: preserve-3d;
      top: 0;
      left: 0;
    }

    .camera {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &.-y {
        animation: cameraY 30s linear infinite;
      }

      &.-x {
        transform: rotateX(10deg) translateY(-300px);
      }
    }

    .sakura {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%;
      background: #fcc;
      transform: rotateZ(45deg);

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fcc;
        border-radius: 0% 100% 0% 100% / 0% 100% 0% 100%;
        transform-origin: 100% 100%;
        transform: rotate(15deg);
      }
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      animation: slide 8s linear infinite;
    }

    .drop {
      position: absolute;
      top: 0;
      left: 0;
      animation: drop 4s linear infinite;

      @for $i from 1 through 200 {
        &:nth-child(#{$i}) {
          left: random(100) + 0%;
          animation-delay: random(9999) * -1ms;
          animation-duration: random(8) + 5s;

          .slide {
            animation-delay: random(9999) * -1ms;
            animation-duration: random(10) + 5s;
          }

          .size {
            transform: scale(random(2) + 1);
            // transform: translateZ(random(500) * -1px);
          }

          .rotate {
            animation-delay: random(9999) * -1ms;
            animation-duration: random(4) + 1s;
          }

          $moveDelay: random(9999) * -1ms;

          .move, .reverse {
            animation-delay: $moveDelay;
          }

          .z {
            transform: translateZ(random(2000) - 1000px);
          }

        }
      }

      @for $i from 1 through 100 {
        &:nth-child(#{$i}) {
          .slide {
            animation: slide 8s linear infinite reverse;
            animation-delay: random(9999) * -1ms;
            animation-duration: random(10) + 10s;
          }

          .sakura {
            transform: rotateZ(-45deg);
          }

          .size {
            transform: scale(random(1));
          }
        }
      }
    }

    .move {
      animation: rotateZ 10s linear infinite;
    }

    .reverse {
      animation: rotateZ 10s linear infinite reverse;
    }

    .stagger {
      transform: translateY(150px);
    }

    .rotate {
      animation: rotateY 2s linear infinite;
    }

    @keyframes rotateZ {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }

    @keyframes rotateY {
      0% {
        transform: rotateZ(-45deg) rotateY(0deg);
      }

      100% {
        transform: rotateZ(-45deg) rotateY(360deg);
      }
    }

    @keyframes cameraX {
      0% {
        transform: rotateX(0deg);
      }

      100% {
        transform: rotateX(360deg);
      }
    }

    @keyframes cameraY {
      0% {
        transform: rotateY(0deg);
      }

      100% {
        transform: rotateY(360deg);
      }
    }

    @keyframes cameraZ {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }


    @keyframes slide {
      0% {
        transform: translateX(-2000px);
      }

      100% {
        transform: translateX(2000px);
      }
    }

    @keyframes drop {
      0% {
        transform: translateY(-100px);
      }

      100% {
        transform: translateY(1200px);
      }
    }
  }
}

.features {

  margin: 56px auto;
 padding: 0 16px;

  @media (min-width: 800px) {
   >ul{
     >li{
         width: 50%;
     }
   }
  }

  @media (min-width: 1200px) {
    width:1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.topnav {
  position: relative;
}

.banner {
  position: relative;
  z-index: 10;
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $pink;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
