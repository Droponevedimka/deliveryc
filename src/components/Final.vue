<template lang="pug">
    section(class="wrapper-final" )        
      div(class="final-main" :class="`final-${id}`") 
        div(class="final-main-left")
            a(id="myHiddenLink" style="overflow:hidden; display:none;")
            router-link(to="/")
                img(src="assets/img/final/logo.png" class="final-logo")
            a(class="txt-mobil" target="_blank" href="https://www.delivery-club.ru/promo_rules") Правила акции.
            img(:src="`assets/img/final/img-${id}.png`" class="final-img")
            div(class="final-main-title") Самый большой заказ
            div(class="final-main-items-left") {{allOrder}}
        div(class="final-main-right")
            div(class="final-main-right-zakaz") Мой год еды 
            div(class="final-main-right-name") {{nameZak}}
            div(class="final-main-right-desc") Мир еды таит в себе много вкусного и неизведанного. Пока вы только встали на путь познания. Мы вам даже немного завидуем — впереди столько гастрономического удовольствия! Обещаем стать проводниками в вашем фуд путешествии :)
            div(class="final-main-title") Топовое блюдо
            div(class="final-main-items") {{result.topFood}}
            div(class="final-main-title") Топовый ресторан
            div(class="final-main-items") {{result.topRestaurant}}
            div(class="final-main-title") Вы встретили курьера
            div(class="final-main-items") {{result.orders}} раз
            div(class="final-main-title") Вы сэкономили на готовке
            div(class="final-main-items") {{result.savedTimeInMinutes}} минут
            div(class="final-main-title-mob") Самый большой заказ
            div(class="final-main-title-left-mob") {{allOrder}}
            
      div(class="final-bot") 
        div(class="final-bot-left")
            a(:href="`https://vk.com/share.php?&url=${link}`" class="final-soc-link")
                img(src="assets/img/final/vk.svg" class="final-soc")
            a(href="https://twitter.com/intent/tweet?text=Получил промокод на скидку 10%. Хочешь тоже? Погнали!" class="final-soc-link")
                img(src="assets/img/final/tw.svg" class="final-soc")
            a(:href="`https://www.facebook.com/sharer/sharer.php?u=${link}`"  class="final-soc-link")
                img(src="assets/img/final/fb.svg" class="final-soc")
        div(class="final-bot-right") 
            div(class="final-bot-right-text") Спасибо, что выбираете Delivery Club — в честь чего мы подготовили подарочный промокод на 10%. Воспользоваться скидкой можно до 31 декабря. Успейте заказать Оливье!
            div(class="promo-block")
                div(class="promo-text") Твой промокод
                div(class="promo-code")  {{promo.promocode}}
</template>

<script>

export default {
  data(){
      return {
          nameZak: '',
          id: 1,
          link: null
      }
    }, 
    methods: {    
        init(e){                
                let gg = e.orders                           
                
                switch(true){
                    case gg == 0:
                        this.id = 1
                        this.nameZak = 'Голодный новобранец'                        
                    break;
                    case gg <= 25:
                        this.id = 2
                        this.nameZak = 'Рядовой Пирожков'                        
                    break;
                    case gg > 25 && gg <= 50:
                        this.id = 3
                        this.nameZak = 'Лейтенант Пепперони'                       
                    break;
                    case gg > 50 && gg <= 100:
                        this.id = 4
                        this.nameZak = 'Полковник Терияки'                        
                    break;
                    case gg > 100:
                        this.id = 5
                        this.nameZak = 'Генерал Рататуй'                                              
                    break;
                }                
        },
        initLink(e){
            this.link = e
        }               
    },
   beforeMount(){ 
        this.init(this.result)    
    },
    computed: {        
        result(){
            return this.$store.getters.getResult()
        },        
        promo(){
            return this.$store.getters.getPromo()
        },
        publicPath(){
            return window.location.protocol + '//' + window.location.hostname
        },
        allOrder(){
            var res = '';
            for(var item of this.result.theBiggestOrder) res += `${item}, `
            return res.slice(0, -2)
        },
        tweet(){
            if (this.id == 1) {
                return "ГОЛОДНЫЙ НОВОБРАНЕЦ";
            } else if (this.id == 2){
                return "РЯДОВОЙ ПИРОЖКОВ";
                
            } else if (this.id == 3){
                return "ЛЕЙТЕНАНТ ПЕППЕРОНИ";
                
            } else if (this.id == 4){
                return "ПОЛКОВНИК ТЕРИЯКИ";
                
            }  else if (this.id == 5){
                return "ГЕНЕРАЛ РАТАТУЙ";
                
            } 
        }
    },
    mounted(){
            var myLink = document.getElementById('myHiddenLink')
            myLink.setAttribute("href", `${this.publicPath}/result${this.id}=${this.result.orders}=${this.result.topFood}=${this.result.topRestaurant}=${this.result.savedTimeInMinutes}`)
            this.initLink(myLink.getAttribute("href"))            
    }
}
 </script>