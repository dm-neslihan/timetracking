<template>
    <div class="login-content col-md-9 col-xl-8 col-12 pb-md-3 pl-md-5 mt-5 mx-auto">
        <form id="login">
            <div class="row mb-3">
                <div class="col-sm-3">
                    <label for="user">Username</label>
                </div>
                <div class="col-sm-9">
                    <input
                        id="user"
                        type="text"
                        class="form-control"
                        v-model="userObj.name" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <label for="password">Password</label>
                </div>
                <div class="col-sm-9">
                    <input
                        id="password"
                        type="password"
                           class="form-control"
                           v-model="userObj.pass" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <button @click.prevent="setUser()" type="button" class="btn btn-primary col-sm-12 mt-3">Login</button>
                </div>
            </div>
        </form>
        <!--
        Build form here
        on click create new api object,
        if its valid redirect to app page
        if not stay here and throw error
         -->
    </div>
</template>

<script>
    import { mapActions } from 'vuex'; // todo

    export default {
        name: 'login',
        data() {
            return {
                userObj: {
                    name: null,
                    pass: null
                }
            }
        },
        methods: {
            setUser: function () { // todo
                this.$store.dispatch('moduleUser/createApiObject', { data: this.userObj })
                  .then(() => this.$router.push('/'))
                  .catch((err) => console.log("err occurred in setUser: ", err));
            }
        },
        mounted() {
            this.$router.push('/')
        }
    }
</script>
