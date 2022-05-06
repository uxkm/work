<template>
  <div class="ukheader">
    <div class="guide-logo">
      <img :src="$config.asset.imgURL + '/images/common/BI-white.svg'" alt="LGU plus 로고" />
      <div class="c-pub-select-list">
        <a href="#" class="btn-1" @click="logoClickHandler('btnClick', $event)">PC / PUB LIST</a>
        <ul class="menu-list">
          <li>
            <a href="#" @click="logoClickHandler('pcClick', $event)">PC / PUB LIST</a>
          </li>
          <li>
            <a href="#" @click="logoClickHandler('moClick', $event)">MO / PUB LIST</a>
          </li>
        </ul>
      </div>
    </div>
    <nav class="publist-nav-part">
      <ul class="menu-list">
        <li><a href="#" class="on" @click="logoClickHandler('indv', $event)">개인</a></li>
        <li><a href="#" @click="logoClickHandler('enterprise', $event)">기업</a></li>
      </ul>
    </nav>
    <nav class="uknav" v-if="type1 === 'pc' && type2 === 'indv'">
      <a href="#" v-for="(item, index) in $store.state.pubguideStore.allFiles.arrPcIndvFile" @click="changeTableHandler(item.url, item.catName)" :key="item.catName" :class="'menu1-' + (index + 1)">{{
        item.catName
      }}</a>
    </nav>
    <nav class="uknav" v-if="type1 === 'pc' && type2 === 'enterprise'">
      <a
        href="#"
        v-for="(item, index) in $store.state.pubguideStore.allFiles.arrPcEnterpriseFile"
        @click="changeTableHandler(item.url, item.catName)"
        :key="item.catName"
        :ref="'menu_1_' + (index + 1)"
        :class="'menu_1_' + (index + 1)"
        >{{ item.catName }}</a
      >
      <!-- <a href="#" @click="changeTableHandler('/guide-pub/data/pc/enterprise/part1.json', '타이틀1')">피개메뉴1</a>-->
    </nav>
    <nav class="uknav" v-if="type1 === 'mo' && type2 === 'indv'">
      <a href="#" v-for="item in $store.state.pubguideStore.allFiles.arrMobileIndvFile" @click="changeTableHandler(item.url, item.catName)" :key="item.catName">{{ item.catName }}</a>
    </nav>
    <nav class="uknav" v-if="type1 === 'mo' && type2 == 'enterprise'">
      <a href="#" v-for="item in $store.state.pubguideStore.allFiles.arrMobileEnterpriseFile" @click="changeTableHandler(item.url, item.catName)" :key="item.catName">{{ item.catName }}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'GuideNav',
  data() {
    return {
      type1: 'pc',
      type2: 'indv',
    };
  },
  mounted() {
    document.querySelector('.menu1-1').click();
  },
  methods: {
    logoClickHandler(part, event) {
      /* eslint-disable */
      event.preventDefault();
      const me = this,
        $theSelf = $(event.target),
        $theNav = $theSelf.closest('nav'),
        $cPubSelectList = $($theSelf).closest('.c-pub-select-list'),
        $btn1 = $cPubSelectList.find('.btn-1');

      if (part === 'btnClick') {
        if ($theSelf.hasClass('show')) {
          $theSelf.removeClass('show');
        } else {
          $theSelf.addClass('show');
          $theSelf.removeClass('mo pc');
          if ($theSelf.text().toLowerCase().indexOf('pc') >= 0) {
            $theSelf.addClass('mo');
          } else {
            $theSelf.addClass('pc');
          }
        }
      } else if (part === 'pcClick') {
        $btn1.text('PC / PUBLIST').removeClass('show');
        me.type1 = 'pc';
        this.$store.commit('pubguideStore/changeType1', me.type1);
        if (me.type2 == 'indv') {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].url });
        } else {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile[0].url });
        }
        this.$emit('reAcc1');
      } else if (part === 'moClick') {
        $btn1.text('MO / PUBLIST').removeClass('show');
        me.type1 = 'mo';
        this.$store.commit('pubguideStore/changeType1', me.type1);
        if (me.type2 == 'indv') {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrMobileIndvFile[0].url });
        } else {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile[0].url });
        }
        this.$emit('reAcc1');
      } else if (part === 'indv') {
        me.type2 = 'indv';
        $theNav.find('.on').removeClass('on');
        $theSelf.addClass('on');
        if (me.type1 == 'pc') {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].url });
          this.$emit('reAcc2', this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].url);
          this.$store.commit('pubguideStore/changeTitle', {
            newTitle: this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].catName,
            url: this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].url,
          });
        } else {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrMobileIndvFile[0].url });
          this.$emit('reAcc2', this.$store.state.pubguideStore.allFiles.arrMobileIndvFile[0].url);
          this.$store.commit('pubguideStore/changeTitle', {
            newTitle: this.$store.state.pubguideStore.allFiles.arrMobileIndvFile[0].catName,
            url: this.$store.state.pubguideStore.allFiles.arrPcIndvFile[0].url,
          });
        }
      } else if (part === 'enterprise') {
        me.type2 = 'enterprise';
        $theNav.find('.on').removeClass('on');
        $theSelf.addClass('on');
        if (me.type1 == 'pc') {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile[0].url });
          this.$emit('reAcc2', this.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile[0].url);
          this.$store.commit('pubguideStore/changeTitle', {
            newTitle: this.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile[0].catName,
            url: this.$store.state.pubguideStore.allFiles.arrPcEnterpriseFile[0].url,
          });
        } else {
          this.$store.dispatch('pubguideStore/initPubList', { me: null, url: this.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile[0].url });
          this.$emit('reAcc2', this.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile[0].url);
          this.$store.commit('pubguideStore/changeTitle', {
            newTitle: this.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile[0].catName,
            url: this.$store.state.pubguideStore.allFiles.arrMobileEnterpriseFile[0].url,
          });
        }
      }
      return false;
    },
    changeTableHandler(dataUrl, tit1) {
      this.$emit('reAcc2', dataUrl);
      this.$store.commit('pubguideStore/changeTitle', { newTitle: tit1, url: dataUrl });
      this.$store.dispatch('pubguideStore/initPubList', { me: null, url: dataUrl });
    },
  },
};
</script>
