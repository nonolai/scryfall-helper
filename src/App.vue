<template>
    <div id="app">
        <Header />
        <SearchBar />
    </div>
</template>

<script>
import Header from 'components/Header.vue';
import SearchBar from 'components/SearchBar.vue';

export default {
    components: {
        Header,
        SearchBar,
    },
};
</script>

<style scoped>
#app {
    margin: auto;
    width: 500px;
    padding-top: 200px;
}

@media (max-width: 500px) {
    #app {
        padding-top: 0px;
    }
}
</style>
