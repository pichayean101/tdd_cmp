<template>
<div>
    First name:<br>
    <input type="text" v-model="user.firstName" ref="firstName" value="Mickey"><br> 
    Last name:<br>
    <input type="text" v-model="user.lastName" ref="lastName" value="Mouse"><br>
    Sex :<br>
    <select v-model="user.sex" ref="sex">
        <option v-for="s in sex" :key="s.value" v-bind:value="s.value">
            {{ s.name }}
        </option>
    </select><br><br>
    <button @click="save">Add</button>
    <br><br>
    <center><Table  v-bind:dataTable="users"/></center>  
    
</div>
</template>
<script>
import Table from './Table'
export default {
    data(){
        return {
            user :{
                firstName :'',
                lastName :'',
                sex:'M'
            },
            fullName:'',
            sex : [{name:'Men',value:'M'},{name:'Female',value:'F'}],
            users:[{firstName:'BB',lastName:'bbb'}, {firstName:'CC',lastName:'ccc'}]
        }
    },
    methods: {
        save(){
            this.fullName =  `${this.user.firstName } ${this.user.lastName }; sexual : ${this.user.sex }`
            this.users.push({firstName:this.user.firstName,lastName:this.user.lastName})
        },
        
    },
    components: {
        Table
    }
}
</script>
