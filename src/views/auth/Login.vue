<template>
    <div>

        <div class="logo"></div>
        <div class="login-block">
            <h1>Login</h1>
            <input type="email"  v-model="user.email" value="" placeholder="Email" id="username" />
            <input type="password" v-model="user.password" value="" placeholder="Password" id="password" />
           <!-- <button class="btn btn-block btn-primary mb-4" @click.prevent="login(user)">Connexion</button>-->
            <span v-if="errorMessage !== undefined" style="color: red;" class="form-control is-invalid">{{errorMessage}}</span>

            <span v-if="champVide" style="color: red;" class="form-control is-invalid">Tous les champs ne sont pas renseignés !<br></span>
            <br>
            <Button class="btn btn-block btn-primary mb-4" type="error" :loading="loading2" icon="ios-checkmark" @click.prevent="connection">
                <span v-if="!loading2">Connexion</span>
                <span v-else>Connexion en cours...</span>
            </Button>
        </div>



    </div>
</template>

<script>
    import { mapGetters, mapActions} from 'vuex'
    export default {
        name: "Login",
        data(){
            return {
                passwordFieldType: 'password',
                isVisible: false,
                user: {
                    email: '',
                    password: '',
                    hidePassword: true
                }
, loading: false,
                loading2: false
            }
        },
        created(){

        },
        computed: {
            ...mapGetters('Utilisateurs', ['loader', 'champVide', 'error', 'errorMessage']),
        },
        methods: {

            ...mapActions('Utilisateurs', ['login']),

            changePasswordVisibility(){
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
                this.isVisible = !this.isVisible
            },
            toLoading () {
                this.loading = true;
            },
            connection () {
                this.loading2 = true;

                if (!this.champVide){

                    this.loading2=false
                }
                if (this.errorMessage === undefined)
                {
                    this.loading2=false
                }

                this.login(this.user)

            }
        }
    }
</script>

<style scoped src="./style2.css">

</style>