new Vue ({
  el: '#app',
   data: {
     previousValue: null,
     value: '',
     operatorClick: null,
     operator: null
   },
   methods: {
     clear: function (){
       this.value = '';
     },
     sign: function () {
       this.value = this.value.charAt(0) === '-' ? this.value.slice(1) : `-${this.value}`;
     },
     percentage: function () {
       this.value = `${parseFloat(this.value) / 100}`;
     },
     setValue: function (v) {
       if (this.operatorClick) {
         this.value = '';
         this.operatorClick = false;
       }
       this.value += v;
     },
     dot: function () {
       if (this.value.indexOf('.') === -1){
         this.value += '.';
       }
     },
     switchPrevious: function () {
       this.previousValue = this.value;
       this.operatorClick = true;
     },
     multiply: function () {
       this.operator =  (a, b) => a * b;
       this.switchPrevious();
     },
     divide: function () {
       this.operator = (a, b) => a / b;
       this.switchPrevious();
     },
     plus: function () {
       this.operator = (a ,b) => a + b;
       this.switchPrevious();
     },
     minus: function () {
       this.operator = (a, b) => a - b;
       this.switchPrevious();
     },
     equal: function (a, b) {
       this.value = this.operator(parseFloat(this.value), parseFloat(this.previousValue));
     }

   }
});
