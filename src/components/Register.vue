<template>
<div>
    <p>
        {{user}}
    </p>
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
    <button @click="save">Increment</button>

</div>
</template>
<script>
export default {
    data(){
        return {
            user :{
                firstName :'',
                lastName :'',
                sex:'M'
            },
            fullName:'',
            sex : [{name:'Men',value:'M'},{name:'Female',value:'F'}]
        }
    },
    methods: {
        save(){
            this.fullName =  `${this.user.firstName } ${this.user.lastName }; sexual : ${this.user.sex }`
        }
    }
}
</script>
