<template>
<div class="hello">
    <table style="width:30px">
        <tr>
            <th>firstName</th>
            <th>lastName</th>
        </tr>
        <tr v-for="(dt,index) in dataTable" :key="index">
            <td>{{dt.firstName}}</td>
            <td>{{dt.lastName}}</td>
        </tr>
    </table>
</div>
</template>

<script>
/* eslint-disable */
export default {
    props: ['dataTable'],
    // props: {
    //     dataTable: []
    // }
}
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
