<script>
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import  apiService  from "../services/apiService";

export default defineComponent({
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined
  },
  data(){
    return{
      weatherInfo:{
        weather:[
          {
            icon:''
          }]
      },
      currentLocation:{
        lat:'',
        lng:''
      },
      weatherstatus:false
    }
  },
  methods: {
    showPosition(position) {
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;
        this.getCurrentLocation();
    },
    getCurrentLocation(){
      apiService.getCurrentWeather(this.currentLocation).then((res)=>{
        this.weatherInfo = res.data;
        console.log(this.weatherInfo);
        this.weatherstatus = true;
      }).catch(function (err) {
                console.log(err);
            })
    }
  },
  created(){
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }
});
</script>

<template>
  <div style="background: #ececec; padding: 30px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card hoverable style="width: 240px">
    <template #cover>
      <div v-if="weatherInfo.weather[0]" >
        <img alt="example" :src="weatherInfo.weather[0].icon"/>
      </div>
      
      
      
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
      </a-col>
      <a-col :span="12">
        <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" :src="weatherInfo.weather[0].icon" />
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
      </a-col>
    </a-row>
  </div>
</template>


