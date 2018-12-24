<template>
  <div class="top">
    <section class="box">
      <ul class="texts">
        <p>越是错综复杂的问题。</p>
        <p>就越要根据简单的原理和朴素的思想进行判断和行动。</p>
        <p>我想这是拨开云雾见南山，直接洞悉事物本质和解决问题的最佳方法。</p>
        <p> ——稻盛和夫 《活法》。</p>
      </ul>
      <div class="avatar"><a href="#"><span>Jcohy</span></a></div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "top-section"
  }
</script>

<style>
  .box {
    width: 1000px;
    margin: auto;
    overflow: hidden
  }

  .top {
    background: url(../../../static/images/banner/banner_top.jpg) top center;
    height: 265px;
    overflow: hidden
  }

  .texts {
    width: 350px;
    line-height: 26px;
    margin: 60px 0 0 20px;
    float: left;
    font-size: 14px;
  }

  .texts p {
    -webkit-transform: translate(60px);
    -moz-transform: translate(60px);
    -o-transform: translate(60px);
    -ms-transform: translate(60px);
    transform: translate(60px);
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8), 2px 2px 3px rgba(180, 151, 151, 0.3);
  }

  .texts p:nth-child(1) {
    -webkit-animation: animations 3s ease-out 1s backwards;
    -moz-animation: animations 3s ease-out 1s backwards;
    -o-animation: animations 3s ease-out 1s backwards;
    -ms-animation: animations 3s ease-out 1s backwards;
    animation: animations 3s ease-out 1s backwards;
  }

  .texts p:nth-child(2) {
    -webkit-animation: animations 3s ease-out 4s backwards;
    -moz-animation: animations 3s ease-out 4s backwards;
    -o-animation: animations 3s ease-out 4s backwards;
    -ms-animation: animations 3s ease-out 4s backwards;
    animation: animations 3s ease-out 4s backwards;
  }

  .texts p:nth-child(3) {
    -webkit-animation: animations2 5s ease-in-out 7s backwards;
    -moz-animation: animations2 5s ease-in-out 7s backwards;
    -o-animation: animations2 5s ease-in-out 7s backwards;
    -ms-animation: animations2 5s ease-in-out 7s backwards;
    animation: animations2 5s ease-in-out 7s backwards;
  }

  @-webkit-keyframes animations {
    0% {
      -webkit-transform: translate(0);
      opacity: 0;
    }
    50% {
      -webkit-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -webkit-transform: translate(60px);
      opacity: 1;
    }
  }

  @-moz-keyframes animations {
    0% {
      -moz-transform: translate(0);
      opacity: 0;
    }
    50% {
      -moz-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -moz-transform: translate(60px);
      opacity: 1;
    }
  }

  @-o-keyframes animations {
    0% {
      -o-transform: translate(0);
      opacity: 0;
    }
    50% {
      -o-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -o-transform: translate(60px);
      opacity: 1;
    }
  }

  @-ms-keyframes animations {
    0% {
      -ms-transform: translate(0);
      opacity: 0;
    }
    50% {
      -ms-transform: translate(30px);
      opacity: .5;
    }
    100% {
      -ms-transform: translate(60px);
      opacity: 1;
    }
  }

  @keyframes animations {
    0% {
      transform: translate(0);
      opacity: 0;
    }
    50% {
      transform: translate(30px);
      opacity: .5;
    }
    100% {
      transform: translate(60px);
      opacity: 1;
    }
  }

  @-webkit-keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: .8;
    }
    45% {
      opacity: .3;
    }
    50% {
      opacity: .8;
    }
    55% {
      opacity: .3;
    }
    60% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: .8;
    }
    45% {
      opacity: .3;
    }
    50% {
      opacity: .8;
    }
    55% {
      opacity: .3;
    }
    60% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: .8;
    }
    45% {
      opacity: .3;
    }
    50% {
      opacity: .8;
    }
    55% {
      opacity: .3;
    }
    60% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: .8;
    }
    45% {
      opacity: .3;
    }
    50% {
      opacity: .8;
    }
    55% {
      opacity: .3;
    }
    60% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: .8;
    }
    45% {
      opacity: .3;
    }
    50% {
      opacity: .8;
    }
    55% {
      opacity: .3;
    }
    60% {
      opacity: .8;
    }
    100% {
      opacity: 1;
    }
  }
  .avatar {
    float: right;
    margin: 40px;
    width: 130px;
    height: 130px;
    border-radius: 100%;
    overflow: hidden;
    border: #FFF 4px solid
  }

  .avatar a {
    display: block;
    padding-top: 97px;
    width: 160px;
    background: url(../../../static/images/ico/jcohy.png) no-repeat;
    background-size: 130px 130px
  }

  .avatar a span {
    display: block;
    margin-top: 63px;
    padding-top: 8px;
    width: 130px;
    height: 55px;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background: rgba(0, 0, 0, .5);
    -webkit-transition: margin-top .2s ease-in-out;
    -moz-transition: margin-top .2s ease-in-out;
    -o-transition: margin-top .2s ease-in-out;
    transition: margin-top .2s ease-in-out;
  }

  .avatar a:hover span {
    display: block;
    margin-top: 0;
  }
</style>
