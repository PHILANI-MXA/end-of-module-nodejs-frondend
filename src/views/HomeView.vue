<template>
<div class="container-fluid min-vh-100 p-4">
  <div class="home">
  <div class="wrapper">
    <div class="main-div main-div1">
      <h1>Welcome</h1>
    </div>
    <div class="main-div main-div1">
      <h1>To</h1>
    </div>
    <div class="main-div main-div1">
      <h1>Just</h1>
    </div>
    <div class="main-div main-div2">
      <h1>Products</h1>
    </div>
    <div class="main-div main-div3">
      <h1>Store</h1>
    </div>
    <div class="area">
                      <ul class="squares">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                      </ul>
                  </div>
  </div>
  </div>
  </div >
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.container-fluid{
  background: url(https://i.postimg.cc/Hkm6frvf/Blue.jpg) no-repeat center center/cover  !important;
  background-attachment: fixed;
  background-size: auto;
}

li {
  z-index: -11;
}

.squares {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.squares li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 8s linear infinite;
    bottom: -150px;
}

.squares li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.squares li:nth-child(2) {
    left: 10%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 12s;
}

.squares li:nth-child(3) {
    left: 70%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
}

.squares li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.squares li:nth-child(5) {
    left: 65%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
}

.squares li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 0s;
}

.squares li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 4s;
}

.squares li:nth-child(8) {
    left: 50%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 30s;
}

.squares li:nth-child(9) {
    left: 20%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
    animation-duration: 25s;
}

.squares li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

.squares li:nth-child(11) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
}

.squares li:nth-child(12) {
    left: 50%;
    width: 70px;
    height: 70px;
    animation-delay: 2s;
    animation-duration: 7s;
}

.squares li:nth-child(13) {
    left: 20%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.squares li:nth-child(14) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

.wrapper {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
}

.main-div {
  position: relative;
  margin: 10px;
  background-color: transparent;
}

.main-div1::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
          box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
  z-index: -1;
  -webkit-animation-name: yellow-shadow;
          animation-name: yellow-shadow;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.main-div1::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
          box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
  z-index: -1;
  -webkit-animation-name: cyan-shadow;
          animation-name: cyan-shadow;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.main-div2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
          box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
  z-index: -1;
  -webkit-animation-name: gradient-shadow;
          animation-name: gradient-shadow;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.main-div3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
          box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
  z-index: -1;
  -webkit-animation-name: half-yellow-shadow;
          animation-name: half-yellow-shadow;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.main-div3::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
          box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
  z-index: -1;
  -webkit-animation-name: half-cyan-shadow;
          animation-name: half-cyan-shadow;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

h1 {
  font-size: 50px;
  margin: 0;
  position: relative;
  z-index: 3;
  padding: 20px;
  background-color: #060C1F;
  color: #fff;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

@-webkit-keyframes yellow-shadow {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 50%;
    left: 0;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  75% {
    top: 0;
    left: 50%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

@keyframes yellow-shadow {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 50%;
    left: 0;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  75% {
    top: 0;
    left: 50%;
  }
  100% {
    top: 0;
    left: 0;
  }
}

@-webkit-keyframes cyan-shadow {
  0% {
    right: 0;
    bottom: 0;
  }
  25% {
    right: 0;
    bottom: 50%;
  }
  50% {
    right: 50%;
    bottom: 50%;
  }
  75% {
    right: 50%;
    bottom: 0;
  }
  100% {
    right: 0;
    bottom: 0;
  }
}

@keyframes cyan-shadow {
  0% {
    right: 0;
    bottom: 0;
  }
  25% {
    right: 0;
    bottom: 50%;
  }
  50% {
    right: 50%;
    bottom: 50%;
  }
  75% {
    right: 50%;
    bottom: 0;
  }
  100% {
    right: 0;
    bottom: 0;
  }
}

@-webkit-keyframes gradient-shadow {
  0% {
    -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
            box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
  }
  20% {
    -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
            box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
  }
  40% {
    -webkit-box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
            box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
  }
  60% {
    -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
            box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
  }
  80% {
    -webkit-box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
            box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
  }
  100% {
    -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
            box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
  }
}

@keyframes gradient-shadow {
  0% {
    -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
            box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
  }
  20% {
    -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
            box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
  }
  40% {
    -webkit-box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
            box-shadow: 0 0 17px 3px #0f0,0 0 4px 2px #0f0;
  }
  60% {
    -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
            box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
  }
  80% {
    -webkit-box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
            box-shadow: 0 0 17px 3px #f00,0 0 4px 2px #f00;
  }
  100% {
    -webkit-box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
            box-shadow: 0 0 17px 3px #C586C0,0 0 4px 2px #C586C0;
  }
}

@-webkit-keyframes half-yellow-shadow {
  0% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    top: 0;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }
}

@keyframes half-yellow-shadow {
  0% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    top: 0;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    top: 50%;
    left: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    top: 0;
    left: 0;
    height: 50%;
    width: 50%;
  }
}

@-webkit-keyframes half-cyan-shadow {
  0% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    bottom: 0;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    bottom: 50%;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }
}

@keyframes half-cyan-shadow {
  0% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }
  16.66% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  32.32% {
    bottom: 0;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  49.98% {
    bottom: 50%;
    right: 50%;
    height: 50%;
    width: 50%;
  }
  66.64% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 100%;
  }
  83.3% {
    bottom: 50%;
    right: 0;
    height: 50%;
    width: 50%;
  }
  100% {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 50%;
  }
}


 



</style>
