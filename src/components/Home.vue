<template lang="pug">
    section(class="wrapper") 
      img( @click="isClicked" src="assets/img/go-btn.gif" id="fixed-btn" class="fix-go-btn")     
      section(class="block" id="block-1")
        div(class="s0" id="trigger")
        div(id="block-1-body")
          img(src="assets/img/logo.svg" alt="logo" class="logo" id="logo")          
          img(class="main" src="assets/img/pic/main.svg" id="main")
          img(class="main-left" src="assets/img/pic/main-left.png" id="main-left")
          img(class="main-right" src="assets/img/pic/main-right.png" id="main-right")
          a(id="go-down" href="#block-2" class="scrollto")
            img( src="assets/img/go-down.gif")
          
      section(class="block" id="block-2")
        div(class="block-body")
          p(class="block-text") В этом году команда Delivery Club прокачивала скиллы на полную:<br>  
          p(class="text-wh-desc") собирала самые странные заказы, путешествовала в&nbsp;самые дальние уголки —<br> и&nbsp;все со&nbsp;скоростью Усейна Болта. За&nbsp;это время мы многое о&nbsp;вас узнали и&nbsp;теперь хотим этим поделиться.
          p(class="block-text") Подвели итоги-2019:<br> 
          p(class="text-wh-desc") рассказываем про вас, ваших соседей и&nbsp;вашего начальника. Смотрите личную статистику, шерьте результаты с&nbsp;друзьями — и&nbsp;ловите в&nbsp;конце промокод&nbsp;на&nbsp;10%.
          p(class="block-text") Подождите бежать:<br>
          p(class="text-wh-desc") это еще не все! Среди тех, кто закажет в&nbsp;DC по нашему промокоду,<br> мы разыграем 5&nbsp;скидок на 5&nbsp;000&nbsp;₽. Так что поспешите :) Все, теперь поехали!
          div(href="#block-3" class="start-btn")    
            div(@click="isClicked"  class="start-btn-your")
              img(src="assets/img/your-stat.png" class="start-btn-img")  
            a(href="#block-3" class="start-btn-all scrollto")
              img(src="assets/img/all-stat.png" class="start-btn-img")    
      section(class="block" id="block-3")
        div(class="s0" id="trigger-3")
        div(id="block-3-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text") сколько мы доставили еды за год?
          div(class="block-3-month")
              img(src="assets/img/pic/12-m.png" class="block-3-month-img m-12")
              div(class="block-3-month-txt") Для команды DC этот год был по-настоящему драйвовым. Мы много работали, пробовали что-то новое&nbsp;и каждый день учились на своих и&nbsp;чужих ошибках. DC работает более чем в 100 городах — и&nbsp;все благодаря вам!
          div(class="block-3-bottom")            
            div(class="block-3-item")
              div(class="block-3-item-score" id="block-3-item-score-1")
                p(class="block-3-item-score-txt" id="block-3-item-score-txt-1") 132 565
              img(src="assets/img/items/item1.png" alt="item1" class="block-3-item-img")
              p(class="block-3-item-txt") Поке
            div(class="block-3-item")
              div(class="block-3-item-score" id="block-3-item-score-2") 
                p(class="block-3-item-score-txt" id="block-3-item-score-txt-2") 461 255
              img(src="assets/img/items/item2.png" alt="item2" class="block-3-item-img")
              p(class="block-3-item-txt block-3-item-long") Бургеры
            div(class="block-3-item")
              div(class="block-3-item-score" id="block-3-item-score-3")
                p(class="block-3-item-score-txt" id="block-3-item-score-txt-3") 2 559 582
              img(src="assets/img/items/item3.png" alt="item3" class="block-3-item-img")
              p(class="block-3-item-txt") Пицца
            div(class="block-3-item")
              div(class="block-3-item-score" id="block-3-item-score-4") 
                p(class="block-3-item-score-txt" id="block-3-item-score-txt-4") 4 300 193
              img(src="assets/img/items/item4.png" alt="item4" class="block-3-item-img")
              p(class="block-3-item-txt") Крылья
            div(class="block-3-item")
              div(class="block-3-item-score" id="block-3-item-score-5") 
                p(class="block-3-item-score-txt" id="block-3-item-score-txt-5") 6 900 402
              img(src="assets/img/items/item5.png" alt="item5" class="block-3-item-img")
              p(class="block-3-item-txt") Роллы

      section(class="block" id="block-4")
        div(class="s0" id="trigger-4")
        div(id="block-4-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-4") Самый большой заказ?
          div(class="block-4-bottom")
            div(class="block-4-first")
              img(src="assets/img/pic/400.png" class="block-4-first-img")
              p(class="block-4-first-txt") Бизнес-ланч<br>по-грузински
            img(src="assets/img/pic/hinkal.png" class="block-4-second-img")
            div(class="block-4-thrity")
              div(class="block-4-thrity-txt") Хинкали давно захватили наши умы&nbsp;и желудки. Сегодня они попадают&nbsp;в гастрономические топы и на щелчок обходят пиццу и&nbsp;суши. Грузинские рестораны растут, процветают, а&nbsp;мы активно работаем с&nbsp;ними в&nbsp;паре. Так что за хинкали, пхали или хачапури смело бегите в&nbsp;DC — доставим быстро, еще и&nbsp;по промокоду со скидкой 10%!
              div(class="block-4-thrity-imgs")
                img(src="assets/img/pic/hinkal-left.png" id="block-4-hinkal-left")
                img(src="assets/img/pic/hinkal-center.png" id="block-4-hinkal-center")
                img(src="assets/img/pic/hinkal-right.png" id="block-4-hinkal-right")

      section(class="block" id="block-5")
        div(class="s0" id="trigger-5")
        div(id="block-5-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-5") Самый маленький заказ?
          div(class="block-5-bottom")
            img(src="assets/img/pic/move-hleb.png" id="block-5-move-hleb")
            div(class="block-5-first")
              img(src="assets/img/pic/hleb.png" class="block-5-first-l")
              div(class="block-5-first-r")
                div(class="block-5-first-r-t") Кухня на районе выручит, если забыли купить хлеб <br>к обеду
                div(class="block-5-first-r-b") Такая простая вещь, как хлеб, может неплохо дополнить вашу вкусовую палитру! Сейчас его готовят на любой вкус: с&nbsp;орешками, ягодами, льном, без глютена и&nbsp;дрожжей. Что не назовете — с&nbsp;этим уже будет хлеб. Хотите новых ощущений к&nbsp;обеду — заглядывайте в&nbsp;Delivery Club. Мы еще и&nbsp;клевые соусы вам подгоним!
      
      section(class="block" id="block-6")
        div(class="s0" id="trigger-6")
        div(id="block-6-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-6") Cамый северный заказ
            img(src="assets/img/medved.png" class="block-6-medved")
          div(class="block-6-bottom")            
            div(class="block-6-first")              
              img(src="assets/img/pic/murma.png" class="block-6-first-l")
              div(class="block-6-first-r")
                div(class="block-6-first-r-t") Еще и полярное сияние увидели
                div(class="block-6-first-r-d") А поехали мы туда не просто так. Мурманск — город аутентичной выпечки. Тут есть и&nbsp;«обварыши», и&nbsp;«козули»: и&nbsp;это не меню к&nbsp;Хэллоуину. Первую сладость делают из ошпаренного кипятком теста, а&nbsp;вторая выглядит как милые фигурки животных с&nbsp;глазурью из взбитых сливок. Подтверждаем всей командой: это безумно вкусно!
            div(class="block-6-second")
              img(src="assets/img/murm-left.png" id="block-6-second-left")
              img(src="assets/img/murm-right.png" id="block-6-second-right")

      section(class="block" id="block-7")
        div(class="s0" id="trigger-7")
        div(id="block-7-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-7") Самый южный заказ
          div(class="block-7-bottom")
            div(class="block-7-first")
              img(src="assets/img/vladivastok.png" class="block-7-first-vlad")
              div(class="block-7-first-block")
                div(class="block-7-first-txt-left") И даже не на 2000
                div(class="block-7-first-txt-right") Во Владивосток стоит ехать как минимум ради крабов: их подают на стол прямиком из Японского моря. В&nbsp;местных ресторанчиках мясо варят на&nbsp;пару или&nbsp;готовят в&nbsp;остром томатном соусе. Если хотите свежайшего краба уже сейчас, заказывайте в&nbsp;Delivery Club — тут&nbsp;и&nbsp;розыгрыш скидки на 5&nbsp;000&nbsp;₽ будет кстати ;)
              div(class="block-7-second-block")
                img(src="assets/img/gamak.png" id="block-7-second-gamak")
                img(src="assets/img/kisa.png" id="block-7-second-kisa")
      
      section(class="block" id="block-8")
        div(class="s0" id="trigger-8")
        div(id="block-8-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-8") Самое популярное блюдо
          div(class="block-8-bottom")
            img(class="block-8-bottom-chizb" src="assets/img/chizb.png")
            div(class="block-8-bottom-block")
              div(class="block-8-bottom-block-left")
                div(class="block-8-bottom-block-t") Из McDonald’s — невозможно не думать о нем 
                div(class="block-8-bottom-block-d") Больше всего их любят, конечно же,&nbsp;в Америке. Настолько, что в&nbsp;2011 году там приготовили чизбургер в&nbsp;352&nbsp;кг! Калорий&nbsp;в этом счастье было больше миллиона, и&nbsp;история сразу побила все возможные&nbsp;и невозможные рекорды. Что, уже проголодались? Тогда заходите к&nbsp;нам — обещаем самые сочные котлетки&nbsp;:)
              img(class="block-8-bottom-block-right" src="assets/img/chizb-anim.gif")

      section(class="block" id="block-9")
        div(class="s0" id="trigger-9")
        div(id="block-9-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-9") Самый популярный десерт
          div(class="block-9-bottom")
            img(src="assets/img/vishn.png" class="block-9-bottom-vish")
            div(class="block-9-bottom-body")
              div(class="block-9-bottom-left") Из McDonald’s — Такой маленький, но такой вкусный
              img(class="block-9-mob-pirog" src="assets/img/mob-pirog.svg")
              div(class="block-9-bottom-right") Культ этого пирожка есть только в&nbsp;России, и&nbsp;появился он вместе с&nbsp;McDonald’s. В&nbsp;США&nbsp;и&nbsp;Европе лидирует яблочный пирожок, а&nbsp;в&nbsp;Китае предпочитают свой вариант — пирожок с&nbsp;растением тáро, который прозвали волосатым картофелем. Уже захотели? Бегите к&nbsp;нам:&nbsp;с промокодом на 5&nbsp;000&nbsp;₽ у&nbsp;вас широкий коридор возможностей.
            img(class="block-9-bottom-img" src="assets/img/slay.png")
            img(id="block-9-bottom-img-pirog" src="assets/img/pirog.png")

      section(class="block" id="block-10")
        div(class="s0" id="trigger-10")
        div(id="block-10-body")
          div(class="block-3-top")
            img(class="arrow-btn" src="assets/img/pic/arrow-down.png")
            div(class="block-title-text" id="block-title-text-10") Самый быстрый курьер
          div(class="block-10-bottom")
            img(src="assets/img/alisher.png" class="block-10-bottom-alisher")
            div(class="block-10-bottom-body")
              div(class="block-10-txt")
                div(class="block-10-txt-t") Шумахер доставки
                div(class="block-10-txt-d") Иногда мы поражаемся нашим курьерам. Кажется, если будет апокалипсис, они все равно привезут вам пиццу без опозданий. Ребята преодолеют любые холода и&nbsp;пробки, чтобы вас накормить, — так давайте порадуем их улыбкой при следующей встрече?
              img(src="assets/img/shumaher.png" id="block-10-shumaher")

      section(class="block " id="block-11")
        div(class="s0" id="trigger-11")
        div(id="block-11-body") 
          div(id="center-likes")
            img(id="block-11-body-like" class="block-11-body-like" src="assets/img/like-left.png")
            img(id="block-11-body-like-right" class="block-11-body-like" src="assets/img/like-right.png")
          div(@click="isClicked" class="block-11-body-btn" style="background:url(assets/img/btn-year.png); background-repeat:no-repeat; background-size:contain;") Мой год еды
    
      transition(name="fade")
          div(v-if="isOpen" class="overlay" )            
            div(class="modal-text")
              img(@click="isClickCLose" src="assets/img/close.png" class="modal-close-btn")
              div(class="modal-body")
                p(class="modal-text-t" v-html="textTitle") 
                p(v-if="isVisDesck" class="modal-text-d") {{textDescr}}
                the-mask(v-if="isVisPhone" @input="changeInputPhone" @change="changeInputPhone" id="phone" type="tel" :mask="['+7 ###-###-##-##']" placeholder="Номер телефона")
                the-mask(v-if="isVisCode" @input="changeInputCode" @change="changeInputCode" id="code" type="tel" value='' :mask="['##-##']" placeholder="Код")
                a(v-if="isVisOk" @click="isClickedOk" class="modal-btn") {{textBtn}} 
                div(v-if="isLoader" class="div-loader" id="progress-load")
                  img(src="assets/img/loader-boy.png" id="loader-boy")
      
            
     
