<template>
  <div class="detailParam" v-if="Object.keys(detailParam).length != 0">
    <span class="key">{{ detailParam.rule.key }}:</span>
    <h1>{{ detailParam.rule.disclaimer }}</h1>
    <div
      class="tables"
      v-for="tables in detailParam.rule.tables"
      :key="tables.index"
    >
      <div v-for="item in tables" :key="item.index" class="item-param">
        <span v-for="items in item" :key="items.index">
          {{ items }}
        </span>
      </div>
    </div>

    <div class="wrapper">
      <span class="key1">{{ detailParam.info.key }}:</span>
      <div class="info" v-for="info in detailParam.info.set" :key="info.index">
        <span class="key2">{{ info.key }}</span>
        <span class="value">{{ info.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailParam",
  props: {
    detailParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detailParam h1 {
  margin: 10px 8px;
}

.tables{
  padding-left: 20px;
}
.item-param,
.info {
  display: flex;
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.detailParam .key {
  display: block;
  margin: 10px;
}
.item-param span {
  flex: 1;
}
.item-param span:not(:nth-child(1)),
.info span:not(:nth-child(1)) {
  color: rgb(255, 102, 0);
  margin-left: 15px;
}
.wrapper {
  margin-top: 10px;
  padding-left: 20px;
}
.wrapper .key1 {
  display: block;
}
.info span {
  flex: 1;
}
.info .value {
  position: relative;
  right: 20px;
  width: 100%;
}
</style>