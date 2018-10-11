//BASIC VUE
var app = new Vue({
    el: '#app',
    data: {
        status : 'connected',
        email : '',
        password : '',
        events: '',
        event: '',
        location:'',
        address:'',
        isLogin: false
    },
    created: function () {
        this.getAllEvents()
    },
    methods: {
        getAllEvents() {
            let self = this
            axios({
                    method: "GET",
                    url: 'http://localhost:3000/events'
                })
                .then(function (result) {
                    // console.log(result.data)
                    self.events = result.data
                })
        },
        signin : function () {
            let data = {
                email : this.email,
                password : this.password
            }
            
            let self = this

            axios({
                method: "POST",
                url: 'http://localhost:3000/users/login',
                data,
                headers: {
                    token : localStorage.getItem('token')
                }
            })
            .then(function (response) {
                console.log('found user...')
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token)
                this.isLogin = true
                console.log(this.isLogin)                
            })
            .catch(function (err){
                console.log(err.response.data.message)
            })
        },
        createEvent(){
            let data = {
                name : this.event,
                location : this.location,
                address : this.address
            }
            
            let self = this

            axios({
                method: "POST",
                url: 'http://localhost:3000/events/',
                data
            })
            .then(function (response) {
                        
            })
            .catch(function (err){
               
            })
        },
        signout: function(){
            localStorage.removeItem('token')
        },
        search : function(){
            let keyword = this.search
            axios({
                method: "POST",
                url: `http://localhost:3000/events/search/${keyword}`,
                headers: {
                    token : localStorage.getItem('token')
                }
            })
            .then(function (response) {
            
            })
            .catch(function (err){
               
            })
        }
    }

});