addToCartButton = document.getElementsByClassName("addButton");

            let afterSchool = new Vue ({
                el: "#app",
                data:{
                        lessons: [
                            {
                            id: 1001,
                            subject: "Math",
                            location: "London",
                            price: 500,
                            spaces: 5,
                            icon: "fa-solid fa-calculator",
                            },

                            {
                             id: 1002,    
                            subject: "English",
                            location: "London",
                            price: 6,
                            spaces: 5,
                            icon: "fa-solid fa-book-open",
                            },

                            {
                                 id: 1003,
                            subject: "Biology",
                            location: "London",
                            price: 20,
                            spaces: 5,
                            icon: "fa-solid fa-dna",
                            },

                            {
                                 id: 1004,
                            subject: "hemistry",
                            location: "London",
                            price: 60,
                            spaces: 5,
                            icon: "fa-solid fa-flask",
                            },
                            {
                                 id: 1005,
                            subject: "Spanish",
                            location: "London",
                            price: 60,
                            spaces: 5,
                            icon: "fa-solid fa-book-open",
                            },
                            {
                                 id: 1006,
                            subject: "French",
                            location: "London",
                            price: 550,
                            spaces: 5,
                            icon: "fa-solid fa-language",
                            },

                            {
                                 id: 1007,
                            subject: "English",
                            location: "USA",
                            price: 60,
                            spaces: 5,
                            icon: "fa-solid fa-book-open",
                            },

                            {
                             id: 1008,
                            subject: "Biology",
                            location: "Germany",
                            price: 20,
                            spaces: 5,
                            icon: "fa-solid fa-dna",
                            },

                            {
                             id: 1009,
                            subject: "Music",
                            location: "Italy",
                            price: 60,
                            spaces: 5,
                            icon: "fa-solid fa-music",
                            },
                            {
                             id: 1010,
                            subject: "Math",
                            location: "Canada",
                            price: 60,
                            spaces: 5,
                            icon: "fa-solid fa-calculator",
                            },

                            ],
                            cart: [],
                            checkout: [],
                            key: '',
                            order: '',
                            showCheckout: true,
                        orderInformation: {
                                nameInput: '',
                                phoneNumber: '',
                                email: '',
                        }

                            
                    },

                methods: {
                    addToCart: function(lesson) {
                        if(lesson.spaces > 0){
                        this.cart.push(lesson);
                        lesson.spaces--;
                        }
                    },

                    removeFromCart: function(lesson){
                        const index =  this.cart.indexOf(lesson);
                        if(index !== -1){
                        this.cart.splice(index, 1)
                        lesson.spaces++;
                        }
                    },

                    isFull: function(lesson){
                    return lesson.spaces === 0;
                    },
                    

                     showCart: function() {
                    
                    if(!this.showCheckout && this.cart.length === 0)
                        return;
                    
                    
                     this.showCheckout = !this.showCheckout; 
        
                },

                    goBack: function() {
                        this.showCheckout = true;
                    }

                   
                },

                computed: {
                    cartCount: function() {
                        return this.cart.length;
                    },
                

                    sortfunction:  function(){
                            let  sortedList =  this.lessons.slice();

                            if(!this.key || !this.order){
                                return sortedList
                            }
                            const order = this.order === 'asc' ? 1 : -1;

                            if(this.key === 'subject') {
                                return sortedList.sort((a,b) => a.subject.localeCompare(b.subject) * order)
                        
                            } else if (this.key === 'price') {
                               return sortedList.sort((a,b) => (a.price - b.price) * order
                                )
                            } else if (this.key === 'location') {
                               return sortedList.sort((a,b) => a.location.localeCompare(b.location) * order
                                )
                            } else if (this.key === 'spaces') {
                                return sortedList.sort((a,b) =>
                                    (a.spaces - b.spaces) * order
                                ) }
                            else  {
                               return sortedList }
                    },


                   validatePhone: function() {
                     let regex = /^\d{10}$/;
                     let phoneNumber = this.orderInformation.phoneNumber.trim() ;
                     return !!(regex.test(phoneNumber) && phoneNumber)
                   },

                   validateName: function(){
                    let regex = (/^[A-Za-z]+$/);
                    let name = this.orderInformation.nameInput.trim()
                    return !!(regex.test(name) && name)
                   },

                   validateEmail:function (){
                    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    let email = this.orderInformation.email.trim();

                    return !!(regex.test(email) && email);
                   },

                    isFormFilled: function(){
                    return this.validateEmail && this.validateName && this.validatePhone
                        
                   },


                },
    

    
            });