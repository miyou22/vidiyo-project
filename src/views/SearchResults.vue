<template>
  <div class="search-results">
    <ul>
      <li v-for="result in filteredResults" :key="result.id" @click="selectResult(result.title)">
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['searchQuery'],
  data() {
    return {
      searchResults: [
        { id: 1, title: '계정관리' },
        { id: 2, title: '사용문의' },
        { id: 3, title: '콘텐츠' },
        // ... (기타 검색 결과)
      ],
    };
  },
  computed: {
    filteredResults() {
      // 검색어가 비어있으면 전체 결과 반환
      if (!this.searchQuery) {
        return this.searchResults;
      }

      // 검색어가 있는 경우 검색어와 일치하는 결과만 반환
      return this.searchResults.filter(result =>
        result.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    selectResult(resultTitle) {
      // 선택된 결과를 부모 컴포넌트에 알림
      this.$emit('selectResult', resultTitle);
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일링을 원하는 경우 여기에 작성 */
</style>