</template>


<script>
import {TheMask} from 'vue-the-mask'
// ВСЕ ФУНКЦИИ ВЗАИМОДЕЙСТВИЯ С API
import {Auth, PostPhone,PostUser, GetUser, GetPromo, GetImage} from '../js/connect'

export default {
  data(){
      return {
          isOpen: false,
          textTitle: 'Введите свой номер телефона',
          textDescr: 'чтобы мы посчитали вашу статистику заказов за год',
          textBtn: 'Ok',
          allScenes: null,
          isVisOk: false,
          isVisDesck: true,
          isVisPhone: true,
          isVisCode: false,
          isLoader: false,
          requestId: null,
          now: 1,
          phone: null,
          phoneCode: null
      }
  },
  components: {
    TheMask
  },
  methods: {    
      isClicked(e){
          this.isOpen = true   
          console.log(document.cookie)
          console.log(this.getCookie('X-USER-AUTHORIZATION'))
          //this.delete_cookie('X-USER-AUTHORIZATION') 

          if(this.getCookie('X-USER-AUTHORIZATION') == undefined){
              // ПЕРВЫЙ ЗАПРОС НА LOGIN
              Auth().then(data => {
              console.log(data)
              }).catch( err =>{
                console.log(err)
              })
          } else {
            GetUser()
                        .then(result =>{
                          this.$store.commit('change', result.data)
                          console.log(result)
                          GetPromo()
                          .then(result => {
                            this.$store.commit('changePromo', result.data)
                            GetImage(result.imgURI).
                            then(result =>{                              
                              this.$router.push({ path: '/final' })
                              window.metaImage = result
                            }).
                            catch( err =>{
                              this.goBackErr(err) 
                              console.log('Не скачалась картинка') 
                            })


                            

                          }).catch( err =>{
                            this.goBackErr(err)  
                          })   
                          
                        }).catch( err =>{
                            if(err.response.status == 404){
                              GetPromo()
                              .then(result => {
                                this.$store.commit('changePromo', result.data)
                                this.$router.push({ path: '/final' })
                              }).catch( err =>{
                                this.goBackErr(err)  
                              })   
                            } else {
                              // Гет запрос на получение данных не прошёл                                 
                              this.goBackErr(err)   
                            }
                            
                          })

          }
          
      },
      isClickCLose(e){
          this.isOpen = false   
      },
      isClickedOk(e){      
                if(this.now == 1){
                  this.now++
                  PostPhone(this.phone)
                  .then(result => {
                    this.isVisCode = true 
                    this.isVisPhone = false
                    this.isVisDesck = false
                    this.textTitle = 'Последний шаг — введите проверочный код'          
                    this.requestId = result.data.requestId 
                      
                  }).catch( err =>{
                    
                    this.isVisPhone = false
                    this.isVisCode = false
                    this.isVisDesck = false            
                    this.textTitle = 'Скорее всего, вы ввели неправильный проверочный код. Пожалуйста, <br> проверьте корректность введённого кода и номера телефона'
                    this.textBtn = 'Попробовать еще раз'
                    setTimeout(() =>{
                        this.textTitle = 'Введите свой номер телефона'
                        this.textDescr = 'чтобы мы посчитали вашу статистику заказов за год'
                        this.isVisOk = false
                        this.isVisDesck = true
                        this.isVisPhone = true
                        this.isVisCode = false
                    }, 2000);
                  })  
                } else {
                  PostUser(this.requestId, this.phoneCode)
                  .then(result => {
                    // АВТОРИЗАЦИЯ ПРОШЛА ПОСЛЕ ЛОУДЕРА УСПЕШНО
                    // ВМЕСТО ОБЪЕКТА С БАЗОВЫМ СОДЕРЖИМЫМ В STATE ЗАПИСЫВАЕМ ПОЛУЧЕННУЮ ПОСЛЕ ЗАПРОСА ДАННЫЕ, ЧЕРЕЗ НЕЁ НА ФИНАЛЬНОЙ СТРАНИЦЕ ВЫВОДИТСЯ КОНТЕНТ
                        this.isVisPhone = false
                        this.isVisCode = false
                        this.isVisDesck = true     
                        this.isVisOk = false     
                        this.isLoader = true
                        this.textTitle = 'Немного подождите, мы собираем статистику...'
                        this.textDescr = 'Вы удивитесь, но из арахисового масла делают не только блюда, но и алмазы. Первый такой бриллиант изготовили в Германии'
                        
                        
                        GetUser()
                        .then(result =>{
                          this.$store.commit('change', result.data)
                          console.log(result)
                          GetPromo()
                          .then(result => {
                            this.$store.commit('changePromo', result.data)
                            GetImage(result.imgURI).
                            then(result =>{                              
                              this.$router.push({ path: '/final' })
                              window.metaImage = result
                            }).
                            catch( err =>{
                              this.goBackErr(err) 
                              console.log('Не скачалась картинка') 
                            })
                          }).catch( err =>{
                            this.goBackErr(err)  
                          })   
                          
                        }).catch( err =>{
                            if(err.response.status == 404){
                              GetPromo()
                              .then(result => {
                                this.$store.commit('changePromo', result.data)
                                GetImage(result.imgURI).
                                then(result =>{                              
                                  this.$router.push({ path: '/final' })
                                  window.metaImage = result
                                }).
                                catch( err =>{
                                  this.goBackErr(err) 
                                  console.log('Не скачалась картинка') 
                                })
                              }).catch( err =>{
                                this.goBackErr(err)  
                              })   
                            } else {
                              // Гет запрос на получение данных не прошёл                                 
                              this.goBackErr(err)   
                            }
                            
                          })
                        
                          
                  }).catch( err =>{
                        // Авторизация не прошла            
                        this.goBackErr(err)                
                  })  
                }                              
      },
      goBackErr(err){
        console.log(err)
                              this.isVisPhone = false
                              this.isVisCode = false
                              this.isVisDesck = false       
                              this.isVisOk = false    
                              this.isLoader = false 
                              this.textTitle = 'Скорее всего, вы ввели неправильный проверочный код. Пожалуйста, <br> проверьте корректность введённого кода и номера телефона'
                              this.textBtn = 'Попробовать еще раз'  
                              setTimeout(() =>{
                                    this.textTitle = 'Введите свой номер телефона'
                                    this.textDescr = 'чтобы мы посчитали вашу статистику заказов за год'
                                    this.isVisOk = false
                                    this.isVisDesck = true
                                    this.isVisPhone = true
                                    this.isVisCode = false
                                    
                                }, 2000);    
      },
      changeInputPhone(e){
        if(e.length == 10){
          this.isVisOk = true
          // ПОЛУЧЕНИЕ REQUEST ID         
          this.phone = '7' + e;                  
        }
      },
      changeInputCode(e){        
        if(e.length == 4){    
          this.isVisOk = true   

          // ЗДЕСЬ КОД ВВЕДЕННЫЙ В INPUT ЗАПОМИНАЕТСЯ В DATA 
          this.phoneCode = e       
        }        
      },
      getCookie(name) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      },
      delete_cookie( name ) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';        
      },
      moveFunc(){
            let scenes = [];

            var controller = new ScrollMagic.Controller("#block-1");
            var timeline = new TimelineMax();

            var tween = TweenMax.to("#main-left", 1, {left:'22%'});
            var tween2 = TweenMax.to("#main-right", 1, {right:'26%'});
            var tween3 = TweenMax.to("#main", 1, {opacity:1});
            var tween4 = TweenMax.to("#go-down", 1, {opacity:1});
            timeline.add(tween, "first").add(tween2, "first").add(tween3, "first").add(tween4, "first");


            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger"})
                .setTween(timeline)						  
                .addTo(controller));


            
            controller = new ScrollMagic.Controller("#block-3");
            timeline = new TimelineMax();

            
            tween = TweenMax.to("#block-title-text", 1, {opacity:1, transform:'scale(1)'});
            tween2 = TweenMax.to("#block-3-item-score-txt-1", 1, {opacity:1});
            tween3 = TweenMax.to("#block-3-item-score-1", 1, {height:"28%"});
            var tween4 = TweenMax.to("#block-3-item-score-2", 1, {height:"35%"});
            var tween5 = TweenMax.to("#block-3-item-score-3", 1, {height:"43%"});
            var tween6 = TweenMax.to("#block-3-item-score-4", 1, {height:"55%"});
            var tween7 = TweenMax.to("#block-3-item-score-5", 1, {height:"65%"});
            var tween8 = TweenMax.to("#block-3-item-score-txt-2", 1, {opacity:1});
            var tween9 = TweenMax.to("#block-3-item-score-txt-3", 1, {opacity:1});
            var tween10 = TweenMax.to("#block-3-item-score-txt-4", 1, {opacity:1});
            var tween11 = TweenMax.to("#block-3-item-score-txt-5", 1, {opacity:1});
            
            timeline.add(tween, "first").add(tween2, "first").add(tween3, "first").add(tween4, "first").add(tween5, "first").add(tween6, "first").add(tween7, "first").add(tween8, "first").add(tween9, "first").add(tween10, "first").add(tween11, "first");

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-3", duration: '100%', triggerHook: 0})
                .setTween(timeline)				
                .addTo(controller)
                .setPin("#block-3-body"));


            controller = new ScrollMagic.Controller("#block-4");
            timeline = new TimelineMax();

            
            tween = TweenMax.to("#block-title-text-4", 1, {opacity:1, transform:'scale(1)'});    
            tween2 = TweenMax.to("#block-4-hinkal-left", 1, {margin:"-30% -15% 0 0"});  
            tween3 = TweenMax.to("#block-4-hinkal-center", 1, {margin:"-11% 0 0 0"});  
            tween4 = TweenMax.to("#block-4-hinkal-right", 1, {margin:"-50% 0 0 -17%"});        
            
            timeline.add(tween, "first").add(tween2, "first").add(tween3, "first").add(tween4, "first");

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-4", duration: '100%', triggerHook: 0})
                .setTween(timeline)						               
                .addTo(controller)
                .setPin("#block-4-body"));


            controller = new ScrollMagic.Controller("#block-5");
            timeline = new TimelineMax();

            
            tween = TweenMax.to("#block-title-text-5", 1, {opacity:1, transform:'scale(1)'});         
            tween2 = TweenMax.to("#block-5-move-hleb", 1, {left: '3%', marginTop: '18%'});

            timeline.add(tween, "first").add(tween2, "first");

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-5", duration: '100%', triggerHook: 0})
                .setTween(timeline)						              
                .addTo(controller)
                .setPin("#block-5-body"));


            
            controller = new ScrollMagic.Controller("#block-6");
            timeline = new TimelineMax();

            
            tween = TweenMax.to("#block-title-text-6", 1, {opacity:1, transform:'scale(1)'});         
            tween2 = TweenMax.to("#block-6-second-left", 1, {left: '-5%'});  
            tween3 = TweenMax.to("#block-6-second-right", 1, {right:'-10%'});  


            timeline.add(tween, "first").add(tween2, "first").add(tween3, "first");

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-6", duration: '100%', triggerHook: 0})
                .setTween(timeline)						              
                .addTo(controller)
                .setPin("#block-6-body"));            

            controller = new ScrollMagic.Controller("#block-7");
            timeline = new TimelineMax();

            
            tween = TweenMax.to("#block-title-text-7", 1, {opacity:1, transform:'scale(1)'});    
            tween2 = TweenMax.to("#block-7-second-kisa", 1, {width:'40%'});           
          
            timeline.add(tween, "first").add(tween2, "first");
            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-7", duration: '100%', triggerHook: 0})
                            .setTween(timeline)						
                            
                            .addTo(controller)
                            .setPin("#block-7-body"));


            controller = new ScrollMagic.Controller("#block-8");
            timeline = new TimelineMax();
            
            tween = TweenMax.to("#block-title-text-8", 1, {opacity:1, transform:'scale(1)'});    
                      
          
            timeline.add(tween, "first");
            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-8", duration: '100%', triggerHook: 0})
                            .setTween(timeline)						            
                            .addTo(controller)
                            .setPin("#block-8-body"));


            controller = new ScrollMagic.Controller("#block-9");
            timeline = new TimelineMax();  

            tween = TweenMax.to("#block-title-text-9", 1, {opacity:1, transform:'scale(1)'});   
            tween2 = TweenMax.to("#block-9-bottom-img-pirog", 1, {marginTop:'75vh', transform:'rotate(100deg)'});    

            timeline.add(tween, "first").add(tween2, "first");            
            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-9", duration: '100%', triggerHook: 0})
                            .setTween(timeline)		
                            .addTo(controller)
                            .setPin("#block-9-body"));


            controller = new ScrollMagic.Controller("#block-10");
            timeline = new TimelineMax();

            tween = TweenMax.to("#block-title-text-10", 1, {opacity:1, transform:'scale(1)'});    
              
            timeline.add(tween, "first");

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-10", duration: '100%', triggerHook: 0})
                            .setTween(timeline)		
                            .addTo(controller)
                            .setPin("#block-10-body"));


            tween2 = TweenMax.to("#block-10-shumaher", 1, {marginRight:'0%'}); 

            new ScrollMagic.Scene({triggerElement: "#trigger-10", duration: '60%', triggerHook: 0})
                            .setTween(tween2)	
                            .addTo(controller);

            tween2 = TweenMax.to("#block-10-shumaher", 1, {marginTop:'-20%', marginRight:'130%'}); 

            scenes.push(new ScrollMagic.Scene({triggerElement: "#trigger-10", duration: '40%', offset: '1100px'})
                            .setTween(tween2)			
                            .addTo(controller));


            controller = new ScrollMagic.Controller("#block-11");
            timeline = new TimelineMax();
            
            tween = TweenMax.to("#block-11-body-like", 1, {left: '0'});   
            tween2 = TweenMax.to("#block-11-body-like-right", 1, {right: '0'}); 
            tween3 = TweenMax.to("#fixed-btn", 1, {opacity: 0}); 
                      
            timeline.add(tween, "first").add(tween2, "first").add(tween3, "first");
            scenes.push(new ScrollMagic.Scene({triggerElement: "#block-11"})
                            .setTween(timeline)	
                            .addTo(controller));

            return scenes            
      },
  },
  mounted() {   
    if($(window).width() > 900){
            this.allScenes = this.moveFunc();
          }          
        
    $(document).ready(function() {
   var margin = 0; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 1600, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});
  },
  beforeMount(){

          $(window).resize(function() {
           if($(window).width() < 900){
             if(this.allScenes) {               
               for(let item of this.allScenes) item.enabled(false)
             }
           } else {
             this.allScenes
           }
          });



      }

      


}

</script>
