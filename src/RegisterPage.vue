<script setup>
    import NavBar from './NavBar.vue';
    import router from "./router";
    import {ref} from "vue";
    import { show_dialog } from './notificationdaemon';
    import app from './firebase.js';
    import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
    const username=ref("");
    const password=ref("");
    const email=ref("");
    function handle_register(e){
        e.preventDefault();
        const auth=getAuth(app);
        const email_val=email.value;
        const pass_val=password.value;
        if(email_val=='' || email_val.indexOf("@")==-1){
            return show_dialog("error","invalid email",true);
        }
        if(pass_val.length<6){
            return show_dialog("error","password too short",true);
        }
        createUserWithEmailAndPassword(auth,email_val,pass_val);
        router.push("/");
    }
</script>
<style>
    .row{display: flex;flex-direction: row;}
    #login-btn{
    padding: 8px;
    border-radius: 12px;
    background-color: blue;
    transition: 0.2s background-color ease-in-out;
    &:hover{
        background-color: green;
    }
}
</style>
<template>
    <NavBar/>
    <div class="row" style="justify-content: center;color: black;">
        <div style="display: flex;flex-direction: column;justify-content: center;height: 100vh;">
            <span style="display: block;text-align: center;font-size: 24px;margin-bottom: 12px;">register</span>
            <form action="" style="display: flex;flex-direction: column;">
                <div class="row" style="margin-bottom: 12px;gap: 8px;">
                    <label for="email-field">email</label>
                    <input type="email"  id="email-field" required  v-model="email">
                </div>
                <div class="row" style="margin-bottom: 12px;gap: 8px;">
                    <label for="username-field">username</label>
                    <input type="text" id="username-field" v-model="username">
                </div>
                <div class="row" style="margin-bottom: 12px;gap: 8px;" >
                    <label for="password-field">password</label>
                    <input type="password" id="password-field" v-model="password">
                </div>
                <button id="login-btn" @click="handle_register">register</button>
            </form>
        </div>
    </div>
</template>