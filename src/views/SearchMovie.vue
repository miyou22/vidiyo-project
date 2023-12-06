<template>
  <main>
    <div class="btn-wrap">
      <div class="btnGroup">
        <button type="button" class="on" @click="isActive">인기</button>
        <button type="button" @click="isActive">영화</button>
        <button type="button" @click="isActive">인물</button>
      </div>
    </div>
    <div class="popular-list c1" >
      <div class="list" v-for="item in items" :key="item">
        <a href="#"><img :src="item.img"  @click="$router.push('/detail')" /></a>
      </div>
    </div>
    <div class="movie-list c1" >
      <div class="list" v-for="movie in movies" :key="movie">
        <img :src="movie.img" />
      </div>
    </div>
    <div class="person-list c1">
      <div class="list2" v-for="person in people" :key="person">
        <img :src="person.img" />
        <p>{{ person.name }}</p>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: "SearchMovie",
  components: {},
  data() {
    return {
      items: [
        {
          img: require("../assets/image/Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
        {
          img: require("../assets/image//Rectangle98.png"),
        },
      ],
      movies: [
        {
          img: require("../assets/image/Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
        {
          img: require("../assets/image//Rectangle90.png"),
        },
      ],
      people: [
        {
          name:"한효주",
          img: require("../assets/image/person1.jpg"),
        },
        {name:"한효주",
          img: require("../assets/image/person1.jpg"),
        },
      ],
    };
  },

  methods: {
    isActive(e) {
      const btns = document.querySelectorAll(".btnGroup>button");
      const list = document.querySelectorAll(".c1");

      const targetEl = e.target;
      for (let i = 0; i < btns.length; i++) {
        if (btns[i] == targetEl) {
          btns[i].className = "on";
          list[i].style.display = "flex";
        } else {
          btns[i].className = "";
          list[i].style.display = "none";
        }
      }
    },
  },
};
</script>

<style scoped>
main{
  padding: 56px 40px 0;
}
.btnGroup {
  display: flex;
}
button {
  outline: 0;
  width: 70px;
  padding-bottom: 16px;
  color: #7c7b84;
  text-align: center;
  font-size: var(--size4);
  border: 0;
  background-color: inherit;
}
button:hover {
  color: white;
}
button.on {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.list > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.list {
  padding: 0 6px;
}
.c1{
  display: flex;
  flex-wrap: wrap;
  margin-top: 96px;
}
.person-list>.list2>img{
  width: 192px;
  height: 192px;
  border-radius: 50%;
  margin-right: 10px;
}
.movie-list,.person-list{
  display: none;
}
.list2>p{
  color: white;
  font-size: var(--size4);
  letter-spacing: -0.96px;
  font-family: Inter;
  text-align: center;
  margin-top: 20px;
  margin-bottom:204px;
}
</style>