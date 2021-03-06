<template>
    <div>
        <h1>The number is :- {{ views }}</h1>
        <button @click="updateCounter(1)" >increament</button>
        <button @click="updateCounter(-1)" >decreament</button>
        <br>
        <br>
        <br>
        <div v-for="(blog, i) in blogs" :key="i">
            <h1>{{ blog.title }}</h1>
            <p>{{ blog.post }}</p>
        </div>
        <br>
        <br>
        <br>
        <div>
            <h1 v-if="showItem">show this item if "showItem" is true</h1>
            <h1 v-else >show thie item if"showItem" is false</h1>

        </div>
        <button @click="showItem = !showItem" >Change</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            views: 0,
            blogs: [],
            showItem: false,
        }
    },
    methods:{
        updateCounter(number){
            this.views += number
        }
    },
    created(){
        this.views = 100
        let posts = [
            {title:'this is the blog title 1',post:'this is the blog post 1', id:1},
            {title:'this is the blog title 2',post:'this is the blog post 2', id:2},
            {title:'this is the blog title 3',post:'this is the blog post 3', id:3},
            ]
        this.blogs = posts
    }
}
</script>
