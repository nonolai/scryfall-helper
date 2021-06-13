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
</style>
