<template>
    <div>
        <h1 ref='myref'>Hooks tutorial</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name : 'piyush'
        }
    },
    beforeCreate(){
        console.log(this.name)
    },
    created(){
        console.log('data and function are available but not html', this.name)
    },
    mounted(){
        console.log(this.$refs.myref)
    },

}
</script>
