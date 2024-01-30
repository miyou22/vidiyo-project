<template>
  <div>
    <ul v-if="searchResults.length > 0">
      <li v-for="result in searchResults" :key="result.id">{{ result.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: String,
  },
  data() {
    return {
      searchResults: [],
    };
  },
  watch: {
    searchQuery: 'getSearchResults',
  },
  methods: {
    getSearchResults() {
      // 여기에서 실제 API 호출을 수행하고 검색 결과를 업데이트합니다.
      // 이 예제에서는 간단히 하드코딩된 결과를 사용합니다.
      // 실제로는 백엔드에서 데이터를 받아오는 비동기 작업이 필요합니다.
      // 여기서는 입력된 검색어와 관련된 결과를 하드코딩된 형태로 표시합니다.
      this.searchResults = [
        { id: 1, title: `${this.searchQuery}에 대한 검색 결과 ` },
        { id: 2, title: `${this.searchQuery}에 대한 검색 결과 ` },
        { id: 3, title: `${this.searchQuery}에 대한 검색 결과` },
      ];
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일링을 원하는 경우 여기에 작성 */
</style>
