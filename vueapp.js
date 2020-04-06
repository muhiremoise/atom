new Vue({
  el:'#vue-app',

  data: {
    health:100,
    ended: false,
    msg: false
  },
  methods: {
    crack: function () {
        this.health -=10;
        if (this.health <=0) {
          this.ended = true;
        }
    },
    restart: function(){
      this.health = 100;
      this.ended = false;
    },
    withdraw: function(){
      this.msg = true;
    },
    
  },

  computed: {

  }
});
