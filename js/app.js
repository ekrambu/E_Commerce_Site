new Vue({
    el: '#app',
    
    methods:{
        addProductToCart:function(product){
            this.cart.items.push({
                product: product,
                quantity:1
            });
             product.inStock--;
        },
        checkOut:function(){
            if(confirm('Are You Sure To Buy This Product')){
               return this.cart.items=[];
            }
        },
        inCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock--;
            cartItem.quantity++;
        },
        deCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock++;
            cartItem.quantity--;
        },
        
    },
    computed:{
      cartTotal: function(){
          var total = 0;
          this.cart.items.forEach(function(item){
              total +=item.quantity * item.product.price;
          });
          return total;
      },
      taxAmount:function(){
          return ((this.cartTotal * 10) / 100);
      }
    },
    data: {
        isShowingCart:false,
        cart:{
          items:[]  
        },
        products: [
            {
                id: 1,
                name: 'Samsung Galaxy J3',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 4900,
                inStock: 40
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 4890,
                inStock: 85
            },
            {
                id: 3,
                name: 'Samsung Galaxy J3',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 5200,
                inStock: 5
            },
            {
                id: 4,
                name: 'Samsung Galaxy J3',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 4900,
                inStock: 35
            },
            {
                id: 5,
                name: 'Samsung Galaxy J3',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 4990,
                inStock: 0
            },
            {
                id: 6,
                name: 'Samsung Galaxy J3',
                description: 'Samsung develops new On-Device NPU tech for faster, smarter AI ... by On-Device NPUs “at the place where the data for an image or fingerprint sensor is being obtained.',
                price: 4850,
                inStock: 25
            }
        ]
    }
});